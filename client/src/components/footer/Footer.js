import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography'
import styled from 'styled-components'
import backround1 from './icon/backround3.jpg'

const HoverButton = styled(Button)`
    &:hover svg path {
        color: black;
    }
`


export default function Footer() {
    return (
      

        <AppBar className='footer' position="static" style={{ backgroundImage: `url(${backround1})` }}>
        <Container maxWidth="md"  style={{ marginRight: "50%" }}>
            <Toolbar >
            <Typography variant="body1" color="black" className='footer_text'>
            ©️ 2021 All rights reserved to Matan Cohen.          
            </Typography>
              <HoverButton  target="_blank" href="https://github.com/cmatan10">
                  <GitHubIcon></GitHubIcon>
              </HoverButton>    
            </Toolbar>
          </Container>
        </AppBar>
      
    )
}
