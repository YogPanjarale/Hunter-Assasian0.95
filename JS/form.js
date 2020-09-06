class Form{ 
    constructor(){
        this.startButton=createButton("Start")
     this.Heading ="Level " +(activeLevel+1)
        //this.
        // this.startButton.shapeColor="red"
    }
    show(){
        background(230)
        setGradient(camera.x-(width/2), camera.y-(height/2), width, height,color("#6E89D7"), color("#CBE9F6"), "Y");
        drawSprites();
       //this.startButton.draw()
       push()
       textAlign(CENTER)
       textSize(gb)
       fill("#ffe8e5")
     text(this.Heading,(width/2)+(camera.x-(width/2)),camera.y-gb*4)
     pop()
    this.startButton.style('width', gb*4+"px");
   
    this.startButton.style('height', gb*1+"px");
    this.startButton.style('font-size',gb/2+"px");
    this.startButton.style('color',"#05263F")
    this.startButton.style('align', 'center')
    this.startButton.style('background', '#F6D811');
    this.startButton.position((width/2)-(gb*2),camera.y-gb)
   this.startButton.mousePressed(()=>{
       console.log("game Start")
       game=new Game()
       this.hide()
       deadEnimiesCount=0;
    })
    // setTimeout(function() { ()=>{
    //    console.log("game Start")
    //    game=new Game()
    //    this.hide()
    // } }, 5000);
    }
    hide(){
        this.startButton.hide()
    }
}
function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
    if (axis == "Y") { // Top to bottom gradient
      for (let i = y; i <= y + h; i++) {
        var inter = map(i, y, y + h, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
      }
    } else if (axis == "X") { // Left to right gradient
      for (let j = x; j <= x + w; j++) {
        var inter2 = map(j, x, x + w, 0, 1);
        var d = lerpColor(c1, c2, inter2);
        stroke(d);
        line(j, y, j, y + h);
      }
    }
  
  }