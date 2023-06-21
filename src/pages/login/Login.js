import './Login.module.css'
import { Container, Typography, Button, FormControl, FilledInput, InputLabel } from '@mui/material'
import { useState } from 'react'

export default function Login() {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChange=(prop)=>(event)=>{
        setValues({...values,[prop]:event.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(values);
    }

    return (
        <Container>
            <form onSubmit={handleSubmit} >
                <Typography sx={{ mt: 15, ml: 5, fontWeight: 'bold' }} variant='h4' color={'darkslateblue'} >
                    Giriş Yap
                </Typography>

                <FormControl fullWidth sx={{ mt: 5 }} >
                    <InputLabel htmlFor="email" >Email</InputLabel>
                    <FilledInput id="email" label="Email" value={values.email} onChange={handleChange('email')}  ></FilledInput>
                </FormControl>

                <FormControl fullWidth sx={{ my: 5 }} >
                    <InputLabel htmlFor="password" >Parola</InputLabel>
                    <FilledInput id="password" value={values.password} onChange={handleChange('password')} label="Parola"  ></FilledInput>
                </FormControl>
                <Button variant='outlined' type='submit' color='info' size='large' sx={{ mt: 5 }} >
                    GİRİŞ
                </Button>
            </form>
        </Container>
    )
}

