import React from 'react'
import "./FindMe.css"
import Logo from '../Logo/Logo'
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";

function FindMe() {
  return (
    <div className='Findme'>
        <h1 className='Heading'>FIND ME ON</h1>
        <p id="paragraph">Please don't hesitate to reach out to me and connect</p>
        <div className='profile'>
            <Logo tittle={<TiSocialLinkedin />}/>
            <Logo tittle={<TiSocialFacebook/>}/>
            <Logo tittle={<FaGithub/>}/>
            <Logo tittle={<MdOutlineWhatsapp/>}/>


        </div>

    </div>
  )
}

export default FindMe