function moverPosicionRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btnSi");
let btnNo = document.getElementById("btnNo");
let divModoSexo = document.getElementsByClassName("modoSexo")[0];

btnNo.addEventListener('mouseenter', function(e) { moverPosicionRandom(e.target) });

btnSi.addEventListener('click', function(e) {
    alert('Sabia que dirias que SÍ. Casemonos ya y tengamos hijos. TE AMO!!!')
    divModoSexo.style.display = 'block';
    const cancion = new Audio('./img/05.mp3');
    cancion.play();
});