const { Router } = require("express");
const router = Router();
const DirectionController = require("../controllers/directionController")

let directionController = new DirectionController();

router.get('/',directionController.getAll)
router.get('/:id',directionController.getById)
router.get('/client/:client_id',directionController.getByClientId)
router.post('/',directionController.create)
router.delete('/:id',directionController.delete)
router.delete('/all/:client_id',directionController.deleteAllFromOneClient)
router.put('/update',directionController.update)

module.exports = router