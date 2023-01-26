function ComprobarClave(){
    var Pass1 = document.getElementById("Pass1").value;
    var Pass2 = document.getElementById("Pass2").value;

    if (Pass1 == Pass2) {
       alert("Las dos claves son iguales...") 
    }
    else {
       alert("Las dos claves son distintas...")
    } 
}
