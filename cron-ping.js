const cron = require('node-cron')

const createExcel = require('./createExcel')

createExcel()

cron.schedule('*/30 * * * *', function() {
  createExcel()
});
