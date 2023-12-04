// token鉴权中间件
const jwt = require("jsonwebtoken");
const {
  USER_AUTH_ERROR,
  USER_TOKEN_EXPIRED,
} = require("../constant/error-map.js");
const {
  AuthError,
  BusinessLogicError,
} = require("../errors/application-error.js");
// const userService = require("../services/UserService.js");

module.exports = function () {
  return async (ctx, next) => {
    const token = ctx.headers.authorization;
    // 校验token
    if (!token) throw new AuthError(USER_AUTH_ERROR);
    try {
      const { user } = jwt.verify(token, process.env.JWT_SECRET);
      // const userInfo = await userService.findUser({ id: user.id });
      if (!userInfo) throw new BusinessLogicError("不存在的用户");
      ctx.state.user = user;
    } catch (error) {
      console.log("error in auth :", error);
      throw new AuthError(USER_TOKEN_EXPIRED); // 校验失败，无效的token
    }
    await next();
  };
};
