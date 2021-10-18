class Game{
    constructor(){}

    display(){
        var reduce = createButton("Wanna reduce the speed of the ground?")
        reduce.position(displayWidth/2,300)
        
        var remain = createButton("Play on?")
        remain.position(displayWidth/2,350)

        reduce.mousePressed(function(){
            reduce.position(displayWidth/2,1000)
            remain.position(displayWidth/2,1500)
            g = 0;
            coinText = coinText-10;
              })
            
              remain.mousePressed(function(){
                reduce.position(displayWidth/2,1000)
                remain.position(displayWidth/2,1500)
                ground.velocityY = groundspeed;
                character.velocityY = characterspeed;
                  })
     } 
}