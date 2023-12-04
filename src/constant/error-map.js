module.exports = {
  INVALID_REQUEST_ERROR: { code: 405, message: "无效请求" },
  ROUTE_NOT_FOUND_ERROR: { code: 404, message: "路由未找到" },
  PARAM_ERROR: { code: 400, message: "参数错误" },
  USER_LOGIN_ERROR: { code: 1001, message: "用户名或密码错误" },
  USER_AUTH_ERROR: { code: 1002, message: "未登录" },
  USER_TOKEN_EXPIRED: { code: 1003, message: "登录过期" },
};
