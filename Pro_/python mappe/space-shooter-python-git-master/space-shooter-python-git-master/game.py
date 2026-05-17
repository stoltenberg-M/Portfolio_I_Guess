# Arcade-style space shooter inspired by Galaga and Spacer Invaders.
# Made for the purpose of teaching git version control to beginners.




import pygame as pg


### Setup ###
pg.init()
clock = pg.time.Clock()

screen = pg.display.set_mode((1000,600))
pg.display.set_caption("Space Shooter")

# Spaceship character
ship_images = []
for i in range(3):
    img = pg.image.load(f"images/ship_{i}.png")
    ship_images.append(img)
ship_x = 500 
ship_y = 550
ship_w = ship_images[0].get_rect().size[0]
ship_h = ship_images[0].get_rect().size[1]

# Alien character
alien_images = []
for i in range(5):
    img = pg.image.load(f"images/alien_{i}.png")
    alien_images.append(img)

aliens = []
for i in range(11):
    alien1 = {'x': 55*i + 200, 'y': 0}
    alien2 = {'x': 60*i + 175, 'y': 50}
    alien3 = {'x': 55*i + 200, 'y': 100}
    aliens.append(alien1)
    aliens.append(alien2)
    aliens.append(alien3)


alien_w = alien_images[0].get_rect().size[0]
alien_h = alien_images[0].get_rect().size[1]

# Alien character and Double the size
Big_alien_images = []
for i in range(0, 5, 3):
    Big_img = pg.image.load(f"images/alien_{i}.png")
    Big_img = pg.transform.scale(Big_img, (alien_w * 2, alien_h * 2))  
    Big_alien_images.append(Big_img)

Big_alien = []


Big_alien_w = Big_alien_images[0].get_rect().size[0]
Big_alien_h = Big_alien_images[0].get_rect().size[1]

# Projectile class
class Projectile:
    def __init__(self, x, y, w = 4, h = 10, speed = 8):
        self.x = x
        self.y = y
        self.w = w
        self.h = h
        self.speed = speed

    def move(self):
        self.y -= self.speed

    def is_off_screen(self):
        return self.y < 0
    
    def draw(self, surface):
        rect = (self.x, self.y, self.w, self.h)
        pg.draw.circle(surface, (255, 0, 0), (self.x, self.y + 9), self.w)
        pg.draw.circle(surface, (255, 0, 0), (self.x + 4, self.y + 9), self.w)
        pg.draw.rect(surface, (255, 0, 0), rect)

    def collides_with_alien(self, alien, alien_w, alien_h):
        return (
            alien['x'] < self.x + self.w and
            self.x < alien['x'] + alien_w and
            self.y < alien['y'] + alien_h and 
            alien['y'] < self.y + self.h
        )
# Projectiles 
projectile_fired = False
projectiles = []


# Keypress status
left_pressed = False
right_pressed = False

# Sound: weapon / laser 
# https://sfxr.me/#34T6Pm25W5VunHtL14gUxhLx6MqNduzaeRPcUbqtT4RN55w6nP9NipaUrx5ZBBvohWwXgMrd5BS2e7HwRwEVyzmKM3FV8LiU7Gh5ob2VvvMi6ftqdhbVB54ZM 
sound_laser = pg.mixer.Sound("sounds/laser.wav")
sound_laser.set_volume(0.05)  # Set volume to 5%

# Sound: weapon / laser 
# https://freemusicarchive.org/search/?quicksearch=&search-genre=Experimental
game_music = pg.mixer.Sound("music/Ten and Tracer - Semi-Fabulous Witches.mp3")

# Font for scoreboard
# https://fonts.google.com/specimen/Press+Start+2P/about
font_scoreboard = pg.font.Font("fonts/PressStart2P-Regular.ttf", 20)


### Game loop ###
def gameLoop():
    running = True
    tick = 0
    score = 0
    global left_pressed, right_pressed
    global projectile_fired
    global ship_x, ship_y
 
    game_music.play()

    Big_alien_spawned = False
    while running:

        if not Big_alien_spawned and len(aliens) == 0:
            for i in range(2):
                Big_alien1 = {'x':500*i + 220, 'y':-100, 'HP': 50}
                Big_alien.append(Big_alien1)
            Big_alien_spawned = True

        if Big_alien_spawned and len(Big_alien) == 0:
            end_image = pg.image.load("images/microwave child sacrifice.jpg")
            resized_image_end_image = pg.transform.scale(end_image, (1000, 600))
            screen.blit(resized_image_end_image, (0, 0))  # Draw image at top-left
            pg.display.flip()               # Update screen
            pg.time.wait(3000)              # Pause for 3 seconds
            pg.quit()
            

        ## Event loop  (handle keypresses etc.) ##
        events = pg.event.get()
        for event in events:

            # Close window (pressing [x], Alt+F4 etc.)
            if event.type == pg.QUIT:
                running = False
            
            # Keypresses
            elif event.type == pg.KEYDOWN:

                if event.key == pg.K_ESCAPE:
                    running = False

                elif event.key == pg.K_a:
                    left_pressed = True

                elif event.key == pg.K_d:
                    right_pressed = True

                elif event.key == pg.K_SPACE:
                    projectile_fired = True

            # Keyreleases
            elif event.type == pg.KEYUP:

                if event.key == pg.K_a:
                    left_pressed = False 

                elif event.key == pg.K_d:
                    right_pressed = False 
        

        ## Updating (movement, collisions, etc.) ##

        for alien in aliens:
            if alien['y'] >= 575:
                pg.quit()
        
        for B_alien in Big_alien:
            if B_alien['y'] >= 575:
                pg.quit()

        # Alien/ Big Alien
        for alien in aliens:
            alien['y'] += 0.5

        for B_alien in Big_alien:
            B_alien['y'] += 0.5

        # Spaceship
        if left_pressed:
            ship_x -= 8

        if right_pressed:
            ship_x += 8

        # Projectile movement
        # Reverse iteration needed to handle each projectile correctly
        # in cases where a projectile is removed.
        for projectile in reversed(projectiles):
            projectile.move()
            if projectile.is_off_screen():
                projectiles.remove(projectile)


        # Alien / projectile collision 
        # Test each projectile against each alien
        for projectile in reversed(projectiles):
            for alien in aliens:
                if projectile.collides_with_alien(alien, alien_w, alien_h):
                    projectiles.remove(projectile)
                    aliens.remove(alien)
                    score += 1
                    break

        # Big Alien / projectile collision 
        for projectile in reversed(projectiles):
            for B_alien in Big_alien:
                if projectile.collides_with_alien(B_alien, Big_alien_w, Big_alien_h):
                    B_alien['HP'] -= 1
                    projectiles.remove(projectile)
                if B_alien['HP'] <= 0:    
                    Big_alien.remove(B_alien)
                    score += 3
                    break

        # Firing (spawning new projectiles)
        if projectile_fired:
            sound_laser.play()
            new_proj = Projectile(ship_x + ship_w / 2 - 2, ship_y)
            projectiles.append(new_proj)
            projectile_fired = False

        ## Drawing ##
        screen.fill((0,0,0)) 

        # 3 images --> tick % 3
        # 100% animation speed: tick % 3
        # 25% animation speed: int(tick/4) % 3

        # Ship
        r = int(tick/4) % 3 
        screen.blit(ship_images[r], (ship_x, ship_y))

        # Alien
        r = int(tick/8) % 5
        for alien in aliens:
            screen.blit(alien_images[r], (alien['x'], alien['y']))

        # Big Alien
        Big_r = int(tick/8) % len(Big_alien_images)
        for B_alien in Big_alien:
            screen.blit(Big_alien_images[Big_r], (B_alien['x'], B_alien['y']))

        # Projectiles
        for projectile in projectiles:
            projectile.draw(screen)

        # Scoreboard
        text = font_scoreboard.render(f"{score:04d}", True, (255,255,255))
        screen.blit(text, (10,560))

        # Update window with newly drawn pixels
        pg.display.flip()

        # Limit/fix frame rate (fps)
        clock.tick(50)
        tick += 1
gameLoop()