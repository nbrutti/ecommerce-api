import express from 'express';
import SessionController from '../controllers/SessionController';

const router = express.Router();

router
  .post('/sessions/validate-token', SessionController.validateToken);

export default router;