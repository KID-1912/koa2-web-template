const path = require("path");
require("dotenv").config({ path: `./.env.${process.env.NODE_ENV}` });
const Koa = require("koa");
const router = require("./router/index.js");
const { koaBody } = require("koa-body");
const errorMiddleware = require("./middleware/errorMiddle.js");
const static = require("koa-static");
const cors = require("koa2-cors");

const isProduction = process.env.NODE_ENV === "production";

const app = new Koa();
app.use(errorMiddleware());
!isProduction && app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(koaBody());
const webRoot = path.join(process.cwd(), "web");
app.use(static(webRoot));
app.listen(3000, () => console.log("server is running"));
