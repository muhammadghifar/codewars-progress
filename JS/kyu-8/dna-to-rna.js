// https://www.codewars.com/kata/5556282156230d0e5e000089
function DNAtoRNA(dna){
  // moment of truth
  return dna.replaceAll('T', 'U')
}

const i = 'T'
console.log(DNAtoRNA(i));