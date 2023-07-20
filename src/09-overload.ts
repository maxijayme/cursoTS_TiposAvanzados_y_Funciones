
function overload(input: string):string[]
function overload(input: string[]):string

function overload (input: unknown): unknown{
  if(typeof input === 'string' || Array.isArray(input))
  return input
}

const rta1 = overload('maxi')
console.log(rta1.indexOf('m'))
const rta2 = overload(['j','a','y','m','e'])
console.log(rta2[0].toLocaleUpperCase())