let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
valores.push(25, 16)


for(let listval = 0; listval < valores.length; listval++ ){
    console.log(`A posição ${listval} tem o valor ${valores[listval]}`)
}