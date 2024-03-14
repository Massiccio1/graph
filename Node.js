class Node{
    constructor(x,y){
        this.connections = []
        this.pos = createVector(x,y)
        this.rotation=random(TWO_PI)
        this.nx=random()*10000
        this.ny=random()*10000
        this.intensity=parseInt(random()*127)
        this.dir = -1
    }
    add_conn(connections){
        this.connections=connections
        this.fading=floor(random()*this.connections.length)
    }
    push_conn(index){
        this.connections.unshift(index)
        console.log(this.connections)
        
    }

    draw(){
        stroke(0)
        strokeWeight(5.2)
        point( this.pos.x , this.pos.y )

        
    }

    update_pos(){
        this.pos.x = map( noise(this.nx) , 0, 1, 0 ,width)
        this.pos.y = map( noise(this.ny) , 0, 1, 0 ,height)
        this.nx+=0.001
        this.ny+=0.001
    }

    draw_connections(nodes){
        this.intensity+=this.dir

        if(this.intensity<=0){
            this.dir=1
        }
        // if(this.intensity<255){
        //     this.intensity+=this.dir    
        // }
        if(this.intensity==127 && this.dir==1){
            this.fading=floor(random()*this.connections.length)
        }
        if(this.intensity==127){
            let thr = 0.7
            let r = random()
            if(r>thr){
                this.dir=-1
                // console.log(this.connections)
            }else
                this.dir=0   
        }

        

        for(let c =0 ; c < this.connections.length-2; c++){

            let tox=nodes[this.connections[c]].pos.x
            let toy=nodes[this.connections[c]].pos.y
            let inte = 127
            if(c==this.fading)    inte = this.intensity
            stroke(0,inte)
            strokeWeight(0.3)
            line(this.pos.x, this.pos.y, tox,toy)
        }
    }
}
