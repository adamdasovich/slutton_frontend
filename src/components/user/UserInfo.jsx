
import styles from './UserInfo.module.css'

const UserInfo = () => {
  return (
    <div className='row mb-4'>
        <div className={`col-md-3 py-3 card ${styles.textCenter}`}>
            <img
                src=''
                alt='User Profile'
                className={`img-fluid rounded-circle mb-3 mx-auto ${styles.profileImage}`} 
            />
            <h4>John Doe</h4>
            <p className='text-muted'>adam@jj.com</p>
            <button className='btn mt-2' style={{backgroundColor: '#6050DC', color: 'white'}}>Edit</button>
        </div>
        <div className='col-md-9'>
            <div className='card'>
                <div className='card-header' style={{backgroundColor: '#6050DC', color: 'white'}}>
                    <h5>Account Overview</h5>
                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <p>
                                <strong>Full Name:</strong> Adddam
                            </p>
                            <p>
                                <strong>Email:</strong> Adddam
                            </p>
                            <p>
                                <strong>Phone:</strong> Adddam
                            </p>
                        </div>
                        <div className='col-md-6'>
                            <p>
                                <strong>City:</strong> Adddam
                            </p>
                            <p>
                                <strong>Country:</strong> Adddam
                            </p>
                            <p>
                                <strong>Member Since:</strong> Adddam
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default UserInfo