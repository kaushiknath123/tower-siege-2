class polygon{
    constructor(x,y,width,height) {
      var options = {
          'restitution':0.8,
          'friction':0.8,
          'density':0.7
      }
      this.body = Bodies.rectangle(x,y,width,height, options);
      this.image = loadImage("polygon.png");

      
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      imageMode(CENTER);
      fill("red");
      image(this.image, pos.x, pos.y, this.width, this.height);
      pop();
    }
  }
