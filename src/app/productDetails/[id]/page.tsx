import React from 'react'
import getSingleProduct from '../../../apis/singleProduct'
import { Button } from "../../../components/ui/button"
import Image from 'next/image'


const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params
  const data = await getSingleProduct(id)

  return (
    <div className='container w-full px-5 md:w-[%80] md:px-0 mx-auto my-10 flex items-center flex-col md:flex-row text-black'>
      <div className='w-full md:w-1/3'>
        <Image width={500} height={500} src={data.imageCover} className='w-full' alt={data.title} />
      </div>
      <div className='w-full md:w-2/3 m-10 md:m-0 ps-10'>
        <h2 className='text-2xl text-emerald-400 font-bold'>{data.title} </h2>
        <p className='my-5'>{data.description}.</p>
        <p className='mt-20'>Brand: {data.brand.name}</p>
        <p>Category: {data.category.name}</p>

        <div className='w-full mt-20 flex justify-between item-center'>
          <p>{data.price}.00 LE</p>
          <div className='px-10 flex justify-between item-center'>
            <p className='px-5'>{data.quantity} Pieces Left</p>
            <p className='line-clamp-1'><i className='fa fa-star text-amber-300'></i>{data.ratingsAverage}</p>
          </div>
        </div>
        <Button variant="outline" className=' w-full mt-5 bg-indigo-700 text-emerald-400 hover:text-indigo-700 hover:bg-emerald-400 transition-all  duration-300' size={undefined}>Buy Now</Button>

      </div>

    </div>
  )
}

export default ProductDetails