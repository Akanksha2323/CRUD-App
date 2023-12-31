import  express  from "express";
const router = express.Router()
import StudentController from "../Controllers/StudentController.js"

router.get('/' ,StudentController.getAllDoc)
router.post('/' ,StudentController.createDoc)
router.get('/edit/:id', StudentController.editDoc)
router.post('/update/:id', StudentController.updateDocId)
router.post('/delete/:id', StudentController.deleteDocId)


export default router