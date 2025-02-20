import OrderHistoryItem from "./OrderHistoryItem"


const OrderHistoryContainer = () => {
  return (
    <div className='row' style={{height: '300px', overflow: 'auto'}}>
        <div className='col-md-12'>
            <div className='card'>
                <div className='card-header' style={{backgroundColor: '#6050DC', color: 'white'}}>
                    <h5>Order History</h5>
                </div>
                <OrderHistoryItem />
            </div>
        </div>
    </div>
  )
}

export default OrderHistoryContainer