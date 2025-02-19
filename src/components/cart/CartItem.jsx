import React, {useState} from 'react'
import { BASE_URL } from '../../api'
import api from '../../api'
import {toast} from 'react-toastify'


const CartItem = ({item, setCartTotal, cartitems, setNumberCartItems, setCartItems}) => {
  const [quantity, setQuantity] = useState(item.quantity)
  const [loading, setLoading] = useState(false)

  const itemData = {quantity: quantity, item_id: item.id}
  const itemId = {item_id: item.id}

  const deleteCartitem = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this item')
    if(confirmDelete){
      api.post('delete_cartitem', itemId)
        .then(res => {
          console.log(res.data)
          toast.success('Deleted')
          const updatedCartItems = cartitems.filter(cartitem => cartitem.id !== item.id);
          setCartItems(updatedCartItems);
          
          const newTotal = updatedCartItems.reduce((acc, curr) => acc + (curr.quantity * Number(curr.product.price)), 0);
          setCartTotal(newTotal);
          
          const newItemCount = updatedCartItems.reduce((acc, curr) => acc + curr.quantity, 0);
          setNumberCartItems(newItemCount);
          
          toast.success('Item removed from cart');
        })
        .catch(err => {
          console.log(err.message);
          toast.error('Failed to remove item from cart');
        });
    }
  }
  

  const updateCartitem = () => {
    setLoading(true)
    api.patch('update_quantity', itemData)
    .then(res => {
        console.log(res.data)
        setLoading(false)
        toast.success('Cart item updated successfully')
        setCartTotal(prevTotal => {
            const updatedItems = cartitems.map(cartItem => 
              cartItem.id === item.id ? {...cartItem, quantity: Number(quantity)} : cartItem
            );
            return updatedItems.reduce((acc, curr) => acc + (curr.quantity * Number(curr.product.price)), 0);
          });
        const updatedItems = cartitems.map(cartitem => 
          cartitem.id === item.id ? res.data.data : cartitem
        );
        const newTotalItems = updatedItems.reduce((acc, curr) => acc + curr.quantity, 0);
        setNumberCartItems(newTotalItems);
    })
    .catch(err => {
        console.log(err.message)
        setLoading(false)
    })
  }


  return (
    <div className='col-md-12'>
        {/* CartItems */}
        <div
            className='cart-item d-flex align-items-center mb-3 p-3'
            style={{ backgroundColor: '#f8f9a', borderRadius: '8px'}}
        >
            <img 
                src={`${BASE_URL}${item.product.image}`}
                alt='Product Image'
                className='img-fluid'
                style={{width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px'}}
            />
            <div className='ms-3 flex-grow-1'>
                <h5 className='mb-1'>{item.product.name}</h5>
                <p className='mb-0 text-muted'>{`$${item.product.price}`}</p>
            </div>
            <div className='d-flex align-items-center'>
                <input 
                    type='number'
                    min='1'
                    className='form-control me-3'
                    value={quantity}
                    style={{width: '70px'}}
                    onChange={e => setQuantity(e.target.value)}
                />
                <button 
                    className='btn btn-sm mx-2'
                    style={{backgroundColor: '#4b3bcb', color:'white'}}
                    onClick={updateCartitem}
                    disabled={loading}
                >
                    {loading ? 'Updating' : 'Update'}
                </button>
                <button 
                  className='btn btn-danger btn-sm'
                  onClick={deleteCartitem}
                >
                  Remove
                </button>
            </div>
        </div>
        {/* More items */}

    </div>
  )
}

export default CartItem