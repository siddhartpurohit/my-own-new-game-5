var player
var background1img;
var background2img;
var camp1;
var camp2;
var camp1img;
var camp2img;
var line;
 var playerImg                         
 var enemy;             
 var  enemyImg;
 
var arrow;
var arrowImg;



var gameState="game1";
 var game1= 1;
 var game2 = 0;
 var game9 = 2;
 var game3 = 3;
 var game4 = 4;
 var game5 = 5;
var backgroundable;
var backgroundtable;
var enemyGroup,enemyGroup1,enemyGroup2,enemyGroup3,enemyGroup4;
var ammoimg;
var tank1;
var tank2;
var tank3;
var tank4;
var tankimg;
var ammo;
var ammoGroup;
var ammoGroup1;
var ammoGroup2;
var ammoGroup3;
var ammo4;
var ammo5;
var ammo6;
var enemy6;
var enemy7;
var enemy8;
var enemy9;
var enemy10;
var enemyGroup5;
var enemyGroup6;
var enemy14;
var score = 0;
var soundimg
function preload(){
background1img = loadImage("gf.jpg");
camp1img = loadImage("camp.png");
camp2img = loadImage("camp.png");
playerImg = loadImage("clip.png");
enemyImg = loadImage("dacu.png");
backgroundable = loadImage("war.jpg")
ammoimg = loadImage("ff.png");
tankimg = loadImage("rj.png");
backgroundtable = loadImage("grass.jpg");
}
function setup(){ 
    createCanvas(1900,1000);
  
    
    line = createSprite(640,500,20,1000);
    line.shapeColor = "black"
    player = createSprite(400,600,50,50)
    player.addImage(playerImg);
    player.scale = 0.1
    enemyGroup = createGroup(); 
    enemyGroup1 = createGroup();
    enemyGroup2 = createGroup();
    enemyGroup3 = createGroup();
    enemyGroup4 = createGroup();
    ammoGroup1 = createGroup();
    ammoGroup2 = createGroup();
    ammoGroup3 = createGroup();
    ammoGroup = createGroup();
     tank1 = createSprite(1750,250,50,50);
     tank1.addImage(tankimg);
     tank1.scale = 0.24;
     tank2 = createSprite(1750,500,50,50);
     tank2.addImage(tankimg);
     tank2.scale = 0.24;
     tank3 = createSprite(1750,750,50,50);
     tank3.addImage(tankimg);
     tank3.scale = 0.24;
    score = 0;
       
     
     
    
}


function draw(){
    
    if(gameState==="game1"){
        background(backgroundable);
        fill("red");
        textSize(50);
        text("story:this is the time the war is happening in all over the world",100,100);
        text("a soldier team fighrting in the war the soldier team all soldiers dead",100,250);
        text("a only soldier left in the war but the other soldier team is attacking",100,400);
        text("on the only soldier help the soldier to kill all the other soldier team ",100,550)
        text("i know you can kill all the soldiers just do it enjoy the game",100,700);
        text("Press Enter to enter the game",100,850);
        text("press Shift to see the instruction of the game",100,950);
        tank1.visible = false;
        tank2.visible = false;
        tank3.visible = false;
        player.visible = false;
        line.visible = false;
        if(keyDown("Enter")){
            gameState="game2";
        }
        if(keyDown("Shift")){
            gameState="game5";
        }
    }
    if(gameState==="game4"){
        background(backgroundable);
        fill("green");
        textSize(50);
        text("In this game everything done by me",100,100);
        text("THe googler: me :siddharth Purohit every image in the game googled/finded by me",100,250);
        text("THe coder:this game is coded by me",100,400);
        text("director:this game is directed by me",100,550);
        text("producer:this game is produced by me",100,700);
        text("idear:this game is idead by me",100,850);
        text("about me: i am a hitehat jr student and my name is siddharth purohit ",100,950);
        }
    if(gameState==="game5"){
        background(backgroundable);
        fill("red");
        textSize(50);
        text("instruction:PREss Space to THrow the ammo to enemies",100,100);
        text("2:if you want to be save just go top corner and bottom corner no ammos from tanks can touch you",100,250);
        text("3:the enemies cannot throw the ammos but if they touch you youll die just save",100,400);
        text("4:These are some instructions you have to follow",100,550);
        text("5:PRess Enter to enter the game enjoy",100,600);
        if(keyDown("Enter")){
            gameState="game2";
        }
    }

        if(gameState==="game2"){
            background(background1img)
       
       fill("red");
       textSize(30)
        text("score:"+score,800,50)
            if(keyDown("RIGHT_ARROW")&&(player.position.x<580)){
              player.x = player.x+8
            }
            if(keyDown("LEFT_ARROW")&&(player.position.x>80)){
                player.x = player.x-8
            }
                if(keyDown("DOWN_ARROW")&&(player.position.y<920)){
                player.y = player.y+8
                }
                if(keyDown("UP_ARROW")&&(player.position.y>80)){
                player.y = player.y-8
                }
                tank1.visible = true;
        tank2.visible = true;
        tank3.visible = true;
        player.visible = true;
        line.visible = true;
               spawnEnemy();
                spawnAmmo();
         
             if(ammoGroup.isTouching(enemyGroup)){

                 enemyGroup.destroyEach();
               score = score+2
             }
             if(ammoGroup.isTouching(enemyGroup1)){
                enemyGroup1.destroyEach();
                score = score+2
            }
            if(ammoGroup.isTouching(enemyGroup2)){
                enemyGroup2.destroyEach();
                score = score+2
            }
            if(ammoGroup.isTouching(enemyGroup3)){
                enemyGroup3.destroyEach();
                score = score+2
            }
             
                if(enemyGroup.isTouching(player)){
                    gameState = "game9";
                }
                if(enemyGroup1.isTouching(player)){
                    gameState = "game9";
                }
                if(enemyGroup2.isTouching(player)){
                    gameState = "game9";
                }
                if(ammoGroup.isTouching(enemyGroup4)){
                    enemyGroup4.destroyEach();
                    score = score+2
                }
                if(enemyGroup3.isTouching(player)){
                    gameState = "game9";
                }
                if(enemyGroup4.isTouching(player)){
                    gameState = "game9";
                }
                if(ammoGroup.isTouching(enemyGroup4)){
                    enemyGroup4.destroyEach();
                }
                
             if(ammoGroup1.isTouching(player)){
                 gameState="game9";
             }
              if(score===100){
                  gameState="game3";
              }
         
            
             if (keyDown("space"))
             {
               createAmmo();
              
             }
        }
        if(gameState==="game3"){
            background(backgroundable);
            enemyGroup.destroyEach();
            enemyGroup1.destroyEach();
            enemyGroup2.destroyEach();
            enemyGroup3.destroyEach();
            enemyGroup4.destroyEach();
           ammoGroup.destroyEach();
           ammoGroup1.destroyEach();
           ammoGroup2.destroyEach();
           ammoGroup3.destroyEach();
           tank1.visible = false;
           tank2.visible = false;
           tank3.visible = false;
           player.visible = false;
           line.visible = false;
           fill("yellow");
           textSize(50);
          text ("oh wow you killed all the opponets after seeing your proness the remaining ",100,100);
          text("soldier from other team have been returned back to the own country",100,300);
          text("that was awesome how you done this i even dont know thanks a lot to you,",100,500);
          text("you helped the country and the soldier awesome what about how much you like ",100,650);
          text("the game; ",100,800);
          text("well to see the director and producer and others to see just click Y to see",100,800);
          if(keyDown("y")){
              gameState="game4";
          }
        
         
        }
       
        if(gameState==="game9"){
            background(backgroundable);
            fill("yellow");
            textSize(50);
            text("OK we all know that there is almost no chance of winning but we have some hopes  ,",100,200);
            text(" to you dont panic just refresh page it is just like time machine just go in past,",100,400);
            text("and do beat them all we all know you do better this time enjoy the game ",100,600);

            enemyGroup.destroyEach();
            enemyGroup1.destroyEach();
            enemyGroup2.destroyEach();
            enemyGroup3.destroyEach();
            enemyGroup4.destroyEach();
           ammoGroup.destroyEach();
           ammoGroup1.destroyEach();
           ammoGroup2.destroyEach();
           ammoGroup3.destroyEach();
           tank1.visible = false;
           tank2.visible = false;
           tank3.visible = false;
           player.visible = false;
           line.visible = false;
        }
       
       console.log(frameCount);
    drawSprites();

    
}         


function spawnEnemy(){
    if(frameCount%200===0){
        var enemy1 = createSprite(1550,150,50,50);
        enemy1.addImage(enemyImg);
        enemy1.scale =0.08;
        enemy1.velocityX = -7;
        enemy1.lifetime = 2500;
    

    enemyGroup.add(enemy1);
    }
   
 
    
    if(frameCount%200===0){
        var enemy2 = createSprite(1550,350,50,50);
        enemy2.addImage(enemyImg);
        enemy2.scale =0.08;
        enemy2.velocityX = -8;
        enemy2.lifetime = 22000;
       
    enemyGroup1.add(enemy2);
    }
    if(frameCount%200===0){
        var enemy3 = createSprite(1550,500,50,50);
        enemy3.addImage(enemyImg);
        enemy3.scale =0.08;
        enemy3.velocityX = -8;
        enemy3.lifetime = 2500;
       
    enemyGroup2.add(enemy3);
    }
    if(frameCount%200===0){
        var enemy4 = createSprite(1550,700,50,50);
        enemy4.addImage(enemyImg);
        enemy4.scale =0.08;
        enemy4.velocityX = -8;
        enemy4.lifetime = 2500;
       
    enemyGroup3.add(enemy4);
    }
    if(frameCount%200===0){
        var enemy5 = createSprite(1550,850,50,50);
        enemy5.addImage(enemyImg);
        enemy5.scale =0.08;
        enemy5.velocityX = -8;
        enemy5.lifetime = 2500;
       
    enemyGroup4.add(enemy5);
    }
}

   function createAmmo(){
     ammo = createSprite(100,100,920,50);
     ammo.addImage(ammoimg);
     ammo.x = player.x;
     ammo.y = player.y;
     ammo.velocityX = +32;
     ammo.scale = 0.02;
     ammo.lifetime = 2500;
     ammoGroup.add(ammo)
     return ammo
     
   }
      
    
    function spawnAmmo(){
        if(frameCount%120===0){
            var ammo1 = createSprite(1700,700,50,50);
            ammo1.addImage(ammoimg);
            ammo1.scale = 0.02;
            ammo1.velocityX = -32;
            ammo1.lifetime = 2500;
            ammoGroup1.add(ammo1);
    
        }
        if(frameCount%160===0){
            var ammo2 = createSprite(1700,450,50,50);
            ammo2.addImage(ammoimg);
            ammo2.scale = 0.02;
            ammo2.velocityX = -32;
            ammo2.lifetime = 2500;
            ammoGroup1.add(ammo2);

    }

    if(frameCount%80===0){
        var ammo3 = createSprite(1700,200,50,50);
        ammo3.addImage(ammoimg);
        ammo3.scale = 0.02;
        ammo3.velocityX = -32;
        ammo3.lifetime = 2500;
        ammoGroup1.add(ammo3);


    }

}

