import { NextResponse } from "next/server";

export async function GET(request){
    const token = request.cookies.get("token")?.value;
    if(token){
        try {
            const decodedToken=jwt.verify(token, process.env.JWT_SECRET);
            return NextResponse.json({
                success:true,
                user:decodedToken
            });
        } catch (error) {
            return NextResponse.json({
                success:false,
                message:"Invalid token"
            });
        }
    }
    return NextResponse.json({
        success:false,
        message:"No token found"
    });
}