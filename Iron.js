class Iron {
    constructor(x,y) {
        var options = {
        restitution: 0.8,
        friction: 3,
        density: 30
        }
        this.width = 80;
        this.height = 50;
        this.body = Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body);
    }
    display() {
        //var pos = this.body.position;
        var angle = this.body.angle;
        push();
       translate(this.body.position.x,this.body.position.y);
       rotate(angle);
       fill("grey");
       rectMode(CENTER);
       rect(0,0,this.width,this.height);

        pop();
    }   
}