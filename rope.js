class rope  {
        constructor(bodyA,bodyB){
        
        

         var options = {
             bodyA:bodyA,
             bodyB:bodyB,
             stiffness:0.09,
             length:300
         }   
         this.rope = Constraint.create(options);
         World.add(world,this.rope);
        }
        display(){
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;
            strokeWeight(3);
            stroke("brown");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        
        
        
        }