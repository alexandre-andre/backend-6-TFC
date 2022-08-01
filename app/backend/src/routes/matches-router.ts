import { Router } from 'express';

import MatchesController from '../controller/matches-controller';

const matchesRouters = Router();

const matchesController = new MatchesController();

matchesRouters.get('/');

export default matchesRouters;
