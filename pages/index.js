import path from 'path';
import fs from 'fs/promises';

function HomePage(props) {
  console.log('props.products', props.products);

  return (
    <ul>
      {props.products.map(product => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {

  // const products = await fetch('https://nextjs-course-4f3e2-default-rtdb.firebaseio.com/products.json').then(res => res.json());
  // const transformedProducts = Object.keys(products).map(key => ({ id: key, ...products[key] }));
  // return {
  //   props: {
  //     products: transformedProducts
  //   }
  // }

  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  console.log('data', data);

  return {
    props: {
      products: data.products
    }
  }
}

export default HomePage;
