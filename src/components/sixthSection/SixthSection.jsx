import SixthCard from "./components/SixthCard"
import './outils/style.scss'
export default function SixthSection() {
    return (
        <div className="honestContainer">
            <div className="honestTitle">
                <h1>Honest Princing</h1>
                <span>Simple & Honest pricing. No hidden fees.</span>
            </div>
            <div className="honestCardContent">
            <div className="sixthCardContainer centerCard ">
                    <h2>Basic</h2>
                    <div className="circleDollar">
                        <div>
                            <span>$</span>
                            <span>9</span>
                        </div>
                    </div>
                    <div>
                        <div>Rapidiously stategize value</div>
                        <div>Progressively visualize leadership</div>
                        <div>Equity invested supply chains</div>
                    </div>
                    <div className='sixthButton' style={{ background: "#ffae8c" }}>
                        Choose Plan
                    </div>
                </div>
                <SixthCard buttonColor="#26cfa1" title="Basic" price="9" />
                <SixthCard buttonColor="#438aff" title="Basic" price="9" />
            </div>
            <span style={{margin: "30px"}}>*Prices shown per morth if paid annually</span>
        </div>
    )
}