const socket = io("http://127.0.0.1:5000");
// setup => funcion que configura el canvas con dimensiones y color de fondo
function setup() {
  createCanvas(300, 300);
  background(100);
  socket.on("coordenadas", (data) => {
    data.forEach((registro) => {
      registro.coordenadas.forEach((coordenada) => {
        fill(registro.color);
        noStroke();
        ellipse(
          coordenada.x.$numberDecimal,
          coordenada.y.$numberDecimal,
          15,
          15
        );
      });
    });
  });
}
// mouseDragged => solamente se pintara cuando hagamos click
// draw => basta con pasar el cursor por el canvas
function mouseDragged() {
  fill("#00000");
  noStroke(); // sirve para no bordear el lienzo
  ellipse(mouseX, mouseY, 15, 15);
  enviarPunto(mouseX, mouseY);
}

const enviarPunto = (posX, posY) => {
  // console.log(`Posicion x: ${posX}`);
  // console.log(`Posicion Y: ${posY}`);
  const data = {
    x: posX,
    y: posY,
  };
  socket.emit("coordenada", data);
};
