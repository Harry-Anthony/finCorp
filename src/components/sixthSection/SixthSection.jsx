import SixthCard from "./components/SixthCard"
import './outils/style.scss'
export default function SixthSection() {
    return (
        <div className="honestContainer">
            <div className="honestTitle">
                <h1>Honest Princing</h1>
                <span className="grey">Simple & Honest pricing. No hidden fees.</span>
            </div>
            <div className="honestCardContent">
                <div className="sixthCardContainer centerCard ">
                    <div className="centerCardTitle">
                        <div className="sixthCardTitle" style={{color: "#438aff"}}>PROFESSIONAL</div>
                        <div className="save">SAVE 20%</div>
                    </div>
                    <div className="circleDollar" style={{background: "#ffae8d", color: "white"}}>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <span className="dollar">$</span>
                            <span className='price'>19</span>
                        </div>
                    </div>
                    <div>
                        <div className="grey" style={{margin: "15px 0px"}}>Rapidiously stategize value</div>
                        <div className="grey" style={{margin: "15px 0px"}}>Progressively visualize leadership</div>
                        <div className="grey" style={{margin: "15px 0px"}}>Equity invested supply chains</div>
                        <div className="grey" style={{margin: "15px 0px"}}>Proactively leverage</div>
                    </div>
                    <div className='sixthButton' style={{ background: "#ffae8c" }}>
                        Choose Plan
                    </div>
                </div>
                <SixthCard titleColor="#26cfa2" textColor="#6ecab1" color="#beffdb" buttonColor="#26cfa1" title="BASIC" price="9" />
                <SixthCard titleColor="#ffae8c" textColor="#77c0ed" color="#d7f4ff" buttonColor="#438aff" title="PRENIUM" price="49" />
            </div>
            <span className="grey" style={{ margin: "80px 0px" }}>*Prices shown per morth if paid annually</span>
        </div>
    )
}