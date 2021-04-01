class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.title = createElement('h2');
  }
  hide(){
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Trex Online");
    this.title.position(displayWidth/2 - 105, 0);
    
    this.input.position(displayWidth/2 - 100 , displayHeight/2 - 100);
    this.button.position(displayWidth/2 - 40, displayHeight/2-30);
2
    this.button.mousePressed(()=>{
      console.log("inside display")
      this.input.hide();
      this.button.hide();
     playerCount++;
      player.name = this.input.value();
      gameState = PLAY;
      console.log(player.name)
      player.updateCount(playerCount);
      player.update()
     
    });

  }
}
