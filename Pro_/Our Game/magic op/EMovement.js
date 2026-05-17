
  function drawEnemy() {
    fill(255,0,0);
    rect(enemyX, enemyY,enemywidth ,enemyheight ) 
    rect(enemy2X, enemyY,enemywidth ,enemyheight )
    rect(enemy3X, enemyY,enemywidth ,enemyheight ) 
    rect(enemyX, enemy2Y,enemywidth ,enemyheight ) 
    rect(enemy2X, enemy2Y,enemywidth ,enemyheight )
    rect(enemy3X, enemy2Y,enemywidth ,enemyheight ) 
    rect(enemy4x, enemy2Y,enemywidth ,enemyheight)
    rect(enemy5x, enemy2Y,enemywidth ,enemyheight)
    if (frameCount % 100 === 0) {
    let angle = atan2(2+y-enemyY, 2+x-enemyX);
    let angle2 = atan2(2+y-enemyY, 2+x-enemy2X);
    let angle3 = atan2(2+y-enemyY, 2+x-enemy3X);
    let angle4 = atan2(2+y-enemy2Y, 2+x-enemyX);
    let angle5 = atan2(2+y-enemy2Y, 2+x-enemy2X);
    let angle6 = atan2(2+y-enemy2Y, 2+x-enemy3X);
    let angle7 = atan2(2+y-enemy2Y, 2+x-enemy4x);
    let angle8 = atan2(2+y-enemy2Y, 2+x-enemy5x);
    bullets.push({
    x: bulletx,
    y: bullety,
    angle: angle   
    })
   bullets2.push({
   x: bulletx2,
   y: bullety2,
   angle2: angle2  
    })
   bullets3.push({
   x: bulletx3,
   y: bullety3,
   angle3: angle3   
   })
   bullets4.push({
   x: bulletx4,
   y: bullety4,
   angle4: angle4   
    })
    bullets5.push({
   x: bulletx5,
   y: bullety5,
   angle5: angle5 
   })
   bullets6.push({
    x: bulletx6,
    y: bullety6,
    angle6: angle6   
    })
    bullets7.push({
   x: bulletx7,
   y: bullety7,
   angle7: angle7   
   })
   bullets8.push({
    x: bulletx8,
    y: bullety8,
    angle8: angle8   
    })
  
    }
  }
  function EmoveBullets(){
    fill(0);
    //Enemy1
    for(let i=bullets.length-1;i>=0; i--){
    bullets[i].x+= cos(bullets[i].angle+0.05)*5//bulletspeed
    bullets[i].y+= sin(bullets[i].angle+0.05)*5//bulletspeed
    BL=ellipse(bullets[i].x, bullets[i].y,5,5);
    let distance = dist(x,y,bullets[i].x,bullets[i].y);
    if (bullets[i].x<0|| bullets[i].x>width ||bullets[i].y<0|| bullets[i].y>height || bullets[i].y >= 378 && bullets[i].y <= 385){
        bullets.splice(i,1)
    }
    if(distance<15){
      bullets.splice(i,1)
      x=50;
      y=10;
      currentMap=1
      }
    } 
    //Enemy2
        for(let i=bullets2.length-1;i>=0; i--){
    bullets2[i].x+= cos(bullets2[i].angle2+0.05)*5//bulletspeed
    bullets2[i].y+= sin(bullets2[i].angle2+0.05)*5//bulletspeed
    BL=ellipse(bullets2[i].x, bullets2[i].y,5,5);
    let distance2 = dist(x,y,bullets2[i].x,bullets2[i].y);
    if (bullets2[i].x<0|| bullets2[i].x>width ||bullets2[i].y<0|| bullets2[i].y>height || bullets2[i].y >= 378 && bullets2[i].y <= 385){
        bullets2.splice(i,1)
    }
    if(distance2<15){
      bullets2.splice(i,1)
      x=50;
      y=10;
      currentMap=1
      }
    } 
    //Enemy3
    for(let i=bullets3.length-1;i>=0; i--){
      bullets3[i].x+= cos(bullets3[i].angle3+0.05)*5//bulletspeed
      bullets3[i].y+= sin(bullets3[i].angle3+0.05)*5//bulletspeed
      BL=ellipse(bullets3[i].x, bullets3[i].y,5,5);
      let distance3 = dist(x,y,bullets3[i].x,bullets3[i].y);
      if (bullets3[i].x<0|| bullets3[i].x>width ||bullets3[i].y<0|| bullets3[i].y>height || bullets3[i].y >= 378 && bullets3[i].y <= 385){
          bullets3.splice(i,1)
      }
      if(distance3<15){
        bullets3.splice(i,1)
        x=50;
        y=10;
        currentMap=1
        }
      } 
      //Enemy4
      for(let i=bullets4.length-1;i>=0; i--){
        bullets4[i].x+= cos(bullets4[i].angle4+0.05)*5//bulletspeed
        bullets4[i].y+= sin(bullets4[i].angle4+0.05)*5//bulletspeed
        BL=ellipse(bullets4[i].x, bullets4[i].y,5,5);
        let distance4 = dist(x,y,bullets4[i].x,bullets4[i].y);
        if (bullets4[i].x<0|| bullets4[i].x>width ||bullets4[i].y<0|| bullets4[i].y>height || bullets4[i].y >= 378 && bullets4[i].y <= 385){
            bullets4.splice(i,1)
        }
        if(distance4<15){
          bullets4.splice(i,1)
          x=50;
          y=10;
          currentMap=1
          }
        }
        //Enemy5
        for(let i=bullets5.length-1;i>=0; i--){
          bullets5[i].x+= cos(bullets5[i].angle5+0.05)*5//bulletspeed
          bullets5[i].y+= sin(bullets5[i].angle5+0.05)*5//bulletspeed
          BL=ellipse(bullets5[i].x, bullets5[i].y,5,5);
          let distance5 = dist(x,y,bullets5[i].x,bullets5[i].y);
          if (bullets5[i].x<0|| bullets5[i].x>width ||bullets5[i].y<0|| bullets5[i].y>height || bullets5[i].y >= 378 && bullets5[i].y <= 385){
              bullets5.splice(i,1)
          }
          if(distance5<15){
            bullets5.splice(i,1)
            x=50;
            y=10;
            currentMap=1
            }
          }
          //Enemy6
          for(let i=bullets6.length-1;i>=0; i--){
            bullets6[i].x+= cos(bullets6[i].angle6+0.05)*5//bulletspeed
            bullets6[i].y+= sin(bullets6[i].angle6+0.05)*5//bulletspeed
            BL=ellipse(bullets6[i].x, bullets6[i].y,5,5);
            let distance6 = dist(x,y,bullets6[i].x,bullets6[i].y);
            if (bullets6[i].x<0|| bullets6[i].x>width ||bullets6[i].y<0|| bullets6[i].y>height || bullets6[i].y >= 378 && bullets6[i].y <= 385){
                bullets6.splice(i,1)
            }
            if(distance6<15){
              bullets6.splice(i,1)
              x=50;
              y=10;
              currentMap=1
              }
            }
            //Enemy7
            for(let i=bullets7.length-1;i>=0; i--){
             bullets7[i].x+= cos(bullets7[i].angle7+0.05)*5//bulletspeed
            bullets7[i].y+= sin(bullets7[i].angle7+0.05)*5//bulletspeed
            BL=ellipse(bullets7[i].x, bullets7[i].y,5,5);
            let distance7 = dist(x,y,bullets7[i].x,bullets7[i].y);
             if (bullets7[i].x<0|| bullets7[i].x>width ||bullets7[i].y<0|| bullets7[i].y>height || bullets7[i].y >= 378 && bullets7[i].y <= 385){
             bullets7.splice(i,1)
             }
             if(distance7<15){
             bullets7.splice(i,1)
             x=50;
             y=10;
             currentMap=1
             }
            }
             //Enemy8
             for(let i=bullets8.length-1;i>=0; i--){
             bullets8[i].x+= cos(bullets8[i].angle8+0.05)*5//bulletspeed
             bullets8[i].y+= sin(bullets8[i].angle8+0.05)*5//bulletspeed
             BL=ellipse(bullets8[i].x, bullets8[i].y,5,5);
             let distance8 = dist(x,y,bullets8[i].x,bullets8[i].y);
             if (bullets8[i].x<0|| bullets8[i].x>width ||bullets8[i].y<0|| bullets8[i].y>height || bullets8[i].y >= 378 && bullets8[i].y <= 385){
             bullets8.splice(i,1)
             }
             if(distance8<15){
             bullets8.splice(i,1)
            x=50;
           y=10;
           currentMap=1
           }
           }
  }
  
