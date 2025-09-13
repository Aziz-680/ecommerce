import axios from 'axios'
import Link from 'next/link';
import React from 'react'

const App = async () => {

  async function getAllProduct() {
    try {
      let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/products");

      return data.data
    } catch (error) {
      return error;
    }
  }




  const data = await getAllProduct()



  return (
    <div className='grid grid-cols-12 my-10'>
      {data.map(function (pro, idx) {
        return (
          <div key={idx} className='col-span-2 p-2'>
            <Link href={`/shop/${pro.id}`}>
              <div className='w-full bg-emerald-400 p-2'>
                <img src={pro.imageCover} className='w-full' alt='' />
              </div>
            </Link>
          </div>
        )
      })}

      <h1>Main</h1>

    </div>
  )
}

export default App