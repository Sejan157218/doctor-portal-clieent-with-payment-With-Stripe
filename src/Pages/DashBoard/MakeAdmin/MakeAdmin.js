import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../hook/useAuth';
const MakeAdmin = () => {
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState('');
    const { adminToken } = useAuth()


    const handlerOnBlur = e => {
        setEmail(e.target.value);
    }

    const handlerToSubmit = e => {
        const user = { email };
        fetch('https://whispering-garden-01955.herokuapp.com/users/admin', {
            method: "PUT",
            headers: {
                'authorization': `Bearer ${adminToken}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {

                    setSuccess(true)
                }

            })
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handlerToSubmit}>
                <TextField
                    onBlur={handlerOnBlur}
                    label="Email"
                    type="email"
                    variant="outlined" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;