import pygame
import os


IMAGE_FOLDER = "test_image_M"          # folder with your images
EXTRA_IMAGE = "output.png"             # extra image outside the folder
SOUND_FOLDER = "sound_to_coller_M"     # folder with Sound1.wav to Sound24.wav


pygame.init()
pygame.mixer.init()


# LOAD ALL IMAGES
image_paths = []

# Load images from folder
for f in os.listdir(IMAGE_FOLDER):
    if f.lower().endswith((".png", ".jpg", ".jpeg", ".bmp")):
        image_paths.append(os.path.join(IMAGE_FOLDER, f))
        

# Load extra image if it exists
if os.path.exists(EXTRA_IMAGE):
    image_paths.append(EXTRA_IMAGE)

if not image_paths:
    raise Exception("No images found in test_image_M or extra image missing!")

# Load the first image
current_index = 0
image = pygame.image.load(image_paths[current_index])

width, height = image.get_size()
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Image Piano")


# LOAD 24 SOUNDS (from Sound1.wav to Sound24.wav in sound_to_coller_M)
sounds = []
for i in range(1, 25):  # 1 to 24
    filename = f"Sound{i}.wav"
    path = os.path.join(SOUND_FOLDER, filename)
    if not os.path.exists(path):
        raise Exception(f"Missing sound file: {path}")
    sounds.append(pygame.mixer.Sound(path))


# FUNCTION: SWITCH IMAGE (Dunno if it's a bug, but this part doesn't really function, you can still use it, but doesn't function)
def switch_image(index):
    global image, width, height, screen
    print("Switching to:", image_paths[index])  # DEBUG
    image = pygame.image.load(image_paths[index])
    width, height = image.get_size()
    print("Image size:", width, "x", height)    # DEBUG
    screen = pygame.display.set_mode((width, height))


# MAIN LOOP
running = True
last_color = None

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

        # ESC to quit
        if event.type == pygame.KEYDOWN and event.key == pygame.K_ESCAPE:
            running = False

        # Number keys to switch images (1–9) though there is only 4
        if event.type == pygame.KEYDOWN:
            if pygame.K_1 <= event.key <= pygame.K_9:
                num = event.key - pygame.K_1  # convert key to index 0–8
                if num < len(image_paths):
                    current_index = num
                    switch_image(current_index)

    screen.blit(image, (0, 0))
    pygame.display.flip()

    x, y = pygame.mouse.get_pos()

    # Clamp mouse position to valid pixel range (Meant to help with the "bug" still doesn't help)
    clamped_x = max(0, min(width - 1, x))
    clamped_y = max(0, min(height - 1, y))

    color = image.get_at((clamped_x, clamped_y))[:3]

    if color != last_color:
        last_color = color

        # Brightness to sound index
        brightness = sum(color) / 3
        index = int(brightness / 256 * 24)
        index = max(0, min(23, index))

        # Stop previous playback and play immediately
        sounds[index].stop()
        sounds[index].play()

pygame.quit()
