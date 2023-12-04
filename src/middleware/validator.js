const Joi = require("joi");
const { ParameterError } = require("../errors/client-error.js");

module.exports = function (schema) {
  return async (ctx, next) => {
    try {
      const object = ctx.method === "POST" ? ctx.request.body : ctx.query;
      await Joi.object(schema).validateAsync(object || {}); // 防止空时报错
    } catch (error) {
      // 未定义错误信息时，Joi抛出内置错误提示
      throw new ParameterError();
    }
    await next();
  };
};
