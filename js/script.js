
// AQUI HACEMOS EL ARRAY DE LAS FRUTAS, CON SUS OPCIONES (OBJETO)
const imagenes = [
    { nombre: "Platano", url: "./img/platano.jpg", descripcion: "El plátano es una fruta tropical procedente de la planta herbácea que recibe el mismo nombre o banano." },
    { nombre: "Fresa", url: "./img/fresa.jpg", descripcion: "La fresa es una fruta de forma cónica o casi redonda, de tamaño variable según la especie (de 15 a 22 mm de diámetro), coronada por sépalos verdes, de color rojo y con un sabor que varía de ácido a muy dulce." },
    { nombre: "Mango", url: "./img/mango.jpg", descripcion: "El mango es una fruta tropical de pulpa jugosa y dulce que se encuentra en una variedad de colores, como amarillo, naranja y rojo." }
];
  
// AQUI LLAMAMOS AL PANEL, IMAGEN Y INFORMACIONES ADICIONALES AL OBJETO.
const panel = document.getElementById("panel");
const imagenElement = document.getElementById("imagen");
const descripcion = document.getElementById("descripcion");

const errorNoNombre = "No has introducido el nombre de la fruta.";
const errorNoEncontrada = "Fruta no encontrada.";
  
// TIRAMOS EL PROMPT PARA ESCOGER LA FRUTA.
const buscarFruta = function() {
  const busqueda = prompt("Ingrese el nombre de la fruta a buscar (fresa, plátano, mango):").trim();

  // SI LA FRUTA EXISTE, NOS FACILITA IMAGEN & INFORMACION DE DICHO OBJETO
  if (busqueda) {
    const frutaEncontrada = imagenes.find(function(fruta) {
      return fruta.nombre.toLowerCase() === busqueda.toLowerCase();
    });

    if (frutaEncontrada) {
      imagenElement.src = frutaEncontrada.url;
      imagenElement.alt = frutaEncontrada.nombre;
      imagenElement.hidden = false;
      descripcion.textContent = frutaEncontrada.descripcion;
    } else {
      imagenElement.hidden = true;
      descripcion.textContent = errorNoEncontrada;
      alert(errorNoEncontrada);
    }
  }else{
    imagenElement.hidden = true;
    descripcion.textContent = errorNoNombre;
    alert(errorNoNombre);
  }
};
  
buscarFruta();