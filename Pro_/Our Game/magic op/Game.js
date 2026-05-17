let Player,x,y;
let golvT,golvB,borderT,borderB,borderL,borderR,borderVr;
let blok1,blok2,blok3,blok4,blok5,blok6,blok7,blok8,blok9, blok1b,blok2b;
let exet1,exet2;
let bx1,by1,bx2,by2;
let gravity = 0.3, Gspeed = 0;
let enemyX, enemyY, BL;
let bullets = [],bullets2 = [],bullets3 = [],bullets4 = [],bullets5 = [],bullets6 = [],bullets7 = [],bullets8 = [];
let enemyheight,enemywidth;
let bullety,bulletx;
let bullety2,bulletx2;
let bullety3,bulletx3;
let bullety4,bulletx4;
let bullety5,bulletx5;
let bullety6,bulletx6;
let bullety7,bulletx7;
let bullety8,bulletx8;
let currentMap = 1;

function setup () {
    createCanvas(800, 800); 
    x=50;
    y=10;
    Pbx=mouseX
    Pby=mouseY
    by2=250;
    enemyX=200
    enemyY=30
    enemy2X=350
    enemy3X=500
    enemy4x=enemyX+500
    enemy5x=enemyX-150
    enemy2Y=enemyY+400
    enemyheight=40
    enemywidth=20
    bullety=enemyY+20
    bulletx=enemyX+10
    bullety2=enemyY+20
    bulletx2=enemy2X+10
    bullety3=enemyY+20
    bulletx3=enemy3X+10
    bullety4=enemy2Y+20
    bulletx4=enemyX+10
    bullety5=enemy2Y+20
    bulletx5=enemy2X+10
    bullety6=enemy2Y+20
    bulletx6=enemy3X+10
    bullety7=enemy2Y+20
    bulletx7=enemy4x+10
    bullety8=enemy2Y+20
    bulletx8=enemy5x+10
}

function draw() {
  background(255,255,255);
  if (currentMap === 1) { 
    drawMap1();} 
  else if (currentMap === 2) {
    drawMap2();}
  else if (currentMap === 3) {
    drawMap3();}

      movePlay();
      playerDie();
      drawEnemy();
      EmoveBullets();
}

function drawMap1() {  
  

    fill(255,0,0)
    golvT=rect(0,390,800,10)
    golvB=rect(0,790,800,10)
    fill(0,0,0)
    blok1=rect(30,200,85,10)
    blok2=rect(190,250,85,10)
    blok3=rect(350,200,85,10)
    blok4=rect(60,690,85,10)
    blok5=rect(260,610,85,10)
    blok6=rect(690,565,85,10)
    fill("green")
    blok1b=rect(590,320,85,10)
    blok2b=rect(510,690,85,10)
    fill("Purple")
    exet1=ellipse(740, 70, 40)
    exet2=ellipse(780, 545, 40)
    fill(0,0,0)
    noFill()
    strokeWeight(5)
    borderT=line(0, 0, 800, 0);//top
    borderB=line(0, 800, 800, 800);//ned
    borderL=line(0, 0, 0, 800);//<<
    borderR=line(800, 0, 800, 800);//>>
    borderVr=line(0, 400, 800, 400);//top og ned


 //blok1
  if (x < 30 + 85 && x + 10 > 30 && y < 200 + 10 && y + 10 > 200) {
     if (y + 10 > 200 && y < 200 + 10) {
      y = 200 - 10
      Gspeed = 0
     }else if (x + 10 > 30 && x < 30 + 85) {
      if (keyIsDown(65)) {
        x = 30 + 85
      }else if (keyIsDown(68)) {
        x = 30 -10
      }
     }
  }
  //blok2  
  if (x < 190 + 85 && x + 10 > 190 && y < 250 + 10 && y + 10 > 250) {
     if (y + 10 > 250 && y < 250 + 10) {
      y = 250 - 10
      Gspeed = 0
     }else if (x + 10 > 190 && x < 190 + 85) {
      if (keyIsDown(65)) {
        x = 190 + 85
      }else if (keyIsDown(68)) {
        x = 190 -10
      }
     }
  }
  //blok3      
  if (x < 350 + 85 && x + 10 > 350 && y < 200 + 10 && y + 10 > 200) {
    if (y + 10 > 200 && y < 200 + 10) {
     y = 200 - 10
     Gspeed = 0
    }else if (x + 10 > 350 && x < 350 + 85) {
     if (keyIsDown(65)) {
       x = 350 + 85
     }else if (keyIsDown(68)) {
       x = 350 -10
     }
    }
 }
 //blok4
  if (x < 60 + 85 && x + 10 > 60 && y < 690 + 10 && y + 10 > 690) {
   if (y + 10 > 690 && y < 690 + 10) {
    y = 690 - 10
    Gspeed = 0
   }else if (x + 10 > 60 && x < 60 + 85) {
    if (keyIsDown(65)) {
      x = 60 + 85
    }else if (keyIsDown(68)) {
       x = 60 -10
     }
    }
 }
 //blok5     
 if (x < 260 + 85 && x + 10 > 260 && y < 610 + 10 && y + 10 > 610) {
  if (y + 10 > 610 && y < 610 + 10) {
   y = 610 - 10
   Gspeed = 0
  }else if (x + 10 > 260 && x < 260 + 85) {
   if (keyIsDown(65)) {
     x = 260 + 85
   }else if (keyIsDown(68)) {
      x = 260 -10
    }
   }
}
//blok6    
if (x < 690 + 85 && x + 10 > 690 && y < 565 + 10 && y + 10 > 565) {
  if (y + 10 > 565 && y < 565 + 10) {
   y = 565 - 10
   Gspeed = 0
  }else if (x + 10 > 690 && x < 690 + 85) {
   if (keyIsDown(65)) {
     x = 690 + 85
   }else if (keyIsDown(68)) {
      x = 690 -10
    }
   }
}

 //blok1b  
 if (x < 590 + 85 && x + 10 > 590 && y < 320 + 10 && y + 10 > 320) {
    Gspeed-=Gspeed
    y-=170 
}
//blok2b    
if (x < 510 + 85 && x + 10 > 510 && y < 690 + 10 && y + 10 > 690) {
  Gspeed-=Gspeed
  y-=90 
}
//exet1
if (dist(x, y, 740, 70) < 30) {
    x=80;
    y=600;
}
//exet2    
if (dist(x, y, 780, 545) < 30) {
  x=40;
  y=280;
  currentMap =2
}
}
function drawMap2() {
    fill(255,0,0)
    golvT=rect(0,390,800,10)
    golvB=rect(0,790,800,10)
    fill(0,0,0)
    blok1=rect(30,320,85,10)
    blok2=rect(190,250,85,10)
    blok3=rect(650,200,35,10)
    blok4=rect(20,750,85,10)
    blok5=rect(220,730,35,10)
    blok6=rect(420,700,25,10)
    fill("green")
    blok1b=rect(390,320,85,10)
    blok2b=rect(600,740,85,10)
    fill("Purple")
    exet1=ellipse(670, 100, 40)
    exet2=ellipse(780, 545, 40)
    fill(0,0,0)
    noFill()
    strokeWeight(5)
    borderT=line(0, 0, 800, 0);//top
    borderB=line(0, 800, 800, 800);//ned
    borderL=line(0, 0, 0, 800);//<<
    borderR=line(800, 0, 800, 800);//>>
    borderVr=line(0, 400, 800, 400);//top og ned
    
    //blok1
  if (x < 30 + 85 && x + 10 > 30 && y < 320 + 10 && y + 10 > 320) {
    if (y + 10 > 320 && y < 320 + 10) {
     y = 320 - 10
     Gspeed = 0
    }else if (x + 10 > 30 && x < 30 + 85) {
     if (keyIsDown(65)) {
       x = 30 + 85
     }else if (keyIsDown(68)) {
       x = 30 -10
     }
    }
 }
 //blok2  
 if (x < 190 + 85 && x + 10 > 190 && y < 250 + 10 && y + 10 > 250) {
    if (y + 10 > 250 && y < 250 + 10) {
     y = 250 - 10
     Gspeed = 0
    }else if (x + 10 > 190 && x < 190 + 85) {
     if (keyIsDown(65)) {
       x = 190 + 85
     }else if (keyIsDown(68)) {
       x = 190 -10
     }
    }
 }
 //blok3          
 if (x < 650 + 35 && x + 10 > 650 && y < 200 + 10 && y + 10 > 200) {
   if (y + 10 > 200 && y < 200 + 10) {
    y = 200 - 10
    Gspeed = 0
   }else if (x + 10 > 650 && x < 650 + 35) {
    if (keyIsDown(65)) {
      x = 650 + 35
    }else if (keyIsDown(68)) {
      x = 650 -10
    }
   }
}
//blok4    
 if (x < 20 + 85 && x + 10 > 20 && y < 750 + 10 && y + 10 > 750) {
  if (y + 10 > 750 && y < 750 + 10) {
   y = 750 - 10
   Gspeed = 0
  }else if (x + 10 > 20 && x < 20 + 85) {
   if (keyIsDown(65)) {
     x = 20 + 85
   }else if (keyIsDown(68)) {
      x = 20 -10
    }
   }
}
//blok5         
if (x < 220 + 35 && x + 10 > 220 && y < 730 + 10 && y + 10 > 730) {
 if (y + 10 > 730 && y < 730 + 10) {
  y = 730 - 10
  Gspeed = 0
 }else if (x + 10 > 220 && x < 220 + 35) {
  if (keyIsDown(65)) {
    x = 220 + 35
  }else if (keyIsDown(68)) {
     x = 220 -10
   }
  }
}
//blok6        
if (x < 420 + 25 && x + 10 > 420 && y < 700 + 10 && y + 10 > 700) {
 if (y + 10 > 700 && y < 700 + 10) {
  y = 700 - 10
  Gspeed = 0
 }else if (x + 10 > 420 && x < 420 + 25) {
  if (keyIsDown(65)) {
    x = 420 + 25
  }else if (keyIsDown(68)) {
     x = 420 -10
   }
  }
}

//blok1b      
if (x < 390 + 85 && x + 10 > 390 && y < 320 + 10 && y + 10 > 320) {
  Gspeed-=Gspeed
  y-=170 
}
//blok2b     
if (x < 600 + 85 && x + 10 > 600 && y < 740 + 10 && y + 10 > 740) {
  Gspeed-=Gspeed
  y-=95 
}

//exet1    
if (dist(x, y, 670, 100) < 30) {
  x=80;
  y=600;
}

if (dist(x, y, 780, 545) < 30) {
  x=50;
  y=10;
  currentMap =3
}
}
function drawMap3() {
  fill(255,0,0)
  golvT=rect(0,390,800,10)
  golvB=rect(0,790,800,10)
  fill(0,0,0)
  blok1=rect(20,350,65,10)
  blok2=rect(180,280,55,10)
  blok3=rect(310,210,45,10)
  blok4=rect(460,280,35,10)
  blok5=rect(640,230,25,10)
  blok6=rect(745,760,65,10)
  blok7=rect(455,575,25,10)
  blok8=rect(320,700,25,10)
  blok9=rect(160,750,25,10)
  fill("green")
    blok1b=rect(580,740,55,10)
  fill("Purple")
  exet1=ellipse(770, 350, 40)
  exet2=ellipse(35, 675, 40)
  fill(0,0,0)
  noFill()
  strokeWeight(5)
  borderT=line(0, 0, 800, 0);//top
  borderB=line(0, 800, 800, 800);//ned
  borderL=line(0, 0, 0, 800);//<<
  borderR=line(800, 0, 800, 800);//>>
  borderVr=line(0, 400, 800, 400);//top og ned
   
  //blok1   
    if (x < 20 + 65 && x + 10 > 20 && y < 350 + 10 && y + 10 > 350) {
      if (y + 10 > 350 && y < 350 + 10) {
       y = 350 - 10
       Gspeed = 0
      }else if (x + 10 > 20 && x < 20 + 65) {
       if (keyIsDown(65)) {
         x = 20 + 65
       }else if (keyIsDown(68)) {
         x = 20 -10
       }
      }
   }
   //blok2    
   if (x < 180 + 55 && x + 10 > 180 && y < 280 + 10 && y + 10 > 280) {
      if (y + 10 > 280 && y < 280 + 10) {
       y = 280 - 10
       Gspeed = 0
      }else if (x + 10 > 180 && x < 180 + 55) {
       if (keyIsDown(65)) {
         x = 180 + 55
       }else if (keyIsDown(68)) {
         x = 180 -10
       }
      }
   }
   //blok3           
   if (x < 310 + 45 && x + 10 > 310 && y < 210 + 10 && y + 10 > 210) {
     if (y + 10 > 210 && y < 210 + 10) {
      y = 210 - 10
      Gspeed = 0
     }else if (x + 10 > 310 && x < 310 + 45) {
      if (keyIsDown(65)) {
        x = 310 + 45
      }else if (keyIsDown(68)) {
        x = 310 -10
      }
     }
  }
  //blok4      
   if (x < 460 + 35 && x + 10 > 460 && y < 280 + 10 && y + 10 > 280) {
    if (y + 10 > 280 && y < 280 + 10) {
     y = 280 - 10
     Gspeed = 0
    }else if (x + 10 > 460 && x < 460 + 35) {
     if (keyIsDown(65)) {
       x = 460 + 35
     }else if (keyIsDown(68)) {
        x = 460 -10
      }
     }
  }
  //blok5          
  if (x < 640 + 25 && x + 10 > 640 && y < 230 + 10 && y + 10 > 230) {
   if (y + 10 > 230 && y < 230 + 10) {
    y = 230 - 10
    Gspeed = 0
   }else if (x + 10 > 640 && x < 640 + 25) {
    if (keyIsDown(65)) {
      x = 640 + 25
    }else if (keyIsDown(68)) {
       x = 640 -10
     }
    }
  }
  //blok6          
  if (x < 745 + 65 && x + 10 > 745 && y < 760 + 10 && y + 10 > 760) {
   if (y + 10 > 760 && y < 760 + 10) {
    y = 760 - 10
    Gspeed = 0
   }else if (x + 10 > 745 && x < 745 + 65) {
    if (keyIsDown(65)) {
      x = 745 + 65
    }else if (keyIsDown(68)) {
       x = 745 -10
     }
    }
  }
  //blok7         
  if (x < 455 + 25 && x + 10 > 455 && y < 575 + 10 && y + 10 > 575) {
    if (y + 10 > 575 && y < 575 + 10) {
     y = 575 - 10
     Gspeed = 0
    }else if (x + 10 > 455 && x < 455 + 25) {
     if (keyIsDown(65)) {
       x = 455 + 25
     }else if (keyIsDown(68)) {
        x = 455 -10
      }
     }
   }
   //blok8            
  if (x < 320 + 25 && x + 10 > 320 && y < 700 + 10 && y + 10 > 700) {
    if (y + 10 > 700 && y < 700 + 10) {
     y = 700 - 10
     Gspeed = 0
    }else if (x + 10 > 320 && x < 320 + 25) {
     if (keyIsDown(65)) {
       x = 320 + 25
     }else if (keyIsDown(68)) {
        x = 320 -10
      }
     }
   }
   //blok9           
  if (x < 160 + 25 && x + 10 > 160 && y < 750 + 10 && y + 10 > 750) {
    if (y + 10 > 750 && y < 750 + 10) {
     y = 750 - 10
     Gspeed = 0
    }else if (x + 10 > 160 && x < 160 + 25) {
     if (keyIsDown(65)) {
       x = 160 + 25
     }else if (keyIsDown(68)) {
        x = 160 -10
      }
     }
   }

  //blok1b      
if (x < 580 + 55 && x + 10 > 580 && y < 740 + 10 && y + 10 > 740) {
  Gspeed-=Gspeed
  y-=155 
}

  //exet1  
if (dist(x, y, 770, 350) < 30) {
  x=765;
  y=700;
}
//exet2    
if (dist(x, y, 35, 675) < 30) {
  x=50;
  y=10;
  currentMap =1
}
}

