function datosEdad(elEvento){
    elEvento.preventDefault();

    var NOMBRE = document.querySelector("#NOMBRE").value;
    var AÑO  = document.querySelector("#AÑO").value;

    var bienvenida =document.querySelector("#bienvenida");

   if(AÑO >= 2006){

        bienvenida.innerHTML = "Hola niñ@ " + NOMBRE;

    }else if(AÑO >= 2003){
        bienvenida.innerHTML = "Hola joven  " + NOMBRE ;

    }else {
        bienvenida.innerHTML = "Hola Señor@  " + NOMBRE ;
    }
}

var formulario = document.querySelector("#formulario");
formulario.addEventListener("submit",datosEdad);

