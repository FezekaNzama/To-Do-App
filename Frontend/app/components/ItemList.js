"use client"
import * as React from 'react';
import { Accordion, AccordionSummary, Typography, Box, AccordionDetails, Button } from '../../lib/mui'
import Link from "next/link"

export default function ItemList({trigger, setTrigger}){

    const [notes, setNotes] = React.useState([]);

    const getNotes = () => {
        fetch('http://localhost:8080/note/all')
            .then((response) => response.json())
            .then((data)=> setNotes(data))
            .catch((err)=>{
                console.log(err.message);
            })
    }

    const deleteNote = async(id) =>{
        await fetch(`http://localhost:8080/note/${id}`, {
            method: 'DELETE',  
        }).then((response)=>{
            if(response.status === 200){
                setNotes(
                    notes.filter((post)=>{
                       return post.id !== id; 
                    })
                )
            } else {
                return;
            }
        })
    }

    React.useEffect(()=>{
        if(trigger){
            getNotes();
        }
        setTrigger(!trigger);

    }, [trigger]);

    return(
        <div>
            <Box
                sx={{
                    marginX:'15%'
                }}
            >
                {notes.map(note=>
                    <Accordion
                        key={note.id}
                        id={note.id}
                        sx={{
                            border:'0.01rem solid black',             
                        }}
                    >
                        <AccordionSummary
                            sx={{
                                "&:hover":{
                                    backgroundColor: 'black',
                                    color:'white'
                                },
                                flexGrow:1,
                                textAlign:'left',
                                justifyItems:'center'
                            }}
                        >
                            <Typography
                                sx={{
                                    flexGrow:1,
                                    paddingTop:'0.3rem'                            
                                }}
                            >
                                {note.title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                sx={{
                                    marginY:'0.5rem'
                                }}
                            >
                                {note.description}
                            </Typography>
                            <Box
                                sx={{
                                    marginTop:'3rem'
                                }}
                            >
                                <Link
                                    href={{
                                        pathname:'/edit',
                                        query:{
                                            id: note.id,
                                            title: note.title,
                                            description: note.description
                                        }
                                    }}
                                >
                                    <Button
                                        sx={{
                                            color:'white',
                                            backgroundColor:'gray',
                                            '&:hover':{
                                                color:'black',
                                                backgroundColor:'white'
                                            },
                                            marginX:'0.3rem'
                                        }}
                                    >
                                        <Typography variant='p'>
                                            Edit
                                        </Typography>
                                    </Button>
                                </Link>                      
                                <Button
                                    sx={{
                                        color:'white',
                                        backgroundColor:'black',
                                        '&:hover':{
                                            color:'black',
                                            backgroundColor:'white'
                                        },
                                        marginX:'0.3rem'
                                    }}

                                    onClick={() => deleteNote(note.id)}
                                >
                                    <Typography variant='p'>  
                                        Delete
                                    </Typography>
                                </Button>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                )}
            </Box>
        </div>
    )
}