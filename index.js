const config = require('./src/config');
const app = require('./src');
const logger = require('pino')();

app.listen(config.port, () => {
  logger.info({ msg: `Server running on port ${config.port}` })
});
