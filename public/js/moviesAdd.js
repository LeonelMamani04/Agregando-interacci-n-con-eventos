window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let input = document.querySelector("#titulo");

    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    
    input.addEventListener("keyup", (e) => {
        let estado = 0;
        switch  (this.estado) {
            case 0:
              this.estado = key === "s" ? 1 : 0;
              break;
            case 1:
              this.estado = key === "e" ? 2 : 0;
              break;
            case 2:
              this.estado = key === "c" ? 3 : 0;
              break;
            case 3:
              this.estado = key === "r" ? 4 : 0;
              break;
            case 4:
              this.estado = key === "e" ? 5 : 0;
              break;
            case 5:
              this.estado = key === "t" ? 6 : 0;
              break;
            case 6:
              if (key === "o") {
                alert("SECRETO MÁGICO");
              } else {
                this.estado = 0;
              }
              break;
            default:
              break;
          }
        }
    );


}