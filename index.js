const jsonserver=require("json-serve");
const server=jsonserver.create();
const router=jsonserver.router("db.json");
let port=process.env.port||3001;
let middlewares=jsonserver.defaults();
 server.use(middlewares)
 server.use(router)
 server.listen(port)