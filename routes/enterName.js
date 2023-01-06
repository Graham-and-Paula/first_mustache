import { Router as router } from 'express';
import { setValue } from '../data/simpleStorage.js';


router.get('/', (request,response) =>
	response.render ('enterName', {pageTitle: "Enter Your Name"})
);

router.post('/submitName', (request, response) => {
	setValue(request.body.userName);
	response.redirect('/displayName');
});

export default router;
