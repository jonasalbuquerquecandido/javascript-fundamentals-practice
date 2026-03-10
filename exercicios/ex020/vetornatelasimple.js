let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
valores.push(25, 16)


for(let listval in valores){
    console.log(`A posição ${listval} tem o valor ${valores[listval]}`)
}