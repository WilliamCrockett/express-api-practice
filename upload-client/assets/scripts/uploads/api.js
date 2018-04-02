'use strict'

const createEnc = function (data) {
  return $.ajax({
    // ajax options go here
  })
}

const createMulti = function (formData) {
  return $.ajax({
    url: 'http://localhost:4741/uploads',
    method: 'POST',
    // headers: {
    //   contentType: 'multipart/form-data'
    // },
    contentType: false,
    processData: false,
    data: formData
  })
}

module.exports = {
  createEnc,
  createMulti
}
