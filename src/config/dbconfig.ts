import mongoose from "mongoose";
const BASEURL='mongodb://127.0.0.1:27017/dailyassign'
export async function connectdb(){
    try {
        mongoose.connect(process.env.BASEURL!)
        mongoose.connection.on('connected',()=>{
            console.log('db connected successfully')
        })
        .on('error',(error)=>{
            console.log('error occur connecting db ',error)
        })
        
    } catch (error) {
        console.log(error)
    }
}