const BaseRepository = require("./base_repository");
const Client = require("../../interfaces/db/models/client")

class ClientReposiroty extends BaseRepository{
    constructor(){
        super(Client);
    }
}

module.exports = ClientReposiroty

