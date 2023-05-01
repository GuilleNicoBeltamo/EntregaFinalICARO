  const address = fetch("http://localhost:8000/API")
    .then((response) => response.json())
    .then((user) => {
      return user;
    });
  
  const printAddress = () => {
      address.then((a) => {
      console.log(a)
      const carritoIcon = document.getElementsByClassName("buttonCarrito");
      const bc = new Array(carritoIcon.length).fill(0);

        for (let i = 0; i < carritoIcon.length; i++) {
          carritoIcon[i].addEventListener("click", function(event) {
          event.preventDefault();
          if (bc[i] === 0){
              carritoIcon[i].style.backgroundColor = "#2F6673";
              bc[i]=1;
              let item = {
                  id: i,
                  name: a[i].name,
                  desc: a[i].desc,
                  price: a[i].price,
                };
                localStorage.setItem(i, JSON.stringify(item));
          } else {
              carritoIcon[i].style.backgroundColor = "#0F4040";
              bc[i]=0;
              localStorage.removeItem(i);
          }
          console.log("Seleccionado servicio ",i);
          });
      };
    });
  };
