const pagination = require("koa-pagination-v2");

module.exports = paginator({
  defaultLimit: 20, // 控制默认单页条数20条，默认值为10
  maximumLimit: 100, // 控制最大支持每页100条，默认值为50
  limitField: "pageSize", // 控制每页条数的参数名，默认值为"pageNumber"
  pageField: "pageIndex", // 控制页码的参数名，默认值为"pageIndex"
});
