const Router = require("koa-router");
const authMiddleware = require("../middleware/auth.js");
const loginRouter = require("./login-router.js");

const whiteList = ["/admin/login"]; // 鉴权白名单
const adminRouter = new Router({ prefix: "/admin" })
  .use(async (ctx, next) => {
    if (whiteList.includes(ctx.request.path)) {
      await next();
      return;
    }
    await authMiddleware()(ctx, next);
  })
  .use(loginRouter.routes());

module.exports = adminRouter;
