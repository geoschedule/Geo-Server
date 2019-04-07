// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');

// Creates a client
const storage = new Storage();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
 const bucketName = 'hatterhack';
 const srcFilename = 'android16L.jpg';
 const destFilename = "C:/Users/Maurice/Documents/Geo-Server2/src/controllers/ad16.jpg";

const options = {
  // The path to which the file should be downloaded, e.g. "./file.txt"
  destination: destFilename,
};

// Downloads the file
const download = async (bucketName, srcFilename, options) => {await storage
  .bucket(bucketName)
  .file(srcFilename)
  .download(options);
}
try{
download(bucketName, srcFilename, options);
console.log(
  `gs://${bucketName}/${srcFilename} downloaded to ${destFilename}.`
);
}catch(e){console.log(e)}

module.exports = {download}