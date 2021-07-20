class Cannon {
constructor(x, y, width, height, angle) {
this.width = width;
this.height = height
this.x = x
this.y = y
this.angle = angle

}

display(){
    push ()
    translate (this.x,this.y)
    rotate(this.angle)
//rectMode(CENTER)
rect(10,-20,this.width,this.height)
pop () 
arc (this.x,this.y,140,200,PI,TWO_PI)


}


}