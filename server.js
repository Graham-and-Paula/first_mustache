import { log as print} from 'node:console';
import express from 'express';
import read from './utils/read_data.js';

const ROUTES = ['index', 'portofolio', 'blog', 'contact'];
const {domain, port} = read('settings');
const app = express();

app.use(
	express.static(`./public`)
);

for (const route of ROUTES) {
	const {default: router} = await import(`./routes/${ route }.js`);
	app.use(router);
}

app.listen(
	port,
	() => print(`Server started ${ domain }:${ port }`)
);

