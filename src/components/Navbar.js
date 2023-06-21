import styles from './Navbar.module.css'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Navbar() {

    const { logout } = useLogout();
    const { user } = useAuthContext();

    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position='static' color='primary'>
                <Toolbar>
                    <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}  >
                        <Link component='button' to="/" className={styles.link} >Harcama Takip App</Link>
                    </Typography>

                    {!user && (
                        <>
                            <Button variant='outlined' color='inherit' >
                                <Link component='button' className={styles.link} to="/login"  > GİRİŞ </Link>
                            </Button>

                            <Button variant='text' color='secondary' >
                                <Link component='button' className={styles.link} to="/signup"  > Üye Ol </Link>
                            </Button>
                        </>
                    )}


                    {user && (
                        <>
                        <Typography variant='caption'  > Merhaba {user.displayName} </Typography>
                            <Button variant='contained' color='secondary' onClick={logout} sx={{ ml: 5 }} >
                                Çıkış
                            </Button>
                        </>
                    )
                    }

                </Toolbar>
            </AppBar>
        </Box>
    )
}

