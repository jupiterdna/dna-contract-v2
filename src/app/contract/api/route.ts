import { type NextRequest, NextResponse } from 'next/server'

export async function GET(request: Request) {
    const data = {
        name: 'John Doe',
        age: '21'
    }
    
    return Response.json({ data })
}

export async function POST(request: Request) {
    
    console.log("request", request)

    const data =["essee"]
    
    // return Response.json({ data })
}