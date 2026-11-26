// Sand Sprites on YouTube Playables: joins the game to the Playables SDK, which the page loads just before this file.
// The Playables build is the symbols mode (no speech), carries only the H.264 videos, and keeps its saved data
// in YouTube's cloud save instead of this device's storage.
(() => {
  'use strict';
  window.SAND_MODE = 'symbols';
  window.SAND_NO_HEVC = true;
  const yt = window.ytgame, inYT = !!(yt && yt.IN_PLAYABLES_ENV);
  if (!inYT) return; // opened outside YouTube (the SDK does nothing there): the game runs on its own
  const warn = e => { try { yt.health.logWarning(String((e && e.message) || e)); } catch (_) {} };
  let data = {}, loaded = false, dirty = false, timer = 0;
  // cloud save: the whole store is one small JSON string; changes are written a moment later, and at once when YouTube pauses the game
  function flush() { clearTimeout(timer); timer = 0; if (!loaded || !dirty) return; dirty = false; yt.game.saveData(JSON.stringify(data)).catch(warn); }
  window.SAND_STORE = {
    get: k => (Object.prototype.hasOwnProperty.call(data, k) ? data[k] : null),
    set(k, v) { v = String(v); if (data[k] === v) return; data[k] = v; dirty = true; if (!timer) timer = setTimeout(flush, 1200); },
  };
  window.SAND_HOST = {
    get audio() { try { return yt.system.isAudioEnabled(); } catch (e) { return true; } },
    firstFrame() { try { yt.game.firstFrameReady(); } catch (e) { warn(e); } },
    ready() { try { yt.game.gameReady(); } catch (e) { warn(e); } },
    onAudio(cb) { yt.system.onAudioEnabledChange(cb); },
    onPause(cb) { yt.system.onPause(() => { flush(); cb(); }); },
    onResume(cb) { yt.system.onResume(cb); },
  };
  // the game starts only once the saved data is in (saveData must never come before loadData has finished)
  window.SAND_BOOT = start => {
    yt.game.loadData()
      .then(s => { try { const d = s ? JSON.parse(s) : {}; if (d && typeof d === 'object' && !Array.isArray(d)) data = d; } catch (e) { warn(e); } }, warn)
      .then(() => { loaded = true; start(); });
  };
})();
