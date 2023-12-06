const Spaceship = require("../models/Spaceship");
const Cap = require("../models/Cap");

module.exports = {
  async store(req, res) {
    const { capId } = req.params;
    const { name, capacity } = req.body;

    const cap = await Cap.findByPk(capId);

    if (!cap) {
      res.send("Error, this cap does not exist!");
    }

    const [spaceships] = await Spaceship.findOrCreate({
      where: { name, capacity },
    });

    await cap.addSpaceship(spaceships);

    return res.json(spaceships);
  },
  async index(req, res) {
    const { capId } = req.params;

    const cap = await Cap.findByPk(capId, {
      include: { association: "spaceships" },
    });

    return res.json(cap);
  },
};
