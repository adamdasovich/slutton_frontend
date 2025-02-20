import styles from './OrderHistoryItem.module.css'

const OrderHistoryItem = () => {
  return (
    <div className='card-body'>
        <div className={`order-item mb ${styles.orderItem}`}>
            <div className='row'>
                <div className='col-md-2'>
                    <img 
                        src='assets/laptop1.jpg'
                        alt='Order Item'
                        className='img-fluid'
                        style={{ borderRadius: '5px'}}
                    />
                </div>
                <div className='col-md-6'>
                    <h6>Product Name</h6>
                    <p>Order Date: Blah</p>
                    <p>Order Id: eee</p>
                </div>
                <div className='col-md-2 text-center'>
                    <h6 className='text-muted'>Quantity: 2</h6>
                </div>
                <div className='col-md-2 text-center'>
                    <h6 className='text-muted'>$23.98</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderHistoryItem