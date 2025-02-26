import React from 'react'
import { Instagram, LinkedIn, Twitter } from '@mui/icons-material'

function Footer() {
  return (
    <div className = 'footer'>
        <div className ='social'> 
            <Instagram/>
            <Twitter/>
            <LinkedIn/>
        </div>
        <p> &copy; 2025barcodescannerhair.com</p>
    </div>
  )
}

export default Footer