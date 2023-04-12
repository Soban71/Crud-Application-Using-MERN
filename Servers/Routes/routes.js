import express from 'express'
import {addusers , getUser ,getUsers , EditUsers ,deleteDetail} from '../Controllers/controller.js'

const router=express.Router();



router.post('/add',addusers);
router.get('/getUser',getUser);
router.get('/:id',getUsers);
router.post('/:id',EditUsers);
router.delete(`/:id`,deleteDetail);



export default router; 