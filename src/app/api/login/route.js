import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import userModel from "@/models/user";
import connectDb from "@/lib/db";
import { NextResponse } from "next/server";


export async function POST(request) {
    try {
        const body = await request.json();
        const { email, password } = body;

        await connectDb();

        const user = await userModel.findOne({ email });

        if (!user) {
            return NextResponse.json({
                message: "Invalid Credintial",
                status: 400
            })
        }

        const userPass = await bcrypt.compare(password, user.password);

        if (!userPass) {
            return NextResponse.json({
                message: "Invalid Credintial",
                status: 400
            })
        }

        const token = jwt.sign(
            { id: user._id },
            "alksjdfwopeufdsfdcvbzxczxc",
            { expiresIn: "3d" }
        );

        const response = NextResponse.json({
            message: "User success fully login",
            user,
            status: 201
        })


        response.cookies.set("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60 * 24 * 3,
        });

        return response;
    } catch (error) {
        return NextResponse.json({
            error: error.message,
            status: 500,
        })
    }


}