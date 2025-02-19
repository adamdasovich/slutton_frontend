import CartItem from "./CartItem"
import CartSummary from "./CartSummary"
import { useEffect, useState } from 'react'
import api from '../../api'


const CartPage = ({setNumberCartItems}) => {
  const cart_code = localStorage.getItem('cart_code')

  const [cartitems, setCartItems] = useState([])
  const [cartTotal, setCartTotal] = useState(0.00)

  const tax = 4.00

  useEffect(() => {
    api.get(`get_cart?cart_code=${cart_code}`)
    .then(res => {
      console.log(typeof res.data.sub_total)
      setCartItems(res.data.items)
      setCartTotal(Number(res.data.sub_total) || 0)
      console.log(typeof cartTotal)
    })
    .catch(err => {
      
      console.log(err.message)
    })
  }, [])

  if(cartitems.length < 1){
    return (<div className="alert alert-primary my-5" role="alert">
      You have not added any items to your cart
    </div>)
  }

  return (
    <div className='container my-3 py-3' style={{height: '80vh', overflow: 'scroll'}}>
        <h5 className='mb-4'>Shopping Cart</h5>
        <div className='row'>
            <div className='col-md-8'>
              {cartitems.map(item => <CartItem 
                                          item={item} 
                                          key={item.id} 
                                          setCartTotal={setCartTotal} 
                                          cartitems={cartitems} 
                                          setNumberCartItems={setNumberCartItems}
                                          setCartItems={setCartItems} 
                                      />
              )}
                
            </div>
            <CartSummary cartTotal={cartTotal} tax={tax}/>
        </div>
    </div>
  )
}

export default CartPage