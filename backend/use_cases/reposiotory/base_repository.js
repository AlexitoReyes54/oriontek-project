class BaseRepository {
    
    constructor(repository) {
        this.repository = repository;
      }


    async getById(id) {
        try {
            let entity = await this.repository.findAll({ where: {id} })
            if (entity.length == 0) {
                return {"error":"client doesn't exist"}
            }else{
                return JSON.stringify(entity)
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            return JSON.stringify(await this.repository.findAll())
        } catch (error) {
            console.log(error);
        }
    }

    async create(entity) {
        try { 
            return JSON.stringify(await this.repository.create(entity))
        } catch (error) {
            console.log(error);
        }
    }

    async update(entity,id) {
        try {
            await this.repository.update(entity, { where: {id} });
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id) {
        try {
            await this.repository.destroy( { where: {id} });
        } catch (error) {
            console.log(error);
        }
    }


}

module.exports= BaseRepository