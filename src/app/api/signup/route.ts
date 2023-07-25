import { connectdb } from "@/config/dbconfig";
import userMode from "@/models/userMode";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'

connectdb()

export async function POST(request: NextRequest) {
    try {
        const body=await request.json()
        console.log(body)

        const user= await userMode.findOne({email:body.email})
        if(user)
        return NextResponse.json({
            message:'user already registered'
        })

        const hasdpass= await bcrypt.hash(body.password,10)

        const mod=new userMode({
            name:body.name,
            email:body.email,
            password:hasdpass
        })
console.log(mod)
        mod.save()

        return NextResponse.json({
          message:'signup success',
        
        })
        
    } catch (error) {
        console.log(error)
    }
}