class Stone {
    constructor(x,y,w,h) {
        var options = {
        restitution: 0.8,
        friction: 0.9,
        density: 12
        }
        this.width = w;
        this.height = h;
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
       translate(pos.x,pos.y);
       rotate(angle);
       fill("crimson");
       stroke(0);
       strokeWeight(4);
       rectMode(CENTER);
       rect(0,0,this.width,this.height);

        pop();
    }   
}