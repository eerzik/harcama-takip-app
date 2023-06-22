import React, { Fragment } from 'react';
import { ListItemText, ListItem, List, Divider, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Liste({ harcamalar }) {

    console.log(harcamalar);

    return (
        <List>
            {harcamalar.map(harcama => (
                <Fragment key={harcama.id} >
                    <ListItem secondaryAction={
                        <IconButton edge="end" aria-label='delete'>
                            <DeleteIcon />
                        </IconButton>
                    } >
                        <ListItemText primary={harcama.baslik} secondary={harcama.miktar}  ></ListItemText>
                    </ListItem>
                    <Divider />
                </Fragment>
            ))}
        </List>
    )
}

