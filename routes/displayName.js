import { Router as router } from 'express';
import { getValue } from '../data/simpleStorage.js';


router.get('/displayName', (request,response) => {
	let userName = getValue();
	response.render ('displayName',
		{
		pageTitle: "Your Name Display",
		userName: userName
		});
	});

export default router;


