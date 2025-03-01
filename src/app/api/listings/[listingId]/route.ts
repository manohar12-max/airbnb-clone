import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/lib/prismadb";

interface IParams {
  listingId?: string;
}

export async function DELETE(request: Request, { params }: { params: IParams }) {
const currentUser=await getCurrentUser();
if(!currentUser){
    return NextResponse.error();
}
const {listingId}=params
 if(!listingId || typeof listingId!=='string'){
     throw new Error('Invalid ID')
 }
 const listing=await prisma.listing.deleteMany({
     where:{
         id:listingId,
         userId:currentUser.id  //only want owner to delete the listing
     }
 })
 return NextResponse.json(listing)
}