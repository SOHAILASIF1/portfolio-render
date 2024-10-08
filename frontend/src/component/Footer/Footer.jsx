import React from 'react'
import "./Footer.css"
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";
import Logo from '../Logo/Logo';


function Footer() {
  return (
    <div className='footer'>
        <p id="paragraph">Dedicated to creating impactful solutions!</p>
        <p id="paragraph">Copyright © 2024
brand</p>
        <div className='footer-icon'>
        <Logo tittle={<TiSocialLinkedin />}/>
        <Logo tittle={<TiSocialFacebook/>}/>
        <Logo tittle={<FaGithub/>}/>
        <Logo tittle={<MdOutlineWhatsapp/>}/>


        </div>

    </div>
  )
}

export default Footer