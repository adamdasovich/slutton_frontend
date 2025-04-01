import React, { useState } from 'react'
import api from '../../api'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button, Container } from '@mui/material'
import TextForm from '../forms/TextForm'
import MyMessage from '../forms/Message'
import * as yup from 'yup'
import {Grid} from '@mui/material'

const RegistrationPage = () => {
  
  const navigate = useNavigate()
  const [message, setMessage] = useState([])

  const validationSchema = yup.object({
    username: yup.string('Must be text').required('Required field'),
    first_name: yup.string('Must be text').required('Required field'),
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Required'), 
  })
  

  const formik = useFormik({
    initialValues: {
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        city: '',
        state: '',
        address: '',
        phone: '',
        password: '',
        confirmPassword: ''
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
        api.post('register/', values)
        .then(() => {
            setMessage(
                <MyMessage
                    messageText = {'you did it!'}
                    messagecolor ={'purple'} 
                />
            )
            setTimeout(() => {
                navigate('/')
            }, 1500)
        })
        .catch (err => {
            console.log(err.message)
        })
    }   
  })
  console.log('Form values', formik.values)
  
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          User Registration
        </Typography>
        <Box display="flex" alignItems="center" mb={2}>
          <Typography variant="subtitle1" fontWeight="bold">
            Create new user
          </Typography>
        </Box>
        {message}
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextForm
                label="Username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextForm
                label="First Name"
                name="first_name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                helperText={formik.touched.first_name && formik.errors.first_name}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextForm
                label="Last Name"
                name="last_name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                helperText={formik.touched.last_name && formik.errors.last_name}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextForm
                label="Email"
                name="email"
                type='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextForm
                label="City"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextForm
                label="State"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.state && Boolean(formik.errors.state)}
                helperText={formik.touched.state && formik.errors.state}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextForm
                label="Address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextForm
                label="Phone"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextForm
                label="password"
                type='password'
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextForm
                label="confirmPassword"
                name="confirmPassword"
                type='password'
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: 3 }}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  )
}

export default RegistrationPage