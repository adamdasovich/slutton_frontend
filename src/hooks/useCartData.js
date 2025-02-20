import { useState, useEffect} from 'react'
import api from '../api'


const useCartData = () => {
    const cart_code = localStorage.getItem('cart_code')

    const [cartitems, setCartItems] = useState([])
    const [cartTotal, setCartTotal] = useState(0.00)
    const [loading, setLoading] = useState(false)
  
    const tax = 4.00
  
    useEffect(() => {
      setLoading(true)
      api.get(`get_cart?cart_code=${cart_code}`)
      .then(res => {
        setCartItems(res.data.items)
        setCartTotal(Number(res.data.sub_total) || 0)
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        console.log(err.message)
      })
    }, [cart_code])
    return {cartitems, setCartItems, cartTotal, setCartTotal, loading, tax}
}
export default useCartData