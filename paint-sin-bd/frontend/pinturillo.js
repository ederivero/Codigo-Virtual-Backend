const socket = io("http://127.0.0.1:5000");
// setup => funcion que configura el canvas con dimensiones y color de fondo
function setup() {
  createCanvas(300, 300);
  background(100);
  socket.on("coordenadas", (data) => {
    fill(0, 0, 255);
    noStroke();
    ellipse(data.x, data.y, 15, 15);
  });
}
// mouseDragged => solamente se pintara cuando hagamos click
// draw => basta con pasar el cursor por el canvas
function mouseDragged() {
  fill(112, 239, 65);
  noStroke(); // sirve para no bordear el lienzo
  ellipse(mouseX, mouseY, 15, 15);
  enviarPunto(mouseX, mouseY);
}

const enviarPunto = (posX, posY) => {
  console.log(`Posicion x: ${posX}`);
  console.log(`Posicion Y: ${posY}`);
  const data = {
    x: posX,
    y: posY,
  };
  socket.emit("coordenada", data);
};
