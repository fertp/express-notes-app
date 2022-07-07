const fs = require('fs')

const writeFile = (fileName, data) => {
  try {
    fs.writeFileSync(fileName, JSON.stringify(data))
    return true
  } catch (e) {
    console.log(e)
    return false
  } 
}


module.exports = {
  writeFile
}