const { Router } = require("express");
const router = Router();
const ClientController = require("../controllers/clientController")

let clientController = new ClientController();

router.get('/',clientController.getAll)
router.get('/:id',clientController.getById)
router.post('/',clientController.create)
router.delete('/:id',clientController.delete)
router.put('/update',clientController.update)

module.exports = router