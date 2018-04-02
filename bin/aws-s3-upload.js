'use strict'

const Upload = require('app/models/upload')
const mongoose = require('app/middleware/mongoose')
const s3Upload = require('lib/aws-upload')
const mime = require('mime-types')

const file = {
  path: process.argv[2],
  originalname: process.argv[2],
  name: process.argv[3],
  mimetype: mime.lookup(process.argv[2])
}

// file.mimetype = mime.lookup(file.path)

s3Upload(file)
.then((s3Response) => {
  console.log('s3Respone is ', s3Response)
  return s3Response
})
.then((s3Response) => Upload.create({
  url: s3Response.Location,
  title: file.name
}))
.then((upload) => {
  console.log('upload is ', upload)
  return upload
})
.catch(console.error)
.then(() => mongoose.connection.close())
