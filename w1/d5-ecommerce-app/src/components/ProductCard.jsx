import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import { Link } from 'react-router-dom'
import { useWishlist } from '../context/Wishlist'

function ProductCard({ products }) {

    const dispatch = useDispatch()

    const { wishlist, setWishlist } = useWishlist()
    console.log('Wishlist:', wishlist)

    const [isWishlisted, setIsWishlisted] = useState(true)



    const handleAddToWishlist = (product) => {

        if (!wishlist.some(item => item.id === product.id)) {
            setWishlist([...wishlist, product])
            console.log('Product added to wishlist:', wishlist)
        }
        else {

            const updatedWishlist = wishlist.filter(item => item.id !== product.id)
            setWishlist(updatedWishlist)

            console.log('Product removed from wishlist:', wishlist)
        }
        const t = wishlist.some(item => item.id === product.id)
        setIsWishlisted(t)
        console.log('Is Wishlisted:', t)


    }
    // console.log('Is Wishlisted:', isWishlisted)


    return (
        <div className=" h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">

            {/* map through products and display them */}

            {products.map(product => (
                <div
                    key={product.id}
                    className="h-fit bg-white p-4 rounded shadow flex flex-col justify-between h-[400px]"
                >
                    <Link to={`/products/${product.id}`}>
                        <div className="h-48 flex items-center justify-center mb-4">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="max-h-full object-contain"
                            />
                        </div>
                        <h2 className="text-md font-semibold line-clamp-2 h-[48px]">{product.title}</h2>
                        <p className="text-green-600 font-bold mt-2">${product.price}</p>
                    </Link>

                    {/* add to cart button */}
                    <button
                        onClick={() => dispatch(addToCart(product))}
                        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Add to Cart
                    </button>

                    {/* add to wishlist button */}
                    <button
                        onClick={() => handleAddToWishlist(product)}
                        className={`mt-2 bg-green-500  hover:bg-red-700 text-white px-4 py-2 rounded `}
                    >
                        {wishlist.some(item => item.id === product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    </button>
                </div>
            ))}
        </div>
    )
}

export default ProductCard