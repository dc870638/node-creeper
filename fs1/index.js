const fs = require('fs')

fs.readdir('../fs1',function(err,files){
    console.log(files)
})