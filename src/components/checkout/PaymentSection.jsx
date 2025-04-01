import styles from './PaymentSection.module.css'
import React, {useState} from 'react'
import api from '../../api'

const PaymentSection = () => {
  const cart_code = localStorage.getItem('cart_code')
  const [loading, setLoading] = useState(false)

  const paypalPayment = () => {
    setLoading(true)
    api.post('initiate_paypal_payment/', {cart_code})
    .then(res => {
        console.log(res.data)
        setLoading(false)
        if(res.data.approval_url){
            window.location.href = res.data.approval_url
        }
    })
    .catch(err => {
        console.log(err.message)
        setLoading(false)
    })
  }

  return (
    <div className='col-md-4'>
        <div className={`card ${styles.card}` }>
            <div className='card-header' style={{backgroundColor: '#6050DC', color: 'white'}}>
                <h5>Payment Options</h5>
            </div>
            <div className='card-body'>
                {/* paypal button */}
                <button 
                    className={`btn btn-primary w-100 mb-3 ${styles.paypalButton}`} 
                    id='paypal-button'
                    onClick={paypalPayment}
                >
                    <i className='bi bi-paypal'></i>Pay with PayPal
                </button>                 
            </div>
        </div>
    </div>
  )
}

export default PaymentSection