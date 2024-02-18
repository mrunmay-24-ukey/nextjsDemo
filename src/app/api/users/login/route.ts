import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken'
    


connect();

export async function POST(request:NextRequest){
    try{
        // grab the data
        const reqBody = await request.json()

        // grab email , password from reqBody
        const {email , password} = reqBody;
        console.log(reqBody);

        // check if user exists 
        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({error:"User does not exist"} , {status:400})
        }


        // check if pasasword is correct
        const validPassword = await bcryptjs.compare
        (password , user.password)

        if(!validPassword){
            return NextResponse.json({error:"Invalid password"},
        {status:400})
        }

        // create token data
        const tokenData  = {
            id : user._id,
            username: user.username,
            email : user.email
        }

        //create token  
        const token = await jwt.sign(tokenData  ,process.env.JWT_SECRET_KEY  ,{expiresIn : '1h'})




        
    }
    catch(error:any){
        return NextResponse.json({error:error.message} , 
            {status:500})
    }
}


