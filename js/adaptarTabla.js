//Botones del primer grupo
let angularbtn1 = document.getElementById('angularbtn1');
let vuebtn1 = document.getElementById('vuebtn1');
let reactbtn1 = document.getElementById('reactbtn1');
let ionicbtn1 = document.getElementById('ionicbtn1');

//Botones del segundo grupo
let angularbtn2 = document.getElementById('angularbtn2');
let vuebtn2 = document.getElementById('vuebtn2');
let reactbtn2 = document.getElementById('reactbtn2');
let ionicbtn2 = document.getElementById('ionicbtn2');

//Filas de cada framework
let filasAngular = document.getElementsByClassName('filaAngular');
let filasVue = document.getElementsByClassName('filaVue');
let filasReact = document.getElementsByClassName('filaReact');
let filasIonic = document.getElementsByClassName('filaIonic');

//Obtenemos el div que oculta ta tabla cuando la pantalla del usuario es mas pequenyo
let elDivQueOculta = document.getElementById('elDivQueOculta');

//Obtenemos el div y el boton que solo aparece si has puesto la pantalla mas pequenya
let botonMostrarTodoOtraVez = document.getElementById('botonMostrarTodoOtraVez');
let divMostrarTodoOtraVez = document.getElementById('divMostrarTodoOtraVez');


//Constantes
const angular = 'ANGULAR';
const vue = 'VUE';
const react = 'REACTNATIVE';
const ionic = 'IONIC';

//Ultimo seleccionado por cada grupo
let ultimoSeleccionadoPrimerGrupo;
let ultimoSeleccionadoSegundoGrupo;


let primeraVez = true;





function mostrarFilas(tecnologia, mostrar){
    switch(tecnologia){
        case angular:
            for(let i = 0; i<filasAngular.length; i++){
                if(mostrar)
                    filasAngular[i].setAttribute('class', 'collapse.show multi-collapse filaAngular');
                else
                    filasAngular[i].setAttribute('class', 'collapse multi-collapse filaAngular');
            }
            break;

        case vue:
            for(let i = 0; i<filasVue.length; i++){
                if(mostrar)
                    filasVue[i].setAttribute('class', 'collapse.show multi-collapse filaVue');
                else
                    filasVue[i].setAttribute('class', 'collapse multi-collapse filaVue');
            }
            break;

        case react:
            for(let i = 0; i<filasReact.length; i++){
                if(mostrar)
                    filasReact[i].setAttribute('class', 'collapse.show multi-collapse filaReact');
                else
                    filasReact[i].setAttribute('class', 'collapse multi-collapse filaReact');
            }
            break;

        case ionic:
            for(let i = 0; i<filasIonic.length; i++){
                if(mostrar)
                    filasIonic[i].setAttribute('class', 'collapse.show multi-collapse filaIonic');
                else
                    filasIonic[i].setAttribute('class', 'collapse multi-collapse filaIonic');
            }
            break;
    }

}



//Eventos de los botones del primer grupo
let colocadoDivMostrarTodo = false;
function ocultarTodosLosElementos(){
    if(primeraVez){
        mostrarFilas(angular, false);
        mostrarFilas(vue, false);
        mostrarFilas(react, false);
        mostrarFilas(ionic, false);
        elDivQueOculta.setAttribute('class', '');
        primeraVez = false;
    }

    if(!colocadoDivMostrarTodo){
        divMostrarTodoOtraVez.setAttribute('class', 'd-none d-lg-block');
        colocadoDivMostrarTodo = true;
    }
}


function angularEventoPrimerGrupo(){
    ocultarTodosLosElementos();
    if(ultimoSeleccionadoPrimerGrupo !== angular){
        if(ultimoSeleccionadoPrimerGrupo !== ultimoSeleccionadoSegundoGrupo)
            mostrarFilas(ultimoSeleccionadoPrimerGrupo, false);
        mostrarFilas(angular, true);
        ultimoSeleccionadoPrimerGrupo = angular;
    }
}

function vueEventoPrimerGrupo(){
    ocultarTodosLosElementos();
    if(ultimoSeleccionadoPrimerGrupo !== vue){
        if(ultimoSeleccionadoPrimerGrupo !== ultimoSeleccionadoSegundoGrupo)
            mostrarFilas(ultimoSeleccionadoPrimerGrupo, false);
        mostrarFilas(vue, true);
        ultimoSeleccionadoPrimerGrupo = vue;
    }
}

function reactEventoPrimerGrupo(){
    ocultarTodosLosElementos();
    if(ultimoSeleccionadoPrimerGrupo !== react){
        if(ultimoSeleccionadoPrimerGrupo !== ultimoSeleccionadoSegundoGrupo)
            mostrarFilas(ultimoSeleccionadoPrimerGrupo, false);
        mostrarFilas(react, true);
        ultimoSeleccionadoPrimerGrupo = react;
    }
}

function ionicEventoPrimerGrupo(){
    ocultarTodosLosElementos();
    if(ultimoSeleccionadoPrimerGrupo !== ionic){
        if(ultimoSeleccionadoPrimerGrupo !== ultimoSeleccionadoSegundoGrupo)
            mostrarFilas(ultimoSeleccionadoPrimerGrupo, false);
        mostrarFilas(ionic, true);
        ultimoSeleccionadoPrimerGrupo = ionic;
    }
}


angularbtn1.addEventListener("click", angularEventoPrimerGrupo); 
vuebtn1.addEventListener("click", vueEventoPrimerGrupo);
reactbtn1.addEventListener("click", reactEventoPrimerGrupo);
ionicbtn1.addEventListener("click", ionicEventoPrimerGrupo);



//Eventos de los botones del SEGUNDO grupo

function angularEventoSegundoGrupo(){
    ocultarTodosLosElementos();
    if(ultimoSeleccionadoSegundoGrupo !== angular){
        if(ultimoSeleccionadoPrimerGrupo !== ultimoSeleccionadoSegundoGrupo)
            mostrarFilas(ultimoSeleccionadoSegundoGrupo, false);
        mostrarFilas(angular, true);
        ultimoSeleccionadoSegundoGrupo = angular;
    }
}

function vueEventoSegundoGrupo(){
    ocultarTodosLosElementos();
    if(ultimoSeleccionadoSegundoGrupo !== vue){
        if(ultimoSeleccionadoPrimerGrupo !== ultimoSeleccionadoSegundoGrupo)
            mostrarFilas(ultimoSeleccionadoSegundoGrupo, false);
        mostrarFilas(vue, true);
        ultimoSeleccionadoSegundoGrupo = vue;
    }
}

function reactEventoSegundoGrupo(){
    ocultarTodosLosElementos();
    if(ultimoSeleccionadoSegundoGrupo !== react){
        if(ultimoSeleccionadoPrimerGrupo !== ultimoSeleccionadoSegundoGrupo)
            mostrarFilas(ultimoSeleccionadoSegundoGrupo, false);
        mostrarFilas(react, true);
        ultimoSeleccionadoSegundoGrupo = react;
    }
}

function ionicEventoSegundoGrupo(){
    ocultarTodosLosElementos();
    if(ultimoSeleccionadoSegundoGrupo !== ionic){
        if(ultimoSeleccionadoPrimerGrupo !== ultimoSeleccionadoSegundoGrupo)
            mostrarFilas(ultimoSeleccionadoSegundoGrupo, false);
        mostrarFilas(ionic, true);
        ultimoSeleccionadoSegundoGrupo = ionic;
    }
}


angularbtn2.addEventListener("click", angularEventoSegundoGrupo); 
vuebtn2.addEventListener("click", vueEventoSegundoGrupo);
reactbtn2.addEventListener("click", reactEventoSegundoGrupo);
ionicbtn2.addEventListener("click", ionicEventoSegundoGrupo);


function eventoBotonMostrarTodo(){
    mostrarFilas(angular, true);
    mostrarFilas(vue, true);
    mostrarFilas(react, true);
    mostrarFilas(ionic, true);
    divMostrarTodoOtraVez.setAttribute('class', 'd-none');
    colocadoDivMostrarTodo = false;
}

botonMostrarTodoOtraVez.addEventListener("click", eventoBotonMostrarTodo);
