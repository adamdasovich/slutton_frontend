import Header from './Header'
import CardContainer from './CardContainer'
import api from '../../api'
import { useEffect, useState } from 'react'

const HomePage = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect (() => {
    api.get('products')
    setLoading(true)
    .then(res => {
     console.log(res.data)
     setProducts(res.data)
     setLoading(false)
    })
    .catch(err => {
      console.log(err.message)
      setLoading(false)
    }) 
    }, [])
  
  return (
    <>
    <Header />
    <CardContainer products={products}/>
    </>
  )
}

export default HomePage