const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataquesDelJugador')
const ataquesDelEnemigo = document.getElementById('ataquesDelEnemigo')
const contenedorTarjetas = document.getElementById("contenedor-tarjetas")
const contenedorAtaques = document.getElementById('contenedor-ataques')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let mokepones = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodogue 
let inputCapipepo 
let inputRatigueya
let inputPydos
let inputLangostelvis
let inputTucapalma 
let mascotaJugador 
let mascotaJugadorObjeto
let ataquesMokepon
let botonFuego 
let botonAgua 
let botonTierra 
let botones = []
let ataqueJugador = []
let ataquesMokeponEnemigo
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = 'img/mokemap.png'

class Mokepon{
    constructor(nombre, foto, vida, fotoMapa, x=10, y=10){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.x = x
        this.y = y
        this.ancho = 60
        this.alto = 60
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let hipodogue = new Mokepon('Hipodogue', 'img/mokepons_mokepon_hipodoge_attack.png', 5, 'img/hipodoge.png')

let capipepo = new Mokepon('Capipepo', 'img/mokepons_mokepon_capipepo_attack.png', 5, 'img/capipepo.png')

let ratigueya = new Mokepon('Ratigueya', 'img/mokepons_mokepon_ratigueya_attack.png', 5, 'img/ratigueya.png')

let pydos= new Mokepon('Pydos', 'img/mokepons_mokepon_pydos_attack.png', 5, 'img/pydos.png')

let langostelvis = new Mokepon('Langostelvis', 'img/mokepons_mokepon_langostelvis_attack.png', 5, 'img/langostelvis.png')

let tucapalma = new Mokepon('Tucapalma', 'img/mokepons_mokepon_tucapalma_attack.png', 5, 'img/tucapalma.png')

let hipodogueEnemigo = new Mokepon('Hipodogue', 'img/mokepons_mokepon_hipodoge_attack.png', 5, 'img/hipodoge.png', 80, 120)

let capipepoEnemigo = new Mokepon('Capipepo', 'img/mokepons_mokepon_capipepo_attack.png', 5, 'img/capipepo.png', 130, 320)

let ratigueyaEnemigo = new Mokepon('Ratigueya', 'img/mokepons_mokepon_ratigueya_attack.png', 5, 'img/ratigueya.png', 180, 10)

let pydosEnemigo= new Mokepon('Pydos', 'img/mokepons_mokepon_pydos_attack.png', 5, 'img/pydos.png', 230, 90)

let langostelvisEnemigo = new Mokepon('Langostelvis', 'img/mokepons_mokepon_langostelvis_attack.png', 5, 'img/langostelvis.png', 280, 190)

let tucapalmaEnemigo = new Mokepon('Tucapalma', 'img/mokepons_mokepon_tucapalma_attack.png', 5, 'img/tucapalma.png', 320, 280)

hipodogue.ataques.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🪨', id: 'boton-tierra'},
)

capipepo.ataques.push(
    { nombre: '🪨', id: 'boton-tierra'},
    { nombre: '🪨', id: 'boton-tierra'},
    { nombre: '🪨', id: 'boton-tierra'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
)

ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🪨', id: 'boton-tierra'},
)

pydos.ataques.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🪨', id: 'boton-tierra'},
)

langostelvis.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🪨', id: 'boton-tierra'},
)

tucapalma.ataques.push(
    { nombre: '🪨', id: 'boton-tierra'},
    { nombre: '🪨', id: 'boton-tierra'},
    { nombre: '🪨', id: 'boton-tierra'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
)

mokepones.push(hipodogue, ratigueya, capipepo, pydos, langostelvis, tucapalma)

function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'

    mokepones.forEach((Mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${Mokepon.nombre} /> 
            <label class="tarjeta-de-mokepon" for=${Mokepon.nombre}>
                <p>${Mokepon.nombre}</p>
                <img src=${Mokepon.foto} alt=${Mokepon.nombre}>
            </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodogue = document.getElementById('Hipodogue')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')
        inputPydos = document.getElementById('Pydos')
        inputLangostelvis = document.getElementById('Langostelvis')
        inputTucapalma = document.getElementById('Tucapalma')
    })

    sectionReiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}   

function seleccionarMascotaJugador(){
    sectionSeleccionarMascota.style.display = 'none'
    //sectionSeleccionarAtaque.style.display = 'flex'
     
   
    let jugar = 1

    if (inputHipodogue.checked){
        spanMascotaJugador.innerHTML = inputHipodogue.id
        mascotaJugador = inputHipodogue.id
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
    } else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id
    } else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
    } else {
        alert("Tienes que elegir una mascota!")
        jugar = 0
    }
    if (jugar == 1){
        sectionVerMapa.style.display = 'flex'
        iniciarMapa()
        extraerAtaques(mascotaJugador)
        seleccionarMascotaEnemigo()
    }    
}

function extraerAtaques(mascotaJugador){
    let ataques 
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }    
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
 ataques.forEach((ataque) => {
    ataquesMokepon = `
    <button class="boton-de-ataque BAtaque"  id=${ataque.id}>${ataque.nombre}</button>
    `
    contenedorAtaques.innerHTML += ataquesMokepon
 })

     botonFuego = document.getElementById('boton-fuego')
     botonAgua = document.getElementById
     ('boton-agua')
     botonTierra = document.getElementById('boton-tierra')
     botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if(e.target.textContent === '🔥'){
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else if(e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
}
function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(0, mokepones.length -1)
        
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatorio].ataques
    secuenciaAtaque()
}



function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1);
  let ataque = ataquesMokeponEnemigo[ataqueAleatorio].nombre;
  ataquesMokeponEnemigo.splice(ataqueAleatorio, 1);

  if (ataque == "🔥") {
    ataqueEnemigo.push("FUEGO");
  } else if (ataque == "💧") {
    ataqueEnemigo.push("AGUA");
  } else {
    ataqueEnemigo.push("TIERRA");
  }
  console.log(ataqueEnemigo)
   iniciarPelea()
}

function iniciarPelea(){
    if(ataqueJugador.length === 5){
        combate()
    }
}

function indexAmbosOponentes(jugador,enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate(){

    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]){
            indexAmbosOponentes(index, index)
            crearMensaje("Empate🤝")
            
        } else if ((ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA') || (ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO') || (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA')) {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE🎉")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(index, index)
            crearMensaje("Perdiste")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
        
    }

    //Revisar las vidas
    revisarVidas()
}

function revisarVidas(){
    if(victoriasJugador === victoriasEnemigo){
        crearMensajeFinal("Esto fue un empate!!")
    } else if (victoriasJugador > victoriasEnemigo){
        crearMensajeFinal("FELICITACIONES. GANASTE! 😁")
    } else {
        crearMensajeFinal("HAS PERDIDO 😭")
    }
}

function crearMensaje(resultado){
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    let resultadoJugador = ""
    let resultadoEnemigo = ""
    if (resultado == "Empate🤝"){
        resultadoJugador = "🟡"
        resultadoEnemigo = "🟡"
    } else if (resultado == "GANASTE🎉"){
        resultadoJugador = "✅"
        resultadoEnemigo = "❌"
    } else {
        resultadoJugador = "❌"
        resultadoEnemigo = "✅"
    }

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador + resultadoJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo + resultadoEnemigo
    //let parrafo = document.createElement('p')
    //parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador +', las mascota del enemigo ataco con ' + ataqueEnemigo + ' - ' + resultado
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    let parrafo = document.createElement('p')
    sectionMensajes.innerHTML = resultadoFinal
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function pintarCanvas() {
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()
    hipodogueEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
    pydosEnemigo.pintarMokepon()
    langostelvisEnemigo.pintarMokepon()
    tucapalmaEnemigo.pintarMokepon()
}

function moverDerecha() {
    const miMokepon = obtenerObjetoMascota()
    miMokepon.velocidadX = 5
}

function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = -5
}

function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = 5
}

function moverArriba() {
    mascotaJugadorObjeto.velocidadY = -5
}

function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePrecionoUnaTecla(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break
    }
}

function iniciarMapa(){
    mapa.width = 520
    mapa.height = 440
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener('keydown', sePrecionoUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)

}   

function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
            return mokepones[i]
        }    
    }
}


window.addEventListener('load', iniciarJuego)