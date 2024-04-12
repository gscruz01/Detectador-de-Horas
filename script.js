function horario() {
    var msg = document.getElementById('msg')
    var msg2 = document.getElementById('msg2')
    var img = document.getElementById('img')
    var agora = new Date()
    var horas = agora.getHours()
    var minutos = agora.getMinutes()
    if (horas >= 0 && horas <= 4) {
        msg.innerHTML = `Agora são ${horas}:${minutos}.`
        msg2.innerHTML = 'Boa Madrugada'
        img.src = 'Midia/FotoMadrugada.png'
        document.body.style.background = '#161A25'
    }
    else if (horas >= 5 && horas <= 12) {
        msg.innerHTML = `Agora são ${horas}:${minutos}.`
        msg2.innerHTML = 'Bom Dia'
        img.src = 'Midia/FotoManha.png'
        document.body.style.background = '#DCA68C'
    }
    else if (horas >= 13 && horas <= 18) {
        msg.innerHTML = `Agora são ${horas}:${minutos}.`
        msg2.innerHTML = 'Boa Tarde'
        img.src = 'Midia/FotoTarde.jpg'
        document.body.style.background = '#FCB530'
    }
    else {
        msg.innerHTML = `Agora são ${horas}:${minutos}.`
        img.src = 'Midia/FotoNoite.png'
        msg2.innerHTML = 'Boa Noite'
        document.body.style.background = '#020202'
    }
}