import mongoose from "mongoose";

const connectdb = async (DATABASE_URL) => {
    try {
        const option = {
            dbName: 'Enquiryform'
        }
        await mongoose.connect(DATABASE_URL, option)
        console.log(' successfully connect data base .....')
    } catch (error) {
        console.log(error)
    }
}
export default connectdb 