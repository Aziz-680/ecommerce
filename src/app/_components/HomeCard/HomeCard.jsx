import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, } from "../../../components/ui/card"
import Link from 'next/link'
import { Button } from "../../../components/ui/button"
import Image from 'next/image'


const HomeCard = ({ product }) => {
    return (
        <div className='w-full sm:w-1/2 md:w1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-3'>
            <div className='inner'>
                <Card className=' px-2 gap-2 hover:shadow-xl transition-all  duration-500'>

                    <CardHeader className="p-0">
                        <Image width={500} height={500} src={product.imageCover} alt={product.title} />
                    </CardHeader>
                    <CardContent className="p-0">
                        <p className='font-bold text-emerald-400'>{product.category.name}</p>
                        <p className='line-clamp-1'>{product.title}</p>
                        <p className='line-clamp-1'><i className='fa fa-star text-amber-300'></i>{product.ratingsAverage}</p>

                    </CardContent>
                    <CardFooter className="p-0 w-full flex justify-between items-center">
                        <p>{product.price}.00 LE</p>
                        <p>{product.quantity} Pieces Left</p>
                    </CardFooter>
                    
                    <Link href={`/productDetails/${product.id}`}>

                        <Button variant="outline" className=' w-full mt-5 bg-indigo-700 text-emerald-400 hover:text-indigo-700 hover:bg-emerald-400 transition-all  duration-300'>Buy Now</Button>
                    </Link>

                </Card>
            </div>


        </div>)
}

export default HomeCard