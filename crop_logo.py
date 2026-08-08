# Para ejecutar este script, instala primero la librería Pillow en tu terminal:
# pip3 install pillow

from PIL import Image

image_path = "/Users/leonfeliperodriguez/Desktop/Trabajos/SKETION/My-Excalidraw/docs/public/85.png"
img = Image.open(image_path)

# Convert to RGBA
img = img.convert("RGBA")
width, height = img.size

# Find bounding box of the black rounded square
left = width
top = height
right = 0
bottom = 0

for y in range(height):
    for x in range(width):
        r, g, b, a = img.getpixel((x, y))
        # If it's not white, it's part of the logo
        if not (r > 240 and g > 240 and b > 240):
            if x < left:
                left = x
            if x > right:
                right = x
            if y < top:
                top = y
            if y > bottom:
                bottom = y

# Crop the image to the logo boundary with padding
left = max(0, left - 4)
top = max(0, top - 4)
right = min(width, right + 4)
bottom = min(height, bottom + 4)

cropped_img = img.crop((left, top, right, bottom))

# Make white background pixels transparent
cropped_width, cropped_height = cropped_img.size
pixels = cropped_img.load()

for y in range(cropped_height):
    for x in range(cropped_width):
        r, g, b, a = pixels[x, y]
        if r > 240 and g > 240 and b > 240:
            pixels[x, y] = (0, 0, 0, 0)

cropped_img.save(image_path, "PNG")
print("Successfully cropped logo and removed white background.")
