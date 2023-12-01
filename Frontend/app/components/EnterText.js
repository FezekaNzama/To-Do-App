"use client"
import { AddSharp, ExpandLess, ExpandMore, RemoveSharp } from '@mui/icons-material';
import { TextField, Box, Button, Popper, Collapse } from '../../lib/mui';
import * as React from 'react';


export default function EnterText({trigger, setTrigger}){
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const handleClick = () => {
        setOpen(!open);
    }

    const handleSubmit = () =>{
        addNote(title, description);
        setOpen(!open);
        setTitle("");
        setDescription("");
        setTrigger(!trigger);
    }

    const addNote = async(title, description) =>{
        await fetch("http://localhost:8080/note/", {
            method: 'POST',
            body: JSON.stringify({
                title: title, 
                description: description
            }),
            headers:{
                'Content-type':'application/json; charset=UTF-8'
            },
        })
            .then((response) => response.json())
            .then((data)=>{
                console.log(data)
            })
            .catch((err)=>{
                console.log(err.message)
            })

    }

    return(
        <div>
            <Box
                sx={{
                    border:'0.01rem solid black',
                    textAlign:'center',
                    alignItems:'center',
                    display:'flex',
                    flexDirection:'column',
                    padding:'1rem',
                    marginX:'15%',
                    marginTop:'2rem'
                }}
            >
                <Button
                    sx={{
                        backgroundColor:'black',
                        borderRadius:'10rem',
                        marginY:'0.01rem',
                        color:"white",
                            '&:hover':{
                                color:'black'
                            }
                    }}
                    onClick={handleClick}
                >
                    {open? <RemoveSharp/> : <AddSharp/>}
                </Button>
                <Collapse
                    in={open}
                    unmountOnExit
                >
                    <Box>
                        <TextField
                            required
                            label="Title"
                            value={title}
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
                                margin:'1rem'
                            }}
                            onChange={(e) =>{
                                setDescription(e.target.value);
                            }}
                        />
                        <Button
                            sx={{
                                backgroundColor:'black',
                                color:"white",
                                    '&:hover':{
                                        color:'black',
                                        backgroundColor:'white'
                                    }
                            }}

                            onClick={handleSubmit}
                        >
                            Save 
                        </Button>
                    </Box>
                </Collapse>
            </Box>
        </div>
        
    )
}