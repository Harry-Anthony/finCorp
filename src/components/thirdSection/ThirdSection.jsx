import ThirdCard from "./components/ThirdCard"
import './outils/style.scss'
import blue from './outils/after-blue.png'
import pink from './outils/after-pink.png'
export default function ThirdSection() {
    return (
        <div className="thirdContainer">
            <div className="claimTitle">
                <h1>Simplified Claims</h1>
                <span>Easy as One, Two, Three</span>
            </div>
            <div className="claimContent">
                <ThirdCard color="#aff3ff" textColor="#97e0ee" id='1' title="Report Claim" content="Lorem ipsum dolor sit amet, consectetur adipiscing eli.Proir quis nunc vitae velit rutrum suscipitnon et"/>
                <img src='https://firebasestorage.googleapis.com/v0/b/fincorp-ac859.appspot.com/o/thirdSection%2Fafter-blue.png?alt=media&token=61c95ead-f92c-46ce-b329-31798a5cbb6b' />
                <ThirdCard color="#fad1ff" textColor="#e8b3ec" id='2' title="Claim Processing" content="Lorem ipsum dolor sit amet, consectetur adipiscing eli.Proir quis nunc vitae velit rutrum suscipitnon et"/>
                <img src='https://firebasestorage.googleapis.com/v0/b/fincorp-ac859.appspot.com/o/thirdSection%2Fafter-pink.png?alt=media&token=a580228e-8a99-4c95-ba9f-9240c5552352' />
                <ThirdCard color="#daffd3" textColor="#b8e6ad" id='3' title="Final Settlement" content="Lorem ipsum dolor sit amet, consectetur adipiscing eli.Proir quis nunc vitae velit rutrum suscipitnon et"/>
            </div>
        </div>
    )
}