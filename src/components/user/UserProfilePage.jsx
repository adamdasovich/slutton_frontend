import UserInfo from './UserInfo'
import OrderHistoryContainer from './OrderHistoryContainer'

const UserProfilePage = () => {
  return (
    <div className='container my-5'>

        <UserInfo />

        <OrderHistoryContainer />

    </div>
  )
}

export default UserProfilePage