var identificacion = prompt("Hola, por favor, ingresa tu identificacion")
var edad = prompt("Agradecemos ingreses tu edad");
parseInt(edad)
const IDCODE = "0";

console.log(typeof(identificacion));

if(identificacion==""){
    alert("No se ingresó la identificacion solicitada");
}
else{
    alert("Tu codigo de ingreso es: "+identificacion+IDCODE);
}

if(edad>=18){
    alert("Bienvenido, puedes visitar la página");
}
else{
    alert("¡Hola! Necesitas supervisión mientras visitas esta página");
}