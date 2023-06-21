import './Signup.module.css'
import { Container, Typography, Button, FormControl, OutlinedInput, InputLabel, InputAdornment, IconButton } from '@mui/material'
import { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useSignup } from '../hooks/useSignup'
import { useNavigate } from 'react-router-dom'
export default function Signup() {

    const { signup, hata, bekliyor } = useSignup();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
        userName: ''
    })




    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(values);
        signup(values.email, values.password, values.userName);
        navigate('/');
    }

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword
        })
    }

    return (
        <Container>
            <form onSubmit={handleSubmit} >
                <Typography sx={{ mt: 15, ml: 5, fontWeight: 'bold' }} variant='h4' color={'darkslateblue'} >
                    Üye Ol
                </Typography>

                <FormControl fullWidth sx={{ mt: 5 }} >
                    <InputLabel htmlFor="email" >Email</InputLabel>
                    <OutlinedInput id="email" label="Email" autoComplete='on' value={values.email} onChange={handleChange('email')}  ></OutlinedInput>
                </FormControl>

                <FormControl fullWidth sx={{ mt: 5 }} >
                    <InputLabel htmlFor="password" >Parola</InputLabel>
                    <OutlinedInput type={values.showPassword ? 'text' : 'password'} autoComplete='off' id="password" value={values.password} onChange={handleChange('password')} label="Parola" endAdornment={
                        <InputAdornment position='end' >
                            <IconButton aria-label='Toogle Password' onClick={handleClickShowPassword} edge="end" >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }  >
                    </OutlinedInput>
                </FormControl>

                <FormControl fullWidth sx={{ my: 5 }} >
                    <InputLabel htmlFor="user-name" >Kullanıcı Ad</InputLabel>
                    <OutlinedInput id="user-name" label="Kullanıcı Ad" value={values.userName} autoComplete='on' onChange={handleChange('userName')}  ></OutlinedInput>
                </FormControl>

                {!bekliyor &&
                    <Button variant='contained' type='submit' color='info' size='large' sx={{ mt: 5 }} >
                        Üye Ol
                    </Button>
                }

                {bekliyor &&
                    <Button variant='contained' disabled type='submit' color='info' size='large' sx={{ mt: 5 }} >
                        Bekliyor
                    </Button>
                }
                {hata &&
                    <p>{hata}</p>
                }

            </form>
        </Container>
    )
}

