from PIL import Image
import numpy as np

src_path = "/Users/durgaprakash/.gemini/antigravity/brain/6d490a24-df27-43ba-9310-93e1e22e917d/.user_uploaded/media_1794280261124_bb0ad98e.jpg"
img = Image.open(src_path).convert("RGBA")

data = np.array(img, dtype=np.float32)
r, g, b = data[:, :, 0], data[:, :, 1], data[:, :, 2]

# Compute brightness/whiteness for clean alpha extraction
# If a pixel is pure white (254, 254, 254) -> alpha 0
# If a pixel is dark (text/silhouette) or amber (sun) -> full alpha
# Let's calculate distance from pure white (255, 255, 255)
# In sRGB, white background is > 248 on all channels
min_channel = np.minimum(r, np.minimum(g, b))

# Smooth alpha ramp
# Between 235 and 250
alpha = np.clip((250.0 - min_channel) / (250.0 - 230.0) * 255.0, 0, 255.0)

# Also preserve pure amber pixels
is_amber = (r > 200) & (g > 130) & (b < 120)
alpha[is_amber] = 255.0

# Also preserve charcoal pixels
is_dark = (r < 70) & (g < 70) & (b < 70)
alpha[is_dark] = 255.0

data[:, :, 3] = alpha
result = Image.fromarray(data.astype(np.uint8), mode="RGBA")

# Crop to tight non-zero alpha bounding box
bbox = result.getbbox()
print("Cropped BBox:", bbox)
cropped = result.crop(bbox)

# Add 10px margin around logo for visual breathing room
padded = Image.new("RGBA", (cropped.width + 20, cropped.height + 20), (0, 0, 0, 0))
padded.paste(cropped, (10, 10))

# Save to assets/images
padded.save("/Applications/alightpixels/assets/images/logo.png")
padded.save("/Applications/alightpixels/assets/images/logo-full.png")

# Also save to public and dist
import os
os.makedirs("/Applications/alightpixels/public/assets/images", exist_ok=True)
os.makedirs("/Applications/alightpixels/dist/assets/images", exist_ok=True)

padded.save("/Applications/alightpixels/public/assets/images/logo.png")
padded.save("/Applications/alightpixels/public/assets/images/logo-full.png")
padded.save("/Applications/alightpixels/dist/assets/images/logo.png")
padded.save("/Applications/alightpixels/dist/assets/images/logo-full.png")

print(f"Clear logo saved successfully! Dimensions: {padded.size}")

