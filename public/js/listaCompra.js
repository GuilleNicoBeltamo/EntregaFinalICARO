function addElement(Nombre,Descrip,Prec,Id) {
  // crea un nuevo div y añade contenido
  var Div1 = document.createElement("div");
  Div1.className="productoSeleccionado"; 
  var Img = document.createElement("img");
  Img.src=`/assets/Imag${Id}.jpg`
  //--------------//
  var Div1_1 = document.createElement("div");
  Div1_1.className="nameAndDesc";
  var nombreDelServicio = document.createElement("h3");
  nombreDelServicio.innerHTML=Nombre;
  nombreDelServicio.className="nombreEnCuestion"
  var descr = document.createTextNode(Descrip);
  Div1_1.appendChild(nombreDelServicio);
  Div1_1.appendChild(descr);
  //--------------//
  var Div1_2 = document.createElement("div");
  Div1_2.className="contador";
  var quitaONo = document.createElement("button");
  quitaONo.innerHTML = '¿Quitar?';
  quitaONo.className="arrepentimiento";
  Div1_2.appendChild(quitaONo);
  //--------------//
  var Div1_3 = document.createElement("div");
  Div1_3.className="precio";
  var precio = document.createElement("p");
  precio.innerHTML=`$ ${Prec}`;
  Div1_3.appendChild(precio);
  Div1.appendChild(Img);
  Div1.appendChild(Div1_1);
  Div1.appendChild(Div1_2);
  Div1.appendChild(Div1_3);
  // añade el elemento creado y su contenido al DOM
  let Primero = document.getElementById("Primero");
  let parentDiv = Primero.parentNode;
  parentDiv.insertBefore(Div1, Primero);
}

var archive = [];
var obj = [];

var totalPrice = 0;
if (localStorage.length != 0){
  for (var i = 0; i<localStorage.length; i++) {
      archive[i] = localStorage.getItem(localStorage.key(i));
      obj[i] = JSON.parse(archive[i]); 
      //console.log(obj[i])
      addElement(obj[i].name,obj[i].desc,obj[i].price,obj[i].id);
      totalPrice = totalPrice + Number(obj[i].price);
      console.log(totalPrice)
  }
}
else {
  var Nada = document.createElement("h1");
  Nada.innerHTML="No tienes ítem seleccionados";
  Nada.align = "center"
  let Primero = document.getElementById("Primero");
  let parentDiv = Primero.parentNode;
  parentDiv.insertBefore(Nada, Primero);
}
IDAPagar = document.getElementById("WAWAW");
IDAPagar.innerHTML=String(`Total a pagar: $ ${totalPrice}`);

Borrados = document.getElementsByClassName("nombreEnCuestion");
const arrepentimientoButton = document.getElementsByClassName("arrepentimiento");
for (let i = 0; i < arrepentimientoButton.length; i++) {
  arrepentimientoButton[i].addEventListener("click", function(event) {
  event.preventDefault();
  Borrado = Borrados[i];
  console.log("esto anda?")
  console.log("A quien quiero borrar?", Borrado.textContent);
  for (let k = 0; k<localStorage.length; k++) {
    console.log("contador", k)
    if (Borrado.textContent === obj[k].name) {
      console.log("Encontrado!")
      console.log("A quien encontré?", obj[k].name)
      console.log("Numero", k)
      console.log(localStorage.getItem(localStorage.key(k)))
      localStorage.removeItem(localStorage.key(k));
      window.location.reload();
      console.log("El que borre", obj[k].name);
    }
  }
  });
};