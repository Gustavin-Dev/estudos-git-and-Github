let somatorio = []

for(let i =1 ; i<=100;i++){
    somatorio.push(i)
}

const fazerSomatorio = vetorPserSomado => vetorPserSomado.reduce((atual,item)=> atual + item)

console.log(fazerSomatorio(somatorio))

module.exports = {
    fazerSomatorio
}