function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        img.src = 'image/adultohomem.png'
        document.body.style.background = "#db9816"
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'image/jovemhomem.png'
        document.body.style.background = "#7f8455"
    } else { 
        img.src = 'image/idosohomem.png'
        document.body.style.background = '#1a2e2f'
    }
}