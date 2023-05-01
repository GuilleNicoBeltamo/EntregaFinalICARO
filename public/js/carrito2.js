  const address = fetch("http://localhost:8000/API")
    .then((response) => response.json())
    .then((user) => {
      return user;
    });
  
const LoadColor = () => {
    const carritoIcon = document.getElementsByClassName("buttonCarrito");
    const Icono = document.getElementsByClassName("carritoIcon");
    for (let i = 0; i < carritoIcon.length; i++) {
      if (localStorage.getItem(i) != null){
          carritoIcon[i].style.backgroundColor = "#2F6673";
          //carritoText[i].innerText = "Quitar del carrito";
          Icono[i].src = "/assets/remove-cart.svg"

      } else {
          carritoIcon[i].style.backgroundColor = "#0F4040";
          //carritoText[i].innerText = "Agregar del carrito"
          Icono[i].src = "/assets/add-cart.svg"
      }
    };
  }
  LoadColor();

  const printAddress = () => {
      address.then((a) => {
      //console.log(a)
      //const carritoText = document.getElementsByClassName("textoCarrito");
      const carritoIcon = document.getElementsByClassName("buttonCarrito");
      const Icono = document.getElementsByClassName("carritoIcon");
        for (let i = 0; i < carritoIcon.length; i++) {
          carritoIcon[i].addEventListener("click", function(event) {
          event.preventDefault();
          if (localStorage.getItem(i) == null){ // Seleccion ON
              carritoIcon[i].style.backgroundColor = "#2F6673";
              //carritoText[i].innerText = "Quitar del carrito"
              Icono[i].src = "/assets/remove-cart.svg"
              let item = {
                  id: a[i].id,
                  name: a[i].name,
                  desc: a[i].desc,
                  price: a[i].price,
                };
                localStorage.setItem(i, JSON.stringify(item));
          } else { // Seleccion OFF
              carritoIcon[i].style.backgroundColor = "#0F4040";
              //carritoText[i].innerText = "Agregar del carrito"
              Icono[i].src = "/assets/add-cart.svg"
              localStorage.removeItem(i);
          }
          //console.log("Seleccionado servicio ",i);
          });
      };
    });
  };
printAddress();
