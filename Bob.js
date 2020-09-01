class Bob{
    constructor(x, y, radius) {
        var options = {
            'isStatic': false,
            'restitution': 1,
            'friction':0,
            'density':1.0
        }
        
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body)

    }

    display() {
        var angle = this.body.angle;
        push();
        rotate(angle);
        fill("red")
        translate(this.body.position.x, this.body.position.y)
        ellipseMode(RADIUS);
        ellipse(0,0, this.radius, this.radius);
        pop();
    }
}