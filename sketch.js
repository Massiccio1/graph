
let dim = 50
let min_b = 3
let max_b = 7

let nx=0
let ny=1000
let nz=0
let dz = 0.01

let arr = new Array(dim)
let conn = new Array(dim)


function rngu(amount) {
  let max = dim-1
  let min = 0
  if (amount > (max - min + 1)) {
      throw new Error("Cannot generate more unique numbers than the range allows.");
  }

  let result = [];
  while (result.length < amount) {
      let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!result.includes(randomNumber)) {
          result.push(randomNumber);
      }
  }

  return result;
}


function draw_conn(){
  for(let i = 0; i < dim; i++){
    let range = floor(random( min_b , max_b ))
    arr[i]=new Node(random(height),random(width))
    conn[i]=rngu(range)
    
  }
}

function setup() {
  createCanvas(400, 400);
  // console.log(rngu(5))
  for(let i = 0; i < dim; i++){
    let range = floor(random( min_b , max_b ))
    arr[i]=new Node(random(height),random(width))
    conn[i]=rngu(range)
    arr[i].add_conn(conn[i])
  }
}

function draw() {
  background(220);

  for(let i = 0; i < dim; i++){
    // x = noise(ny)
    arr[i].update_pos()
    arr[i].draw()
    arr[i].draw_connections(arr)
    nx+=0.001
    ny+=0.001

    if(arr[i].intensity<=0){
      index=arr[i].fading
      // arr[i].connections[index]=floor(random()*dim)
      arr[i].connections[index]=floor(random()*dim)
      // console.log(arr[i].intensity)
    }

  }
  
  nz+=0.01
  // console.log(nz)
}
