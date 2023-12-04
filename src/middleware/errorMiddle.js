const {
  InvalidRequestError,
  RouteNotFoundError,
} = require("../errors/client-error.js");

module.exports = function () {
  return async (ctx, next) => {
    try {
      await next();
      if (ctx.status === 404) throw new RouteNotFoundError();
      if (ctx.status === 405) throw new InvalidRequestError();
    } catch (error) {
      console.log("errorMiddle", error);
      // 错误日志
      // ......记录错误详细信息
      // 错误码响应
      const code = error.code || error.status;
      const message = code && error.message ? error.message : "未知错误";
      ctx.body = { code: code || 500, message };
    }
  };
};
