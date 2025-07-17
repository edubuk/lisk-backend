import mongoose from 'mongoose'
//schema
const accessRecordSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    accessData: [
        {
            userId: {
                type: String,
                required: true
            },
            pinataHash: {
                type: String,
                required: true
            },
            accessFlag:{
                type:Boolean,
                required:true
            }
        }
    ]
}, { timestamps: true });

const accessRecord = mongoose.model('accessLiskRecord', accessRecordSchema);

export default accessRecord;
