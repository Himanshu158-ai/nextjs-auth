import connectDb from "@/lib/db";
import userModel from "@/models/user";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function POST(request) {
  try {
    const body = await request.json();

    console.log(body);

    const { name, email, password } = body;

    await connectDb();

    const isUserExist = await userModel.findOne({ email });

    if (isUserExist) {
      return NextResponse.json({
        message: "User already exists",
      });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      name,
      email,
      password: hashedPass,
    });

    const token = jwt.sign(
      { id: user._id },
      "alksjdfwopeufdsfdcvbzxczxc",
      { expiresIn: "3d" }
    );

    const response = NextResponse.json({
      message: "User Register Successfully",
      user,
      status: 200,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 * 3,
    });

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: error.message,
      status: 500,
    });
  }
}