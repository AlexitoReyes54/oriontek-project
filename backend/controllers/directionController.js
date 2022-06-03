const DirectionReposiroty = require("../use_cases/reposiotory/direction_repository");
let _directionReposiroty = null

class DirectionController {
  constructor() {
    _directionReposiroty = new DirectionReposiroty();
  }

  async getAll(req, res) {
    let directions = await _directionReposiroty.getAll();
    return res.send(directions)
  }

  async getById(req, res) {
    const { id } = req.params;
    let directions = await _directionReposiroty.getById(id);
    return res.send(directions)
  }

  async getByClientId(req, res) {
    const { client_id } = req.params;
    let directions = await _directionReposiroty.getByClientId(client_id);
    return res.send(directions)
  }

  async create(req, res) {
    const { street,postal_code,client_id } = req.body;
    await _directionReposiroty.create({street,postal_code,client_id});
    return res.status(200).json({status:"direction created"})
  }

  async update(req, res) {
    const { street,postal_code,client_id,id } = req.body;
    await _directionReposiroty.update({street,postal_code,client_id},id);
    return res.status(200).json({status:"direction updated"})
  }

  async delete(req, res) {
    const { id } = req.params;
    await _directionReposiroty.delete(id);
    return res.status(200).json({status:"direction deleted"})
  }

  async deleteAllFromOneClient(req, res) {
    const { client_id } = req.params;
    await _directionReposiroty.deleteAllFromOneClient(client_id);
    return res.status(200).json({status:"directions deleted"})
  }

}

module.exports = DirectionController
