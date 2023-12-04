const Router = require("koa-router");
const router = new Router();
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const validator = require("../middleware/validator.js");
const { USER_LOGIN_ERROR } = require("../constant/error-map.js");
const { BusinessLogicError } = require("../errors/application-error.js");

router.post(
  "/login",
  validator({
    name: Joi.string().required(),
    password: Joi.string().required(),
  }),
  async (ctx, next) => {
    const { name, password } = ctx.request.body;
    // 查询账号信息
    const user = await userService.findUser({ userName: name });

    // 验证password
    if (!user || !bcrypt.compareSync(password, user.password))
      throw new BusinessLogicError(USER_LOGIN_ERROR); // 用户不存在或密码错误

    // token，包含除密码外所有用户信息组成的json
    const { password: p, ...userCrypt } = user;
    const token = jsonwebtoken.sign(
      { user: userCrypt },
      process.env.JWT_SECRET, // token加密密钥
      { expiresIn: "2h" }
    );
    ctx.body = { code: 200, token };
    await next();
  }
);

module.exports = router;
