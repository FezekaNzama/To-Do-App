"use client"

import * as React from 'react';
import { Typography, Box, Button } from '../lib/mui';
import EnterText from './components/EnterText';
import ItemList from './components/ItemList';


export default function Home() {

  const [trigger, setTrigger] = React.useState(true);
  
  return (
    <div
      style ={{
        textAlign:'center'
      }}
    >
      <Box
        sx={{
          marginTop:'5rem',         
        }}
      >
        <Typography variant='h3' >Notes App</Typography>
      </Box>
      <EnterText trigger={trigger} setTrigger={setTrigger}/>
      <Box
        sx={{
          marginY:'1rem'
        }}
      >
        <ItemList trigger={trigger} setTrigger={setTrigger}/>
      </Box>
    </div>
  )
}
