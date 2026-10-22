"""rajan.svg から「右上から左下へてくてく歩いてきて止まる」SVG を組み立てる。

元の 24 個の path は順番も中身も変えない。CSS の transform だけで動かす。
- 歩く向き: アイソメトリックで左下 w = (-cos30, sin30)
- 足: 腰を中心にしたせん断 matrix(1,0,c,d,0,0)。着地している足は地面に止まる
- 移動と足は同じ区間・同じイージングで動かすので、足が滑らない

使い方: python3 scripts/build_rajan_walk.py public/images/rajan.svg public/images/rajan_walk.svg
"""
import re
import sys

src, out = sys.argv[1], sys.argv[2]
DELAY = .85  # トップのヒーローで、ボタンが出たあとに歩き出す（v-reveal の 650ms の次）
paths = re.findall(r'<path [^>]*/>', open(src).read())
assert len(paths) == 24

W = (-0.8660, 0.5)            # 歩く向き（画面上の単位ベクトル）
HIP_L, LEN_L = (225, 460), 440  # 奥の足（path 3,4,17）
HIP_R, LEN_R = (325, 470), 480  # 手前の足（path 5,6,7）

# 足の着地位置（進行方向の座標。0 が最後の立ち位置）
# R,L を交互に出し、歩幅を 80 → 100 → 100 → 80 → 40 と小さくして止まる
foot = {'L': -400, 'R': -400}
plan = [('R', -320, .34), ('L', -220, .36), ('R', -120, .34),
        ('L', -40, .34), ('R', 0, .36), ('L', 0, .40)]
FADE, SETTLE = .30, .45

times, body, offs = [0.0], [-400.0], {'L': [0.0], 'R': [0.0]}
swing = []
t = 0.0
for leg, to, dur in plan:
    swing.append((leg, t, t + dur, abs(to - foot[leg])))
    foot[leg] = to
    t += dur
    b = (foot['L'] + foot['R']) / 2
    times.append(t); body.append(b)
    for k in 'LR':
        offs[k].append(foot[k] - b)
WALK_END = t
TOTAL = WALK_END + SETTLE

STEP_EASE = 'cubic-bezier(.4,.1,.6,.9)'  # 一歩ごとの軽い押し出し（てくてく感）


def pct(x):
    return f'{x / TOTAL * 100:.2f}%'


def frames(name, pts, ease):
    rows = [f'{pct(tt)}{{transform:{tf};animation-timing-function:{ease}}}' for tt, tf in pts]
    if pts[-1][0] < TOTAL:
        rows.append(f'100%{{transform:{pts[-1][1]}}}')
    return f'@keyframes {name}{{' + ''.join(rows) + '}'


def shear(k, length):
    c = W[0] * k / length
    d = 1 + W[1] * k / length
    return f'matrix(1,0,{c:.4f},{d:.4f},0,0)'


css = []
css.append(frames('walk', [(tt, f'translate({b * W[0]:.1f}px,{b * W[1]:.1f}px)')
                           for tt, b in zip(times, body)], STEP_EASE))
css.append(frames('leg-l', [(tt, shear(k, LEN_L)) for tt, k in zip(times, offs['L'])], STEP_EASE))
css.append(frames('leg-r', [(tt, shear(k, LEN_R)) for tt, k in zip(times, offs['R'])], STEP_EASE))


def lift_frames(name, leg, length):
    pts = [(0.0, 'scaleY(1)')]
    for lg, a, b, dist in swing:
        if lg != leg:
            continue
        h = min(18, 6 + dist * .1)  # 大きい一歩ほど足を高く上げる
        pts += [(a, 'scaleY(1)'), ((a + b) / 2, f'scaleY({1 - h / length:.4f})'), (b, 'scaleY(1)')]
    return frames(name, pts, 'ease-in-out')


css.append(lift_frames('lift-l', 'L', LEN_L))
css.append(lift_frames('lift-r', 'R', LEN_R))

# 上半身：一歩ごとに少し弾む → 止まるときに小さく沈んで戻る
bob = [(0.0, 'translateY(0)')]
for _, a, b, dist in swing:
    bob += [(a, 'translateY(0)'), ((a + b) / 2, f'translateY({-min(9, 3 + dist * .06):.1f}px)'), (b, 'translateY(0)')]
bob += [(WALK_END + .15, 'translateY(6px)'), (TOTAL, 'translateY(0)')]
css.append(frames('bob', bob, 'ease-in-out'))

css.append(f'@keyframes fade{{0%{{opacity:0}}{pct(FADE)}{{opacity:1}}100%{{opacity:1}}}}')

anim = f'{TOTAL:.2f}s linear {DELAY}s both'
css.append(f'.walk{{animation:walk {anim},fade {anim}}}')
css.append(f'.upper{{animation:bob {anim}}}')
for k, (hx, hy) in (('l', HIP_L), ('r', HIP_R)):
    origin = f'transform-box:view-box;transform-origin:{hx}px {hy}px'
    css.append(f'.leg-{k}{{animation:leg-{k} {anim};{origin}}}')
    css.append(f'.lift-{k}{{animation:lift-{k} {anim};{origin}}}')
css.append('@media (prefers-reduced-motion:reduce){.walk,.upper,.leg-l,.leg-r,.lift-l,.lift-r{animation:none}}')

p = lambda *ids: ''.join(paths[i - 1] for i in ids)
body_svg = (
    f'<g class="walk">'
    f'<g class="upper">{p(1, 2)}</g>'
    f'<g class="leg-l"><g class="lift-l">{p(3, 4)}</g></g>'
    f'<g class="leg-r"><g class="lift-r">{p(5, 6, 7)}</g></g>'
    f'<g class="upper">{p(*range(8, 17))}</g>'
    f'<g class="leg-l"><g class="lift-l">{p(17)}</g></g>'
    f'<g class="upper">{p(*range(18, 25))}</g>'
    f'</g>'
)

# 歩き始めの位置（右上）まで入る舞台。止まったときの人物（x 150〜440）が左右の真ん中に来るようにする
sx, sy = body[0] * W[0], body[0] * W[1]
center, right = 295, round(440 + sx + 20)
vb = (2 * center - right, round(sy) - 15, 2 * (right - center), round(975 - (sy - 15)))
svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb[0]} {vb[1]} {vb[2]} {vb[3]}">'
       f'<style>{"".join(css)}</style>{body_svg}</svg>\n')
open(out, 'w').write(svg)
print('total', round(TOTAL, 2), 's  viewBox', vb, ' start', round(sx), round(sy))
