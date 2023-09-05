function saludo() {
    alert("Bienvenido a mi web site con Boostrap y JS");
}

function suma() {
    //Declaramos las variables necesesarias
    let A = 0;
    let B = 0;
    let s = 0;

    //Solicitar los valores
    A = parseInt(prompt("Ingrese el primer valor a sumar: "));
    B = parseInt(prompt("Ingrese el segundo valor a sumar: "));
    
    //Realizamos los procesos
    s = A + B;

    //Monstrar el resultado en pantalla
    alert("El resultado de la suma es: " + s);
    
}

function operaciones() {
    let A = 0;
    let B = 0;
    let S = 0;
    
    A = parseInt(prompt("Ingrese el primer valor a restar: "));
    B = parseInt(prompt("Ingrese el segundo valor a restar: "));
    S = A - B;

    alert("El resultado de la resta es: " + s);
}

function mayor() {
    alert("Algoritmo que determinara el número mayor de los ingresados.")
    let n1 = 0;
    let n2 = 0;
    
    n1 = parseInt(prompt("Ingresar el primer valor: "));
    n2 = parseInt(prompt("Ingresar el segundo valor: "));
    if (n1 == n2) {
        alert("Los números ingresados son iguales.");    
    }
    else if (n1<n2){
        alert("El número 1 es mayor que el número 2" + n1);
    }
    else{
        alert("El número 2 es mayor " + n2);
    }
}


//El colegio ABC requiere un algoritmo o un sistema que permita a los diferentes estudiantes,
//ingresar su nombre, materia y siete calificaciones, y este le indique si aprobo o reprobo la materia 
//teniendo en cuenta que se aprueba que el puntaje es mayor o igual que 6

function ejercicio() {
    let estudiante = 0;
    let materia = 0;
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;
    let n5 = 0;
    let n6 = 0;
    let n7 = 0;
    let nf = 0; 
   
    estudiante = (prompt("Ingrese su nombre: "));
    materia = (prompt("Ingrese la materia a calificar: "));
    n1 = parseInt(prompt("Ingrese la primera calificación: "));
    n2 = parseInt(prompt("Ingrese la segunda calificación: "));
    n3 = parseInt(prompt("Ingrese la tercera calificación: "));
    n4 = parseInt(prompt("Ingrese la cuarta calificación: "));
    n5 = parseInt(prompt("Ingrese la quinta calificación: "));
    n6 = parseInt(prompt("Ingrese la sexta calificación: "));
    n7 = parseInt(prompt("Ingrese la septima calificación: "));
    
    nf = (n1+n2+n3+n4+n5+n6+n7)/7;
    
    
    if (nf >= 6){
        alert("El estudiante aprobo la materia con nota final de: " + nf );
    }
    else if (nf <= 6){
        alert ("El estudiante reprobo la materia con: " + nf);
    }
    else {
        alert ("Ingreso de datos incorrecto");
    }

    alert("El resultado final es: Nombre "+ estudiante + "Materia" + materia + "Nota final" + nf);
}

//Se requiere un algoritmo que al ingresar el valor en dolares nos indique a cuantos pesos colombianos equivale, 
//euros y soles

function conversion() {
    let b1 = 0
    let b2 = 0

    prompt ()

    sol = 3.72
    euros = 0.92
    
}

function panellateral(){
    const panel = document.getElementById("panel-lateral");
    panel.classList.toggle("active");
}

function circulo(){
    //capturamos en una constnte el elemento html
    //que deseeamos manipular
    const figura = document.getElementById("figura");
    figura.classList.toggle("circulo");
}
function Rombo(){
    const figura = document.getElementById("figura");
    figura.classList.toggle("Rombo");
}
function Triangulo(){
    const figura = document.getElementById("figura");
    figura.classList.toggle("Triangulo");
}

function hor(){
    const figura = document.getElementById("figura");
    figura.classList.toggle("hor");
}

function ver(){
    const figura = document.getElementById("figura");
    figura.classList.toggle("ver");
}

function moveTop(){
    const figura = document.querySelector("#figura");
    figura.classList.toggle("top");
}

function moveButton(){
    const figura = document.querySelector("#figura");
    figura.classList.toggle("Button");
}

function moveRight(){
    const figura = document.querySelector("#figura");
    figura.classList.toggle("Right")
}

function moveLeft(){
    const figura = document.querySelector("#figura");
    figura.classList.toggle("Left")
}

function Gif(){
    const figura = document.getElementById("figura");
    figura.classList.toggle("Gif")
}

function Degradado(){
    const figura = document.getElementById("figura");
    figura.classList.toggle("Degradado")
}