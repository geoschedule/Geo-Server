// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');

// Creates a client
const storage = new Storage();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
const bucketName = 'hatterhack';
const filename = '../android16L.jpg';

// Uploads a local file to the bucket
const send = async(filename, bucketName) => 
{
    try{
    storage.bucket(bucketName).upload(filename, {
  // Support for HTTP requests made with `Accept-Encoding: gzip`
  gzip: true,
  metadata: {
    // Enable long-lived HTTP caching headers
    // Use only if the contents of the file will never change
    // (If the contents will change, use cacheControl: 'no-cache')
    cacheControl: 'no-cache',
  }

  
})
}catch(e){console.log(error)}};

//try{
    //send(filename, bucketName)
//}catch(e){console.log(e)}

module.exports = {send}