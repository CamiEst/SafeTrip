const opciones = document.querySelector('.opciones');
const main = document.querySelector('main');

let userLogged = sessionStorage.getItem('HAS_LOGGED');
main.addEventListener('mousemove', (event) => {
    if(userLogged === 'true'){
        const viewportHeight = main.clientHeight;
        const mainTop = main.getBoundingClientRect().top;
        const mouseY = event.clientY - mainTop;
        const minPosition = viewportHeight * 0.01; 
        const maxPosition = viewportHeight * 0.2; 
        
        if (mouseY >= minPosition && mouseY <= maxPosition) {
            opciones.style.top = '5vh'; 
        } else {
            opciones.style.top = '-15vh'; 
        }
    }
});

document.addEventListener('DOMContentLoaded', ()=>{mostrarRutas()});

const mapa = document.querySelector('.mapa');
function mostrarRutas(){
    userLogged = sessionStorage.getItem('HAS_LOGGED');
    if(userLogged === 'true'){
        mapa.innerHTML = `
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.237310162352!2d-75.5081601243106!3d10.402717389724277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef6259123455bd1%3A0x13caadfb339e7563!2sUniversidad%20de%20Cartagena%20%E2%80%94%20Campus%20Piedra%20de%20Bol%C3%ADvar!5e0!3m2!1ses!2sco!4v1733879739276!5m2!1ses!2sco" 
          width="900" 
          height="450" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `;
    }
    else{
        const div = document.createElement('p');
        div.innerHTML = "Inicia sesión para poder crear una ruta";
        mapa.replaceChildren(div);
    }
}


function buscarComunes(){
    const selec = document.getElementById('comunes');
    let ruta;
    switch(selec.selectedIndex){
        case 0:{
            ruta = `<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d15697.088645620921!2d-75.50746564115653!3d10.399945285628327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ef6259123455bd1%3A0x13caadfb339e7563!2sUniversidad%20de%20Cartagena%20%E2%80%94%20Campus%20Piedra%20de%20Bol%C3%ADvar!3m2!1d10.4027174!2d-75.5055852!4m5!1s0x8ef62597d37ea915%3A0x3a357558224f02e!2sCentro%20Comercial%20Paseo%20de%20La%20Castellana%2C%20Calle%2030%2C%20El%20Rub%C3%AD%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!3m2!1d10.3935795!2d-75.4872761!5e0!3m2!1ses!2sco!4v1733891947326!5m2!1ses!2sco" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
            break;
        }
        case 1:{
            ruta = `<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d15696.64948501308!2d-75.53001124115488!3d10.40867563549647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ef6259123455bd1%3A0x13caadfb339e7563!2sUniversidad%20de%20Cartagena%20%E2%80%94%20Campus%20Piedra%20de%20Bol%C3%ADvar!3m2!1d10.4027174!2d-75.5055852!4m5!1s0x8ef62f7dc75c028b%3A0xd862d4dfd8d72408!2sCaribe%20Plaza%20Centro%20Comercial%2C%20Calle%2029d%2C%20Pie%20de%20la%20Popa%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!3m2!1d10.414434!2d-75.5295239!5e0!3m2!1ses!2sco!4v1733892070333!5m2!1ses!2sco" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
            break;
        }
        case 2:{
            ruta = `<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d31392.787432140332!2d-75.54186434958415!3d10.413756891671348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ef6259123455bd1%3A0x13caadfb339e7563!2sUniversidad%20de%20Cartagena%20%E2%80%94%20Campus%20Piedra%20de%20Bol%C3%ADvar!3m2!1d10.4027174!2d-75.5055852!4m5!1s0x8ef62f9cc3222941%3A0x4b4fa23b82d1e15a!2sMall%20Plaza%20El%20Castillo%2C%20Avenida%20Pedro%20De%20Heredia%2C%20Playon%20Del%20Blanco%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!3m2!1d10.424646!2d-75.5408702!5e0!3m2!1ses!2sco!4v1733892301195!5m2!1ses!2sco" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
            break;
        }
        case 3:{
            ruta = `<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d31392.518968254346!2d-75.54645469958209!3d10.416422641510323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ef6259123455bd1%3A0x13caadfb339e7563!2sUniversidad%20de%20Cartagena%20%E2%80%94%20Campus%20Piedra%20de%20Bol%C3%ADvar!3m2!1d10.4027174!2d-75.5055852!4m5!1s0x8ef62fd62b4b1019%3A0xb6392bcd93ea973c!2sCentro%20Comercial%20La%20Serrezuela%2C%20Carrera%2011%2C%20San%20Diego%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!3m2!1d10.4283726!2d-75.5458254!5e0!3m2!1ses!2sco!4v1733892344672!5m2!1ses!2sco" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
            break;
        }
        case 4:{
            ruta = `<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d31392.656661715406!2d-75.5505399958547!3d10.415055479251617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ef6259123455bd1%3A0x13caadfb339e7563!2sUniversidad%20de%20Cartagena%20%E2%80%94%20Campus%20Piedra%20de%20Bol%C3%ADvar!3m2!1d10.4027174!2d-75.5055852!4m5!1s0x8ef62f12ad999131%3A0x4854915b1817679d!2sPlaza%20Bocagrande%20Centro%20Comercial%2C%20Carrera%201%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!3m2!1d10.411173!2d-75.5512287!5e0!3m2!1ses!2sco!4v1733892412381!5m2!1ses!2sco" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
            break;
        }
        case 5:{
            ruta = `<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d22198.179674147206!2d-75.53981438713276!3d10.41197590243739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ef6259123455bd1%3A0x13caadfb339e7563!2sUniversidad%20de%20Cartagena%20%E2%80%94%20Campus%20Piedra%20de%20Bol%C3%ADvar!3m2!1d10.4027174!2d-75.5055852!4m5!1s0x8ef62f75e088ab1f%3A0xc0e8daca58e29fb9!2sPlaza%20de%20la%20Trinidad%2C%20Esquina%20con%2C%20Calle%2029%2C%20Getseman%C3%AD%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!3m2!1d10.420606!2d-75.5453627!5e0!3m2!1ses!2sco!4v1733892471080!5m2!1ses!2sco" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
            break;
        }
        case 6:{
            ruta = `<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d31392.690865477398!2d-75.54702794958335!3d10.414715841613425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ef6259123455bd1%3A0x13caadfb339e7563!2sUniversidad%20de%20Cartagena%20%E2%80%94%20Campus%20Piedra%20de%20Bol%C3%ADvar!3m2!1d10.4027174!2d-75.5055852!4m5!1s0x8ef62f9e25972611%3A0x81d707bdd665ca70!2sParque%20Centenario%2C%20Media%2C%20Getseman%C3%AD%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!3m2!1d10.422651199999999!2d-75.5472715!5e0!3m2!1ses!2sco!4v1733892540891!5m2!1ses!2sco" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
            break;
        }
        case 7:{
            ruta = `<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d31392.787432140332!2d-75.54782524958406!3d10.413756891671335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ef6259123455bd1%3A0x13caadfb339e7563!2sUniversidad%20de%20Cartagena%20%E2%80%94%20Campus%20Piedra%20de%20Bol%C3%ADvar!3m2!1d10.4027174!2d-75.5055852!4m5!1s0x8ef62f59fee3b687%3A0x10636986e62f52fc!2sCentro%20de%20convenciones%2C%20Carrera%201%2C%20Getseman%C3%AD%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!3m2!1d10.4200266!2d-75.5484558!5e0!3m2!1ses!2sco!4v1733892607177!5m2!1ses!2sco" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
            break;
        }
        case 8:{
            ruta = `<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d28786.986994478546!2d-75.5470844848139!3d10.417286878231051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ef6259123455bd1%3A0x13caadfb339e7563!2sUniversidad%20de%20Cartagena%20%E2%80%94%20Campus%20Piedra%20de%20Bol%C3%ADvar!3m2!1d10.4027174!2d-75.5055852!4m5!1s0x8ef62f0a9374ac9b%3A0x63413ffacbef7012!2sParqueadero%20Parque%20La%20Marina%2C%20El%20Centro%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!3m2!1d10.421149999999999!2d-75.55287!5e0!3m2!1ses!2sco!4v1733892680535!5m2!1ses!2sco" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
            break;
        }

        case 9:{
            ruta = `<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d26397.93446908518!2d-75.54735867877704!3d10.41550399007463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ef6259123455bd1%3A0x13caadfb339e7563!2sUniversidad%20de%20Cartagena%20%E2%80%94%20Campus%20Piedra%20de%20Bol%C3%ADvar!3m2!1d10.4027174!2d-75.5055852!4m5!1s0x8ef62f755817fcb1%3A0xdba0e24824c52afb!2sPlaza%20de%20la%20Aduana%2C%20Calle%2032%2C%20El%20Centro%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!3m2!1d10.4221647!2d-75.5503234!5e0!3m2!1ses!2sco!4v1733892742384!5m2!1ses!2sco" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
            break;
        }
        case 10:{
            ruta = `<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d31392.787432140332!2d-75.5480013495841!3d10.413756891671348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ef6259123455bd1%3A0x13caadfb339e7563!2sUniversidad%20de%20Cartagena%20%E2%80%94%20Campus%20Piedra%20de%20Bol%C3%ADvar!3m2!1d10.4027174!2d-75.5055852!4m5!1s0x8ef625fa6fffffff%3A0xc5e9aefe72bf812e!2sMonumento%20Torre%20del%20Reloj%2C%20Boca%20del%20Puente%2C%20El%20Centro%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!3m2!1d10.4229787!2d-75.54921829999999!5e0!3m2!1ses!2sco!4v1733892799977!5m2!1ses!2sco" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
            break;
        }
        case 11:{
            ruta = `<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d31392.679123209382!2d-75.55060879958333!3d10.414832441606391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ef6259123455bd1%3A0x13caadfb339e7563!2sUniversidad%20de%20Cartagena%20%E2%80%94%20Campus%20Piedra%20de%20Bol%C3%ADvar!3m2!1d10.4027174!2d-75.5055852!4m5!1s0x8ef62fa03a0d982b%3A0x51f25f72fab1a38!2sPlaza%20Santo%20Domingo%2C%20Calle%2035%2C%20El%20Centro%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!3m2!1d10.424339999999999!2d-75.551975!5e0!3m2!1ses!2sco!4v1733892864660!5m2!1ses!2sco" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
            break;
        }
        case 12:{
            ruta = `<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d31392.653216244857!2d-75.5482084495831!3d10.415089691590838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ef6259123455bd1%3A0x13caadfb339e7563!2sUniversidad%20de%20Cartagena%20%E2%80%94%20Campus%20Piedra%20de%20Bol%C3%ADvar!3m2!1d10.4027174!2d-75.5055852!4m5!1s0x8ef62f9fa3a2699b%3A0xc05e2c5392010ef6!2sRestaurante%20San%20Valentin%2C%20centro%20calle%20Vicente%20Garcia%2C%20Calle%2037%2C%20El%20Centro%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!3m2!1d10.424451!2d-75.5493457!5e0!3m2!1ses!2sco!4v1733893026696!5m2!1ses!2sco" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
            break;
        }
        case 13:{
            ruta = `<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d31392.787432140332!2d-75.54705544958415!3d10.413756891671335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ef6259123455bd1%3A0x13caadfb339e7563!2sUniversidad%20de%20Cartagena%20%E2%80%94%20Campus%20Piedra%20de%20Bol%C3%ADvar!3m2!1d10.4027174!2d-75.5055852!4m5!1s0x8ef62fab15dd71ef%3A0x8cc085d1aea98c0c!2sRestaurante-Bar%20San%20Nicolas%2C%20Calle%2025%2C%20Getseman%C3%AD%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!3m2!1d10.4199422!2d-75.54727609999999!5e0!3m2!1ses!2sco!4v1733893094349!5m2!1ses!2sco" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
            break;
        }
        case 14:{
            ruta = `<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d22198.061676047295!2d-75.5385022520366!3d10.413633265970377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ef6259123455bd1%3A0x13caadfb339e7563!2sUniversidad%20de%20Cartagena%20%E2%80%94%20Campus%20Piedra%20de%20Bol%C3%ADvar!3m2!1d10.4027174!2d-75.5055852!4m5!1s0x8ef62f7740c59b73%3A0xcbfcf667b469cdea!2sMacarena%20Restaurante%20Bar%2C%20Calle%2025%2C%20Getseman%C3%AD%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!3m2!1d10.4198649!2d-75.54722559999999!5e0!3m2!1ses!2sco!4v1733893158572!5m2!1ses!2sco" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
            break;
        }
        case 15:{
            ruta = `<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d37332.690378875566!2d-75.55377555598572!3d10.41238555169972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ef6259123455bd1%3A0x13caadfb339e7563!2sUniversidad%20de%20Cartagena%20%E2%80%94%20Campus%20Piedra%20de%20Bol%C3%ADvar!3m2!1d10.4027174!2d-75.5055852!4m5!1s0x8ef62f9e1948ce87%3A0xda4229a0ec27a7af!2sPorthos%20Steakhouse%20%26%20Pub%20Cartagena%2C%20Calle%20estanco%20del%20tabaco%20con%20calle%20del%20coliseo%20esquina%20Centro%20Hist%C3%B3rico%2C%20Calle%2035%2C%20El%20Centro%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!3m2!1d10.4244196!2d-75.55037469999999!5e0!3m2!1ses!2sco!4v1733893267602!5m2!1ses!2sco" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
            break;
        }

        case 16:{
            ruta = `<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d31392.597145263582!2d-75.55066289958266!3d10.415646441557206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ef6259123455bd1%3A0x13caadfb339e7563!2sUniversidad%20de%20Cartagena%20%E2%80%94%20Campus%20Piedra%20de%20Bol%C3%ADvar!3m2!1d10.4027174!2d-75.5055852!4m5!1s0x8ef62f7f2d338247%3A0xde96144e745d3fdc!2sAtrium%20Food%20%26%20Drinks%20-%20Bocagrande%2C%20Carrera%203%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!3m2!1d10.406778599999999!2d-75.5511077!5e0!3m2!1ses!2sco!4v1733893375236!5m2!1ses!2sco" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
            break;
        }
        case 17:{
            ruta = `<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d31392.597145263582!2d-75.55248639958266!3d10.415646441557206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ef6259123455bd1%3A0x13caadfb339e7563!2sUniversidad%20de%20Cartagena%20%E2%80%94%20Campus%20Piedra%20de%20Bol%C3%ADvar!3m2!1d10.4027174!2d-75.5055852!4m5!1s0x8ef62f06e415cb6f%3A0xcfb3b11932f97e72!2sRestaurante%20Nami%2C%20Cra%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!3m2!1d10.4!2d-75.5580556!5e0!3m2!1ses!2sco!4v1733893424909!5m2!1ses!2sco" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
            break;
        }
        case 18:{
            ruta = `<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d31392.597145263582!2d-75.55100554958264!3d10.415646441557206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ef6259123455bd1%3A0x13caadfb339e7563!2sUniversidad%20de%20Cartagena%20%E2%80%94%20Campus%20Piedra%20de%20Bol%C3%ADvar!3m2!1d10.4027174!2d-75.5055852!4m5!1s0x8ef62f7fcd4d99b5%3A0x94fae6356ad0f8d!2sRestaurante%20American%20Dream%2C%20Carrera%202%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!3m2!1d10.403303!2d-75.55522669999999!5e0!3m2!1ses!2sco!4v1733893494369!5m2!1ses!2sco" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
            break;
        }
    }

    mapa.innerHTML = ruta;

}