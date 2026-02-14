function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRo] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) 
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'image/criancahomem.png')
            } else if (idade < 21) {
                //
                img.setAttribute('src', 'image/jovemhomem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'image/adultohomem.png')
            } else {
                //idoso
                img.setAttribute('src', 'image/idosohomem.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'image/criancamulher.png')
            } else if (idade < 21) {
                //joven
                img.setAttribute('src', 'image/jovemmulher.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'image/adultomulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'image/idosomulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}