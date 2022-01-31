const axios = require('axios')

axios.get('http://miejskoaktywni.pl/getdata.php')
  .then(res => {
    const arr = Object.values(res.data)
    const obj = {
      'Basen Włókiennicza': arr[0],
      'Basen Stroma': arr[1],
      'Basen Kameralny': arr[2],
      'Lodowisko': arr[3]
    }
    console.log(obj)
  })
  .catch(err => {
    console.log(err)
  })
