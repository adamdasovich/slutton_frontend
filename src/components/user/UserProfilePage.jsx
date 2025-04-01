import UserInfo from './UserInfo'
import OrderHistoryContainer from './OrderHistoryContainer'
import { useState, useEffect } from 'react'
import api from '../../api'
import Spinner from '../ui/Spinner'

const UserProfilePage = () => {

  const [userInfo, setUserInfo] = useState({})
  const [orderitems, setOrderitems] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    api.get('user_info')
    .then(res => {
      console.log(res.data)
      setUserInfo(res.data)
      setOrderitems(res.data.items)
      setLoading(false)
    })
    .catch(err => {
      console.log(err.message)
      setLoading(false)
    })
  }, [])
  if (loading){
    return <Spinner loading={loading}/>
  }
    


  return (
    <div className='container my-5'>

        <UserInfo userInfo={userInfo}/>

        <OrderHistoryContainer orderitems={orderitems}/>

    </div>
  )
}

export default UserProfilePage