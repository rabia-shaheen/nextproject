import {Roboto} from 'next/font/google'

const roboto=Roboto({
  weight:'100',
  subsets:['latin'],
  display:'swap'
})

export default function Home() {
  return (
    <main>
      <h1 style={{fontFamily:'Roboto'}}>Font Optimizition</h1>
      <h1 className={roboto.className}>Link for Font Optimizition</h1>
    </main>
  )
}

export function generateMetadata()
{
  return{
    title:"Font Optimize"
  }
}