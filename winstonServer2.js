import winston from 'winston'

const console = new  winston.transports.Console()
const file = new winston.transports.File({
  dirname: 'activeLog',
  filename: 'test.log',
});


const logger = winston.createLogger({
  level: 'debug',
  // format: winston.format.simple()
  // format: winston.format.json()
  // format: winston.format.prettyPrint()

  format: winston.format.combine(
    winston.format.label({label: 'debug'}),
    // 先添加时间戳，再序列化， 否则json里没有时间。
    winston.format.timestamp(),
    winston.format.json(),
  )
})

logger.clear()
logger.add(console);
// logger.remove(console);
logger.add(file);


logger.error('errrrrrrrr')
logger.warn('warnnnnnnnn')
logger.info('infooooooo')
logger.debug('debugggg')

