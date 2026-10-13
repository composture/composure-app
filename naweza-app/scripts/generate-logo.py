"""
Generate a new COMPOSURE logo (1024x1024) to replace logo.jpeg.
Design v2 — mathematically centered, no skew:
  dark navy bg, double ring badge, cyan "C" arc (gap at 3 o'clock),
  symmetric circuit nodes, white "C" monogram, COMPOSURE wordmark, tagline.
All text centered with anchor=mm. Supersampled 3x, Lanczos downscale.
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import math

S = 1024
SS = 3
W = S * SS

NAVY = (10, 37, 64)        # #0A2540
DEEP_BLUE = (15, 52, 96)   # #0F3460
CYAN = (56, 189, 248)      # #38BDF8
CYAN_BRIGHT = (125, 211, 252)
WHITE = (255, 255, 255)

img = Image.new("RGB", (W, W), NAVY)

# --- soft radial glow behind monogram ---
glow = Image.new("RGB", (W, W), NAVY)
gd = ImageDraw.Draw(glow)
gd.ellipse([W*0.20, W*0.14, W*0.80, W*0.74], fill=(18, 62, 108))
glow = glow.filter(ImageFilter.GaussianBlur(W // 7))
img = Image.blend(img, glow, 0.40)
draw = ImageDraw.Draw(img)

FONT_BOLD = "C:/Windows/Fonts/arialbd.ttf"
FONT_REG = "C:/Windows/Fonts/arial.ttf"

# ============ BADGE RINGS (perfectly concentric) ============
cx = W / 2
m = W * 0.040                       # margin
outer = [m, m, W - m, W - m]        # outer ring box
draw.ellipse(outer, outline=DEEP_BLUE, width=int(W * 0.008))

gap_ring = W * 0.020
inner = [m + gap_ring, m + gap_ring, W - m - gap_ring, W - m - gap_ring]
draw.ellipse(inner, outline=(28, 78, 138), width=int(W * 0.0035))

# ============ CYAN "C" ARC ============
cy_arc = W * 0.385                  # arc center (slightly above canvas middle)
R = W * 0.200                       # arc radius
arc_w = int(W * 0.034)

# Gap centered at 0 deg (3 o'clock), symmetric -> reads as a clean "C"
half_gap = 38
start, end = half_gap, 360 - half_gap

# Draw arc: PIL angles go clockwise from 3 o'clock (y-down).
# start=38 -> end=322 sweeps the long way around -> C opens right.
box = [cx - R - arc_w/2, cy_arc - R - arc_w/2, cx + R + arc_w/2, cy_arc + R + arc_w/2]
draw.arc(box, start=start, end=end, fill=CYAN, width=arc_w)

# Rounded caps on both arc ends (symmetric by construction)
for ang in (start, end):
    a = math.radians(ang)
    ex = cx + R * math.cos(a)
    ey = cy_arc + R * math.sin(a)
    r = arc_w / 2
    draw.ellipse([ex - r, ey - r, ex + r, ey + r], fill=CYAN)

# ============ CIRCUIT NODES (4, perfectly diagonal) ============
for ang in (45, 135, 225, 315):
    a = math.radians(ang)
    nx = cx + R * math.cos(a)
    ny = cy_arc + R * math.sin(a)
    nr = arc_w * 0.28
    draw.ellipse([nx - nr, ny - nr, nx + nr, ny + nr], fill=CYAN_BRIGHT)
    nr2 = arc_w * 0.12
    draw.ellipse([nx - nr2, ny - nr2, nx + nr2, ny + nr2], fill=NAVY)

# ============ TICKS at 12 and 6 o'clock (symmetric) ============
for ang in (270, 90):
    a = math.radians(ang)
    x1 = cx + (R + arc_w/2) * math.cos(a)
    y1 = cy_arc + (R + arc_w/2) * math.sin(a)
    x2 = cx + (R + arc_w/2 + W*0.030) * math.cos(a)
    y2 = cy_arc + (R + arc_w/2 + W*0.030) * math.sin(a)
    draw.line([x1, y1, x2, y2], fill=CYAN, width=int(W * 0.013))

# ============ "C" MONOGRAM (centered with anchor) ============
font_c = ImageFont.truetype(FONT_BOLD, int(W * 0.245))
draw.text((cx, cy_arc), "C", font=font_c, fill=WHITE, anchor="mm")

# ============ SEPARATOR LINE ============
line_y = W * 0.640
line_w = W * 0.40
draw.line([cx - line_w/2, line_y, cx + line_w/2, line_y],
          fill=(38, 95, 158), width=int(W * 0.0045))

# ============ WORDMARK (anchor-centered) ============
font_word = ImageFont.truetype(FONT_BOLD, int(W * 0.118))
draw.text((cx, line_y + W * 0.098), "COMPOSURE", font=font_word, fill=WHITE, anchor="mm")

# ============ TAGLINE ============
font_tag = ImageFont.truetype(FONT_REG, int(W * 0.040))
draw.text((cx, line_y + W * 0.215), "AI | SOFTWARE | AUTOMATION",
          font=font_tag, fill=CYAN_BRIGHT, anchor="mm")

# ============ DOWNSAMPLE ============
img = img.resize((S, S), Image.LANCZOS)

out = "C:/Users/User/Desktop/MyBusiness/Nawaze2/naweza-app/public/logo.jpeg"
img.save(out, "JPEG", quality=95)
print("Saved:", out)
