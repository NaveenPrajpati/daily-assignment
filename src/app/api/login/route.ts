import { connectdb } from "@/config/dbconfig";
import userMode from "@/models/userMode";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'

connectdb()

export async function POST(request: NextRequest) {
    try {
        // res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');
        
        const body=await request.json()
        const {email,password}=body
        console.log(email)

        const user= await userMode.findOne({email})
        if(!user)
        return NextResponse.json({
            message:'user not registered'
        })
       const leagle= await bcrypt.compare(password,user.password)

       if(leagle)
        return NextResponse.json({
            success:true,
          message:'login success',
           user
        })

        
    } catch (error) {
        console.log(error)
    }
}