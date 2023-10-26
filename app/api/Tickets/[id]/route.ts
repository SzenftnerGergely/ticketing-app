import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function DELETE(req:Request, {params}) {
    try {
        const {id} = params
        await Ticket.findByIdAndDelete(id) 
        console.log(params);
        
        return NextResponse.json({ message: "Ticket Deleted"}, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
}