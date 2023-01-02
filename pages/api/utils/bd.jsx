const mongoose = require('mongoose');
const connectDatabase = () => {
    const mongodb_uri = `mongodb+srv://mobilePhone:eNBcl4J9QbMbfpLL@cluster0.1any0hy.mongodb.net/?retryWrites=true&`
    try {
        mongoose.connect(mongodb_uri)
        mongoose.connection.on('connected', () => {
            console.log('connected to DB')
        })
    } catch (error) {
        console.log(error.message)
    }
}

export default connectDatabase;