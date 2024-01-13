import axios from "axios";

type Props = {
    formData: FormData
}

export const Imageupload = async ({formData} : Props) => {
    const file = formData.get('file') as File
    formData.append('upload_preset', `${process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}`)

    if(!file){
        throw new Error ('File not found in FormData')
    }
    
    const cloudinaryUplaodUrl = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`

    try {
        const resposne = await axios.post(cloudinaryUplaodUrl, formData, {
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
        return resposne.data.url
    } catch (error) {
        console.error('Error uploading to cloudinary', error)
        throw error
    }
}