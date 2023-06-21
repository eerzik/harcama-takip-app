import { Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const Form = () => {

    const [baslik, setBaslik] = useState('')
    const [miktar, setMiktar] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(miktar, baslik);
    }
    return (
        <form noValidate autoCapitalize='off' onSubmit={handleSubmit} >
            <Typography variant='h6' color="darkslateblue" >
                Harcama Bilgisini Giriniz.
            </Typography>
            <TextField label="Harcama Başlık" variant='standard' fullWidth required onChange={(e) => setBaslik(e.target.value)} value={baslik}  ></TextField>
           
            <TextField label="Harcama Miktar" sx={{my:5}}  variant='standard' fullWidth required onChange={(e) => setMiktar(e.target.value)} value={miktar}  ></TextField>
            <Button variant='contained' color='secondary' type='submit' >EKLE</Button>
        </form>
    );
};

export default Form;