import winston from "winston";
import "winston-daily-rotate-file"

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
    // 传输文件
    // new winston.transports.File({
    //   dirname: 'log', filename: 'test.log', maxsize: 1024
    // })

    // 按日期滚动
    // new winston.transports.DailyRotateFile({
    //   level: 'info',
    //   dirname: 'log2',
    //   filename: 'test-%DATE%.log',
    //   datePattern: 'YYYY-MM-DD-HH-mm',
    //   maxSize: '1k'
    // })
    
    new winston.transports.Http({
      host: 'localhost',
      port: '3000',
      path: '/log'
    })
  ]
})
logger.debug('dddddebug, debug')
logger.error('error, error')
logger.warn('warn nwwwww')
