class Link {

    constructor(bodyA, bodyB) {
        var lastLink = bodyA.body.bodies.length - 2
        var options = {
            bodyA: bodyA.body.bodies[lastLink],
            bodyB: bodyB.body,
            pointA: { x: 0, y: 0 },
            pointB: { x: 0, y: 0 },
            length: 10,
            stiffness: 0.8
        }

        this.link = Constraint.create(options)
        World.add(world, this.link)

    }

}