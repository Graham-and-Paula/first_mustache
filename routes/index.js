import { Router as router } from 'express';
//import { getValue } from '../data/simpleStorage.js';

const router = Router();
const page_title = "Home Page"

router.get(
	'/',
	(_,res) => {
		res.render ('index.html',
		{ page_title }
		)
	}
);

export default router;


