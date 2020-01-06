import { Universe } from "wasm-game-of-life";

// Get canvas element.
const pre = document.getElementById("game-of-life-canvas");

// Instantiate the universe.
const universe = Universe.new();

const renderLoop = () => {
  pre.textContent = universe.render();
  universe.tick();

  requestAnimationFrame(renderLoop);
};

requestAnimationFrame(renderLoop);
