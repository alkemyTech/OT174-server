const S3 = require("aws-sdk/clients/s3");

const s3 = new S3({
  region: process.env.AWS_REGION,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  accessKeyId: process.env.AWS_PUBLIC_KEY,
});

module.exports = s3;
