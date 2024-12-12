document.addEventListener('DOMContentLoaded', ()=>{Logged()});

function Logged(){
    const userLogged = sessionStorage.getItem('HAS_LOGGED');

    if(userLogged === 'true'){
        const user = JSON.parse(sessionStorage.getItem('USER_LOGGED'));
        const registrar = document.querySelector('.registrar');
        registrar.classList.add('hidden');
        const img = document.querySelector('.iniciar img');
        img.src = '/Img/usuario.png';
        const name = document.querySelector('.iniciar p');
        name.innerText = `${user.name}`;
        const iniciar = document.querySelector('.iniciar');
        iniciar.removeAttribute('href');
        const confi =document.querySelector('.confi');
        const prov = document.createElement('div');
        const a = document.createElement('a');
        a.href = '/html/proveedores.html';
        a.innerText = 'Proveedores';
        prov.append(a);
        confi.append(document.createElement('hr'));
        confi.append(prov);
        iniciar.addEventListener('click', (e) => {
            if(confi.classList.contains('hidden')){
                confi.classList.remove('hidden');
                confi.classList.add('aparecer');
            }
            else{
                confi.classList.add('hidden');
                confi.classList.remove('aparecer');
                
            }
        });
    }
}

function logOut(){
    const confirmation = document.getElementById('log-out__confirm');
    confirmation.classList.remove('hidden');
}

function confirm(hasConfirmed){
    if(hasConfirmed){
        sessionStorage.removeItem('HAS_LOGGED');
        sessionStorage.removeItem('USER_LOGGED');

        location.reload();
    }
}