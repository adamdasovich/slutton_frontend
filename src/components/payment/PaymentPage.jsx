import { Link, useLocation } from 'react-router-dom'
import {useState, useEffect} from 'react'
import api from '../../api'

const PaymentPage = ({setNumberCartItems}) => {

  const [statusMessage, setStatusMessage] = useState('Verifying your payment');
  const [statusSubMessage, setStatusSubMessage] = useState('Hold your horses!')
  const location = useLocation() 
  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const paymentId = queryParams.get('paymentId')
    const payerId = queryParams.get('payerID')
    const ref = queryParams.get('ref')
    if(paymentId && payerId && ref) {
      api.post(`paypal_payment_callback/?paymentId=${paymentId}&payerID=${payerId}&ref=${ref}`)
      .then(res => {
        setStatusMessage(res.data.message)
        setStatusSubMessage(res.data.subMessage)
        localStorage.removeItem('cart_code')
        setNumberCartItems(0)
      })
      .catch (err => {
        console.log(err.message)
      })
    }
  })

  return (
    <header className='py-5' style={{backgroundColor: '#6050DC'}}>
        <div className='container px-4 px-lg-5 my-5'>
            <div className='text-center text-white'>
                <h2 className='display-4 fw-bold'>{statusMessage}</h2>
                <p className='lead fw-normal text-white-75 mb-4'>{statusSubMessage}</p>
                <span>
                    <Link to='/profile' className='btn btn-light btn-lg px-4 py-2 mx-3'>View order details</Link>
                    <Link to='/' className='btn btn-light btn-lg px-4 py-2'>Continue Shopping</Link>                    
                </span>
            </div>
        </div>
    </header>
    
  )
}

export default PaymentPage