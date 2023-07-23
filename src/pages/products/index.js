import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';
import { getProduct } from '../../../services';

// const fetcher = (...args) => fetch(...args).then((repsonse) => repsonse.json());

const Products = ({pd}) => {

  console.log(pd);


  // ++++++++++++ Fetch Data with Client Side Rendering Method...++++++++++ //

  // const { data, error } = useSWR("/api/products", fetcher);
  // if (error) {
  //   return <h1>Error happened</h1>
  // }

  // if (!data) {
  //   return <h1>Loading...</h1>
  // }

  // console.log(data);

  return (
    <div className='w-full text-center p-4'>
      <div className='products_cards w-[100%]' >
        <h1 className='text-3xl font-bold'>Products</h1>
        <div className='mt-10 px-6 flex flex-row flex-wrap justify-center item-center gap-7'>
          {pd.map((product) => (
            <div key={product.id} className='hover:bg-gray w-[300px] h-[300]'>
              <Link href={`products/${product.id}`}>
                <div>
                <Image src={product.imageSrc} alt={product.imageAlt} width={500} height={300} priority={true}/>
                </div>
                <div className='mt-4'>
                  <h2 className='text-xl text-left'>{product.name}</h2>
                </div>

              </Link>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Products;

 // ++++++++++++ Fetch Data with Static generation Approach...++++++++++ //

export const getStaticProps = async () => {

  const pd = getProduct();

  return {
    props : {
      pd
    }
  }
}