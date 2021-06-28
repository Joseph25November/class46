class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
    cat = createSprite(200,displayHeight / 2 - 100,50,50)
    mouse = createSprite(displayWidth / 2 - 300,100,30,30)
    cat.addImage("cat", catimage)
    mouse.addImage("mouse", mouseimage)

    
    }
  
    play(){
        if(keyIsDown("W")){
        player.y +=5
        player.update()
        }

        if(keyIsDown("A")){
          player.x -=5
          player.update()
          }

          if(keyIsDown("S")){
            player.y -=5
            player.update()
            }

            if(keyIsDown("D")){
              player.x +=5
              player.update()
              }

              if(keyPressed("F")&& cat.isTouching){
              cat.addImage("catattack", catattack)
              player.health -=10
              }

              if(keyPressed("E")&& mouse.isTouching){
                cat.addImage("mouseattack", mouseattack)
                player.health -=10
                }

                if(player.health === 0){
                image(GameOver, displayWidth / 2,displayHeight / 2, displayWidth,displayHeight)
                }
    }
    end(){
      console.log("Game Ended");
      console.log(player.rank)
    }
  }