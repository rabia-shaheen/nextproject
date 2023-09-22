import Link from 'next/link'

export default function Home() {
  const linkStyle = {
    color: 'blue', /* You can use your desired color */
    textDecoration: 'underline',
    cursor: 'pointer',
  };

  return (
    <main>
      <h1 className='heading'>Welcome to Home Page</h1>
      <br />
      <br />
      <h3 className='heading'>Fetch Data from API Client Side</h3>
      <br />
      <Link href="/products" passHref style={linkStyle}>
       Go to Product page
      </Link>
      <br />
      <br />
      <h3 className='heading'>Fetch Data from API Server Side</h3>
      <br />
      <Link href="/product_server" passHref style={linkStyle}>
       Go to Product page
      </Link>
    </main>
  )
}
