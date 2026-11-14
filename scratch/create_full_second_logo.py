from PIL import Image
import numpy as np

src_path = "/Users/durgaprakash/.gemini/antigravity/brain/6d490a24-df27-43ba-9310-93e1e22e917d/.user_uploaded/media_1794280858804_3933285b.jpg"
img = Image.open(src_path).convert("RGBA")
w, h = img.size

data = np.array(img, dtype=np.float32)
r, g, b = data[:, :, 0], data[:, :, 1], data[:, :, 2]

# The background in the image is near-white (253-255)
# Compute min channel
min_c = np.minimum(r, np.minimum(g, b))

# For amber region: r is high (~249), g is ~175, b is ~65 -> min_c is ~65
# For text/silhouette: r, g, b are all low (< 50) -> min_c is < 50
# For background: r, g, b are all > 250 -> min_c is > 250

# Alpha calculation:
# Anything with min_c < 225 is 100% solid
# Between 225 and 250 is smooth anti-aliased edge
# > 250 is completely transparent (0)
alpha = np.zeros_like(min_c)
mask_solid = min_c <= 225
mask_ramp = (min_c > 225) & (min_c < 252)

alpha[mask_solid] = 255.0
alpha[mask_ramp] = (252.0 - min_c[mask_ramp]) / (252.0 - 225.0) * 255.0

data[:, :, 3] = alpha
res_img = Image.fromarray(data.astype(np.uint8), mode="RGBA")

# Get bounding box of the entire logo (from sun top to "pixels" bottom)
bbox = res_img.getbbox()
print("Entire Logo BBox:", bbox)

cropped = res_img.crop(bbox)

# Add a clean 16px transparent margin around for perfect crisp rendering
final_w = cropped.width + 32
final_h = cropped.height + 32
final_logo = Image.new("RGBA", (final_w, final_h), (0, 0, 0, 0))
final_logo.paste(cropped, (16, 16))

print(f"Final full logo size: {final_logo.size}")

# Save to assets/images
final_logo.save("/Applications/alightpixels/assets/images/logo.png")
final_logo.save("/Applications/alightpixels/public/assets/images/logo.png")
final_logo.save("/Applications/alightpixels/dist/assets/images/logo.png")

# Also save high-res 2x version
final_logo.save("/Applications/alightpixels/assets/images/logo@2x.png")
final_logo.save("/Applications/alightpixels/public/assets/images/logo@2x.png")
final_logo.save("/Applications/alightpixels/dist/assets/images/logo@2x.png")

print("Saved logo successfully!")

