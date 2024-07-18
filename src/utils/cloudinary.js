import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY__NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET_KEY
});

// Upload an image
const uploadOnCloudinary = async(localFilePath) => {
    try{
        if(!localFilePath){
            //upload the file on cloudinary
            const res = await cloudinary.uploader.upload(localFilePath, {
                resource_type: "auto"
            }) 
            // file has been uploaded successfull
            console.log("file is uploaded on cloudinary ", response.url);
            fs.unlinkSync(localFilePath);
        }
    }
    catch(error){
        fs.unlinkSync(localFilePath);
        console.log(error);
    }
}

export {uploadOnCloudinary};