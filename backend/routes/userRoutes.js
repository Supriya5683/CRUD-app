import {Router} from 'express';

const userRouter = Router();
import { signup, login, getCurrentUser, logout } from '../function/User.js';

userRouter.post('/login', login);
userRouter.post('/signup', signup);
userRouter.get('/profile', getCurrentUser);
userRouter.post('/logout', logout);

export default userRouter;