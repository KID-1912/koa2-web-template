const path = require("path");
const winston = require("winston");
const format = winston.format;
const DailyRotateFile = require("winston-daily-rotate-file");
const logsPath = path.join(process.cwd(), "logs");

const logger = winston.createLogger({
  level: "info",
  levels: format.levels,
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), // 添加时间戳
    winston.format.json() // 将日志格式化为JSON
  ),
  transports: [
    new DailyRotateFile({
      filename: path.join(logsPath, "logs-%DATE%.log"),
      datePattern: "YYYYMMDD",
      zippedArchive: true,
      maxFiles: "30d", // 最大保留时长为30天
    }),
  ],
});

if (process.env.NODE_ENV === "development") {
  logger.clear();
  logger.add(new winston.transports.Console());
}

module.exports = logger;
