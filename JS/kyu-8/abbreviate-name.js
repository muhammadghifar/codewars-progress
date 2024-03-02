// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
function abbrevName(name){
  // code away
  return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}

const named = 'Sam Harris'
console.log(abbrevName(named));