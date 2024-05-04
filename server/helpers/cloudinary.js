var cloudinary = require('cloudinary');
require('dotenv').config
cloudinary.config({ 
    cloud_name: process.env.CLOUD, 
    api_key: process.env.CLOUD_API, 
    api_secret: process.env.CLOUD_API_S
  });