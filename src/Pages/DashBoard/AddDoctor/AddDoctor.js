import { Button, Input, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';



const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);

    const handlerToSubmit = e=>{
        if(!image){
            return;
        }
        const formData = new FormData();
        formData.append('name',name)
        formData.append('email',email)
        formData.append('image',image)
        fetch('http://localhost:8000/doctors', {
            method: "POST",
            body: formData,
        }).then(res => res.json())
            .then(data => {
                console.log(data.insertedId);
                // if (data) {

               
                // }

            })
        e.preventDefault();
    }
    return (
        <div>
            <form>
            <TextField 
           sx={{
            width: '50%',
            mb:1,
          }}
            onChange={e => setName(e.target.value)}
            required
            label="Full Name" 
            variant="standard" 
            />
            <br/>
             <TextField 
             sx={{
                width: '50%',
                mb:1,
              }}
              onChange={e => setEmail(e.target.value)}
            required
            label="Email" 
            variant="standard" 
            />
           <br/>
           <Input 
           sx={{
            width: '50%',
            mb:1,
          }}
          onChange={e => setImage(e.target.files[0])}
           accept="/image/*"
           type="file" />
           <br/>
        <Button onClick={handlerToSubmit} type="submit" variant="contained" component="span">
        Add Doctor
            </Button>
            </form>
        </div>
    );
};

export default AddDoctor;