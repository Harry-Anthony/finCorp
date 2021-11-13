import React from 'react'
import logo from './outils/logo.png'
import './outils/firstSectionStyle.scss'
import InfoItem from './components/InfoItem'

export default function FirstSection() {
    return (
        <div className="containerFirstSection">
            <div className="topFirstSection">
                <header className="topBar">
                    <img src='https://firebasestorage.googleapis.com/v0/b/fincorp-ac859.appspot.com/o/firstSection%2Flogo.png?alt=media&token=16c04ab4-691f-44e3-9aab-1da850da8ac7' alt="" className="logo"/>
                    <nav>
                        <ul>
                            <li><a href='#'>For you & family</a></li>
                            <li><a href='#'>For business</a></li>
                        </ul>
                    </nav>
                </header>
                <img src='https://firebasestorage.googleapis.com/v0/b/fincorp-ac859.appspot.com/o/firstSection%2Fbanner-1.png?alt=media&token=0043a377-7019-4042-9e54-84ea05c43d83' alt='' className="banner" />
                <div className='helloContent'>
                    <span>HELLO, WE ARE FINCORP</span>
                    <h1>
                        Insurance <br /> made easy
                    </h1>
                    <div className="myButton">
                        Get your free Quote
                    </div>
                </div>
            </div>

            <div className='titleContent'>
                <h1>A new take on insurance</h1>
                <span>Great for individuals and business</span>
            </div>

            <div className="bottomFirstSection">
                <img src='https://firebasestorage.googleapis.com/v0/b/fincorp-ac859.appspot.com/o/firstSection%2Fhealth-family-1.png?alt=media&token=80a76cac-07d9-495c-b689-c030051f6d65' alt="" className="bgHealth" />
                <aside>
                    <p className="headTitle">Monotonectally deploy deploy seamless data and resource maximizing systems.</p>
                    <p className="greating">Great for individuals and small families up to 4 members.</p>
                    <p>
                        A strong, up to date, employee benefits health insurance programm is vital for attracting and retaining good employees. It 
                        takes diligence, creativity and attention to detail to ensure you getting the best "bang for your buck" each and year
                    </p>
                    <div className="infoContentFirstSection">
                        <InfoItem title="COMPREHENSIVE INSURANCE" content="Dynamically repurpose e-business users rather than granular products" />
                        <InfoItem title="SUPPORT IS JUST A CALL AWAY" content="Rapidiously customize value-added platforms action items" />
                        <InfoItem title="SAY GOODBYE TO PAPERWORK" content="Globally deliver economically sound communities relationships" />
                    </div>
                </aside>
                
            </div>
        </div>
    )
} 