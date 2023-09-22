import {writeFile} from  'fs/promises'
import { NextResponse } from "next/server";

export async function POST(request)
{
  const data=await request.formData(); 
  const file=data.get('file');
  if (!file)
  {
    return NextResponse.json({ "message":"file is not upload",success:false})
  }
  const btyeData= await file.arrayBuffer();
  const buffer= Buffer.from(btyeData);
  const path=`./public/${file.name}`
  await writeFile(path,buffer);
  return NextResponse.json({"message":"file uploaded", success:true});
  


}