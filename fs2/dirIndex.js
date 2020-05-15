const fs = require('fs')

const txtPath = 'all.txt'

function fsRead(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, {
            flag: 'r',
            encoding: 'utf-8'
        }, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

function fsWrite(path, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, content, {
            flag: 'a',
            encoding: 'utf-8'
        }, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve('写入成功')
            }
        })
    })
}

fs.readdir('../fs', (err, files) => {
    if (err) {
        console.log(err)
    } else {
        // console.log(files)

        // files.forEach(async function (item, index) {
        //     let content = await fsRead('../fs/' + item)
        //     // console.log(item)
        //     await fsWrite(txtPath, content)
        //     // console.log(index)
        // })


        async function fsrw(){
            for(let i of files){
                console.log(i)
            let content = await fsRead('../fs/' + i)
            await fsWrite(txtPath,content)
            }
        }
        fsrw()
    }
})