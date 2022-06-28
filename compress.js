const fs = require('fs')
const sharp = require('sharp')

const images = fs.readdirSync('input_images/')

const run = async () => {
    console.log('start')
    for (const image of images) {
        console.log('processing', image)
        await sharp(`input_images/${image}`).png({compressionLevel: 9, quality: 90}).toFile(`output_images/${image}`)
    }
}

run()
