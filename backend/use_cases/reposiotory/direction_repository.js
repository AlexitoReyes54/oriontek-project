const BaseRepository = require("./base_repository");
const Direction = require("../../interfaces/db/models/direction")

class DirectionReposiroty extends BaseRepository{
    constructor(){
        super(Direction);
    }

    async getByClientId(client_id){
        try {
            let entity = await Direction.findAll({ where: {client_id} })
            if (entity.length == 0) {
                return {"error":"client doesn't have any directions"}
            }else{
                return JSON.stringify(entity)
            }
        } catch (error) {
            console.log(error);
        }
    }

    async deleteAllFromOneClient(client_id) {
        try {
            await Direction.destroy( { where: {client_id} });
        } catch (error) {
            console.log(error);
        }
    }
}


module.exports = DirectionReposiroty

