import React from 'react'
import '../styles/about.css'
import FadeIn from './FadeIn'
import { SiTicktick } from "react-icons/si";
import bhavyaimg from '../assets/bhavya-img.png'
import solimg from '../assets/solitaire_infosys.png'
import instaimg from '../assets/insta-img.png'
import gitimg from '../assets/github-img.png'
import linkimg from '../assets/linkedin-img.png'
import twitimg from '../assets/twitter-img.png'

const About = () => {
  return (
    <div className="all-in">
        <FadeIn>
        <span id='about-main'>About Me</span>
        </FadeIn>
            <FadeIn>
        <hr className='centered-hr' />
            </FadeIn>
      <div className="about-cont">
         <FadeIn>
        </FadeIn>
        <div className="about-left">
        <FadeIn>
            <img src= {bhavyaimg} alt="" />
        </FadeIn>
            <div className="left-detail">
            <p id='head'>Bhavya Rathore</p>
            <p id='tail'>bhavyarathore575@gmail.com</p>
            <div className="cv">

            <a href="https://drive.google.com/file/d/1LYficOERa2PvL760p25nXAH1v2X0t6vR/view?usp=drive_link" target='_blank'>
            <FadeIn>
                <button>VIEW CV</button>
            </FadeIn>
            </a>
            <a href="https://drive.google.com/uc?export=download&id=1LYficOERa2PvL760p25nXAH1v2X0t6vR" target='_blank'>
            <FadeIn>
            <button>DOWNLOAD CV</button>
            </FadeIn>
            </a>
            </div>
            </div>
            {/* email */}
            {/* resume download */}
        </div>

        <div className="about-right">
                <FadeIn>
            <div className="about-right-top">

                <span id='head'> <SiTicktick className='icon' />  Currently Working</span>

                <span>I'm Bhavya Rathore, a passionate MERN stack developer who loves crafting seamless web experiences. I enjoy turning ideas into functional, user-focused applications. <br /> <br /> When I'm not coding, I dive into my favorite anime series or unwind with some music. Excited to keep pushing boundaries in tech!</span>
            </div>
                </FadeIn>
                <FadeIn>

            <div className="about-right-bot">
                <span id='head'>Current Role</span>
                <div className="role-detail">
                    <img src= {solimg} alt="" />
                    <div className="role-details">
                    <p id='heading'>Web Developer Intern</p>
                    <p id='tail'>At Solitare Infosys</p>

                    </div>
                </div>
                    <p id='tail'>As a web development intern at Solitaire Infosys, I craft code, tackle bugs, and dream of becoming a coding superhero!</p>
                <span id='main'>Main Apps</span>
                <div className="apps">
                    <div className="app1 link">
                        <a href="https://www.linkedin.com/in/bhavya-rathore/" target='_blank'>
                        <img src= {linkimg} alt="" />
                        <span>Linkedin</span>
                        </a>
                    </div>
                    <div className="app1">
                        <a href= "https://github.com/bhvyeahh" target='_blank'>
                        <img src={gitimg} alt="" />
                        Github
                        </a>
                    </div>
                    <div className="app1 ">
                        <a href="https://x.com/Bhvyeahh" target='_blank'>

                        <img src={twitimg} alt="" />
                        Twitter
                        </a>
                    </div>
                    <div className="app1">
                        <a href="https://www.instagram.com/bhv.yeahh/" target='_blank'>
                        <img src={instaimg} alt="" />
                        Instagram
                        </a>
                    </div>
                </div>
            </div>
                </FadeIn>
        </div>

    </div>
    </div>
  )
}

export default About
