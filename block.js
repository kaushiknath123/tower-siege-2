class block{
  constructor(x,y,width,height) {
    var options = {
        isStatic: false
    }
    this.body = Bodies.rectangle(x,y,width,height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    

    if(this.body.speed<5){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
    } else{
      World.remove(world,this.body);
      this.visibility=this.visibility-5;
      tint(255,this.visibility);
    }
    pop();
  }
   
  }

