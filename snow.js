class Snow extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("snow2.jpg");
      Snow.scale = 2;
    }
  
  };