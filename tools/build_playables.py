#!/usr/bin/env python3
"""Build the YouTube Playables bundle of Sand Sprites.

    python3 tools/build_playables.py

Writes dist/playables/ (index.html at the root, as Playables wants) and dist/sand-sprites-playables.zip.
The bundle is the symbols mode: playables/playables.js sets it up and joins the game to the Playables SDK,
which index.html loads before any game code. Only the H.264 videos go in; no service worker, no app manifest.
"""
import pathlib, re, shutil, sys, zipfile

ROOT = pathlib.Path(__file__).resolve().parent.parent
DIST = ROOT / 'dist'
OUT = DIST / 'playables'
SDK = '<script src="https://www.youtube.com/game_api/v1"></script>'
ASSETS = ['beach/day.jpg', 'beach/night.jpg', 'beach/props.webp', 'beach/props_e.png', 'beach/fireworks.jpg',
          'beach/day.mp4', 'beach/night.mp4', 'beach/sunset.mp4', 'beach/sunrise.mp4']
MiB = 1024 * 1024


def main():
    shutil.rmtree(OUT, ignore_errors=True)
    (OUT / 'beach').mkdir(parents=True)
    html = (ROOT / 'index.html').read_text(encoding='utf-8')
    # home-screen app bits are not wanted inside YouTube
    html = re.sub(r'<link rel="(?:manifest|apple-touch-icon)"[^>]*>\n', '', html)
    html = re.sub(r'<meta name="(?:apple-mobile-web-app-[a-z-]+|mobile-web-app-capable)"[^>]*>\n', '', html)
    # the SDK first, then the glue, then everything else
    head = '<meta charset="utf-8">\n'
    assert html.count(head) == 1, 'charset meta not found'
    html = html.replace(head, head + SDK + '\n<script src="playables.js"></script>\n', 1)
    assert html.index(SDK) < html.index('<script>'), 'the SDK must load before the game code'
    (OUT / 'index.html').write_text(html, encoding='utf-8')
    shutil.copy(ROOT / 'playables' / 'playables.js', OUT / 'playables.js')
    for f in ASSETS:
        shutil.copy(ROOT / f, OUT / f)

    # checks: the only remote address is the SDK; size limits (30 MiB a file, 250 MiB in all)
    remote = set(re.findall(r'https?://[^\s"\'`)<>]+', html + (OUT / 'playables.js').read_text(encoding='utf-8')))
    remote.discard('https://www.youtube.com/game_api/v1')
    if remote:
        sys.exit(f'remote addresses in the bundle: {sorted(remote)}')
    files = sorted(p for p in OUT.rglob('*') if p.is_file())
    total = 0
    for p in files:
        n = p.stat().st_size
        total += n
        if n >= 30 * MiB:
            sys.exit(f'{p.relative_to(OUT)} is {n / MiB:.1f} MiB (limit 30 MiB)')
    if total >= 250 * MiB:
        sys.exit(f'bundle is {total / MiB:.1f} MiB (limit 250 MiB)')

    zp = DIST / 'sand-sprites-playables.zip'
    zp.unlink(missing_ok=True)
    with zipfile.ZipFile(zp, 'w', zipfile.ZIP_DEFLATED) as z:
        for p in files:
            z.write(p, p.relative_to(OUT).as_posix())
    for p in files:
        print(f'  {p.relative_to(OUT).as_posix():24s} {p.stat().st_size / 1024:8.0f} KB')
    print(f'{len(files)} files, {total / MiB:.1f} MiB  ->  {zp.relative_to(ROOT)} ({zp.stat().st_size / MiB:.1f} MiB)')


if __name__ == '__main__':
    main()
