import { connectdb } from "@/config/dbconfig";
import userMode from "@/models/userMode";
import { NextRequest, NextResponse } from "next/server";

connectdb()

export async function POST(request: NextRequest) {
    try {
        const body=await request.json()
        console.log(body)

        const user= await userMode.findOne({email:body.email})
        if(!user)
        return NextResponse.json({
            message:'user not registered'
        })

        return NextResponse.json({
          message:'login success',
           user
        })
        
    } catch (error) {
        console.log(error)
    }
}