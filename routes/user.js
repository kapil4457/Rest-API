import express from 'express';
const router = express.Router();
import {createUser ,getUsers,getUser,deleteUser,UpdateUser} from '../controllers/users.js'

router.get('/',getUsers)
router.post('/',createUser);
router.get('/:id' , getUser);
router.delete("/:id", deleteUser);
router.delete("/:id", UpdateUser);

router.patch('/:id',UpdateUser)

export default router;