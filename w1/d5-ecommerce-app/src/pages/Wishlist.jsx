import React from 'react'
import { useWishlist } from '../context/Wishlist'

function Wishlist() {

    const { wishlist , setWishlist} = useWishlist()
    console.log(wishlist)

    const handleClearWishlist = () => {
     setWishlist([])
    }
  return (
    <div>
        <div className='flex justify-between items-center px-20 '>
            <h1 className='text-3xl font-bold text-center mt-12'>Wishlist </h1>
            <button onClick={()=>handleClearWishlist()}
                className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mt-4 ml-4'
            >Clear wishlist</button>
        </div>
        {wishlist.length === 0 && (
            <div className='flex justify-center items-center h-screen'>
                <p className='text-xl'>Your wishlist is empty.</p>
            </div>
        )}
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
            {wishlist.map(product => (
                <div 
                    key={product.id}
                    className="h-fit bg-white p-4 rounded shadow flex flex-col justify-between h-[400px]"
                >
                    <div className="h-48 flex items-center justify-center mb-4">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="max-h-full object-contain"
                        />
                    </div>
                    <h2 className="text-md font-semibold line-clamp-2 h-[48px]">{product.title}</h2>
                    <p className="text-green-600 font-bold mt-2">${product.price}</p>
                </div>
            ))}
            </div>
    </div>
  )
}

export default Wishlist