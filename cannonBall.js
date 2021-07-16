class cannonBall{
constructor(x,y){
    var options={
        restitution:0.8,
        friction:1.0,
        density:1.0,
        isStatic:true
    }
    this.r = 40;
    this.body=Bodies.circle(x,y,this.r,options);
    this.image = loadimage("./assets/cannonball.png")
    World.add(world,this.body)

}
display(){
    this.angle = this.body.angle;
    this.pos = this.body.position;
    push();
    translate(pos.x,pos.y)
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r);
    pop();
}
}