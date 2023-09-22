import { useRouter } from 'next/router';

const AboutProduct = () => {
  const router = useRouter();
  const { sno } = router.query;

  return (
    <div>
      <p>Product Sno: {sno}</p>
    </div>
  );
}

export default AboutProduct;