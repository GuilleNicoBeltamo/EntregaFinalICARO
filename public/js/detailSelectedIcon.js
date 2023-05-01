  const address = fetch("http://localhost:8000/API")
    .then((response) => response.json())
    .then((user) => {
      return user;
    });
  
  const LoadColor = () => {
    address.then((a) => {
      const Nombre = document.getElementById("name");
      const button = document.getElementById("button");
      const Icono = document.getElementById("carritoIcon");
      for(var i = 0; i < localStorage.length; i++){
        let clave = localStorage.key(i);
        let servicio = JSON.parse(localStorage.getItem(clave));
        if(servicio.name == Nombre.innerText){
          button.style.backgroundColor = "#2F6673";
          Icono.src = "/assets/remove-cart.svg"
        }
      }
    });
  }
  LoadColor();
  
  const pressCart = () => {  
      address.then((a) => {
        const Nombre = document.getElementById("name");
        const button = document.getElementById("button");
        const Icono = document.getElementById("carritoIcon");
        const IDServicio = document.getElementById("Identificador");

        for(var i = 0; i < a.length; i++){
          //console.log(i, a[i].name)
          if(a[i].name === Nombre.innerText) {
            KeyParaGuardar = i
          }
        }
        button.addEventListener("click", function(event) {
          event.preventDefault();
          for(var i = 0; i < localStorage.length; i++){
            let clave = localStorage.key(i);
            let servicio = JSON.parse(localStorage.getItem(clave));
            if(servicio.name === Nombre.innerText){
              console.log("Esta, por lo tanto lo retiro")
              console.log("Lo que busco", Nombre.innerText)
              console.log("lo que encontré", servicio.name)
              console.log("clave a borrar", Number(clave), Number(IDServicio.innerHTML))
              button.style.backgroundColor = "#0F4040";
              Icono.src = "/assets/add-cart.svg"
              localStorage.removeItem(Number(clave));
              return
            }
          }
          for(var i = 0; i < a.length; i++){
            if(a[i].name === Nombre.innerText){
              console.log("Como no está, lo agrego")
              console.log("Lo que quiero agregar", Nombre.innerText)
              console.log("lo que agregaría", a[i].name)
              button.style.backgroundColor = "#2F6673";
              Icono.src = "/assets/remove-cart.svg"
              let item = {
                  id: a[i].id,
                  name: a[i].name,
                  desc: a[i].desc,
                  price: a[i].price,
                };
                localStorage.setItem(Number(KeyParaGuardar), JSON.stringify(item));
            }
          }
        });
    });
  };
  pressCart();