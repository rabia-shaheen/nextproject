import Image from "next/image"
import Profile from '../../public/vercel.svg'

export default function Home() {
  console.log(Profile)
  return (
    <main>
      <h1 className='heading'>Image Optimizition</h1>
    {/*<Image 
     src={Profile}/>

    <img
     src={Profile.src}/>  */ } 
     <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Strix-varia-005.jpg/1024px-Strix-varia-005.jpg"
     width={200}
     height={200}
     alt="Description of the image"
     layout="responsive"/>
    </main>
  )
}
