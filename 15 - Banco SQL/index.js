(async () => {
  const Planet = require("./models/Planet");

  const newPlanet = await Planet.create({
    name: "Vênus",
    position: 5,
  });
  console.log(newPlanet);
})();
