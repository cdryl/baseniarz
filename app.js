const axios = require('axios')
const excel = require('excel4node')
const moment = require('moment')

const wb = new excel.Workbook();
const ws = worksheet = wb.addWorksheet('Sheet 1');

const minutes = 1
const time = minutes * 60 * 100

let cellValue = 3

const getData = () => {
  axios.get('http://miejskoaktywni.pl/getdata.php')
    .then(res => {
      const data = Object.values(res.data)
  
      ws.cell(2, 2).string('Basen Włókiennicza')
      ws.cell(2, 3).string('Basen Stroma')
      ws.cell(2, 4).string('Basen Kameralny')
      ws.cell(2, 5).string('Lodowisko')
      ws.cell(2, 7).string('Data')

      ws.cell(cellValue, 2).string(`${data[0]}`)
      ws.cell(cellValue, 3).string(`${data[1]}`)
      ws.cell(cellValue, 4).string(`${data[2]}`)
      ws.cell(cellValue, 5).string(`${data[3]}`)
      ws.cell(cellValue, 7).string(`${moment().format('YYYY-MM-DD HH:mm:ss')}`)
      cellValue++
    })
    .then(() => wb.write('baseniarz.xlsx'))
    .catch(err => {
      console.log(err)
    })
}

getData()

setInterval(() => {
  getData()
}, time)
