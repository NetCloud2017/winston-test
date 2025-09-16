import winston from 'winston'

const console = new  winston.transports.Console()
const file = new winston.transports.File({
  dirname: 'activeLog',
  filename: 'test.log',
});


const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.simple()
})

logger.clear()
logger.add(console);
// logger.remove(console);
logger.add(file);


logger.error('errrrrrrrr')
logger.warn('warnnnnnnnn')
logger.info('infooooooo')
logger.debug('debugggg')

