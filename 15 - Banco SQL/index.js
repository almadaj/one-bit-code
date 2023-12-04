const { where } = require("sequelize");

(async () => {
  const Planet = require("./models/Planet");
  CREATE;
  const newPlanet = await Planet.create({
    name: "Vênus",
    position: 5,
  });

  //READ
  // const seePlanets = await Planet.findAll({
  //   where: {
  //     name: "Terra",
  //   },
  // });

  //UPDATE
  // const updatePlanets = await Planet.findByPk(2);
  // updatePlanets.name = "Saturno";

  // await updatePlanets.save();

  //DELETE
  // const deletePlanets = await Planet.findByPk(2);

  // await deletePlanets.destroy();

  // console.log(deletePlanets);
})();
