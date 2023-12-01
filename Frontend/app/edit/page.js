"use client"
import * as React from 'react';
import { Typography, Box, TextField, Button } from '../../lib/mui';
import { useSearchParams } from 'next/navigation'

export default function Edit() {

    const data = useSearchParams();
    const [title, setTitle] = React.useState(data.get('title'));
    const [description, setDescription] = React.useState(data.get('description'));

    const editNote = async(id) => {
      await fetch( `http://localhost:8080/note/${id}`,{
        method: 'PUT',
        body: JSON.stringify({
          title: title, 
          description: description
        }),
        headers:{
            'Content-type':'application/json; charset=UTF-8'
        },
      }).then((response)=>response.json())
        .catch((err)=>{console.log(err)})
    }

    const handleEdit = (id) =>{
      editNote(id);
    }
    
    return (
      <div>
        <Box
          sx ={{
            textAlign:'center'
          }}
        >
          <Box
            sx={{
              marginTop:'5rem',         
            }}
          >
            <Typography variant='h3'>Notes App</Typography>
            <Typography variant='p'>Edit Note</Typography>
          </Box>
          <Box>
            <TextField
              required
              label="Title"
              value = {title}
              sx={{
                width:'90%',
                margin:'1rem',
                "&:focus":{
                  borderColor:'black'
                }
              }}

              onChange={(e) =>{
                setTitle(e.target.value);
              }}

            />
            <TextField
              label="Description"
              value={description}
              rows={4}
              multiline
              sx={{
                width:'90%',
                margin:'1rem',
                "&:focus":{
                  borderColor:'black'
                }
              }}

              onChange={(e) =>{
                setDescription(e.target.value);
              }}

            />
          </Box> 
            <Button
              sx={{
                backgroundColor:'black',
                color:"white",
                '&:hover':{
                  color:'black',
                  backgroundColor:'white'
                }
              }}
              href = '/'
              onClick={() => handleEdit(data.get('id'))}
            >
              Save 
            </Button>          
        </Box>        
      </div>
    )
  }