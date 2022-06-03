const ClientReposiroty = require("../use_cases/reposiotory/client_repository");
let _clientReposiroty = null

class ClientController {
  constructor() {
    _clientReposiroty = new ClientReposiroty();
  }

  async getAll(req, res) {
    let clients = await _clientReposiroty.getAll();
    return res.send(clients)
  }

  async getById(req, res) {
    const { id } = req.params;
    let client = await _clientReposiroty.getById(id);
    return res.send(client)
  }

  async create(req, res) {
    const { name } = req.body;
    let client = await _clientReposiroty.create({name});
    return res.status(200).json(client)
  }

  async update(req, res) {
    const { name,id } = req.body;
    await _clientReposiroty.update({name},id);
    return res.status(200).json({status:"client updated"})
  }

  async delete(req, res) {
    const { id } = req.params;
    await _clientReposiroty.delete(id);
    return res.status(200).json({status:"client deleted"})
  }
}

module.exports = ClientController
