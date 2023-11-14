import Router from '@koa/router';
import Koa from 'koa';

const router = new Router();
const app = new Koa({proxy: true});

app.use(async ctx => {
	ctx.body = 'Hello World';
});

app.listen(3000);
