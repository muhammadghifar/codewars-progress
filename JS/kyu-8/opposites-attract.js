function lovefunc(flower1, flower2){
  // moment of truth
  return (flower1 + flower2) % 2 !== 0
}

const i = 2
const j = 4
console.log(lovefunc(i, j));