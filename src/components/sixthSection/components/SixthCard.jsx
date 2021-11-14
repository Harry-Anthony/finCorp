
import './sixthCardStyle.scss'
export default function SixthCard(props) {
    return (
        <div className="sixthCardContainer ">
            <div className="sixthCardTitle" style={{ color: props.titleColor }}>{props.title}</div>
            <div className="circleDollar" style={{ background: props.color }}>
                <div style={{ color: props.textColor, display: "flex", alignItems: "center" }}>
                    <span className="dollar">$</span>
                    <span className="price">{props.price}</span>
                </div>
            </div>
            <div>
                <div className="grey" style={{margin: "15px 0px"}}>Rapidiously stategize value</div>
                <div className="grey" style={{margin: "15px 0px"}}>Progressively visualize leadership</div>
                <div className="grey" style={{margin: "15px 0px"}}>Equity invested supply chains</div>
            </div>
            <div className='sixthButton' style={{ background: props.buttonColor }}>
                Choose Plan
            </div>
        </div>
    )
}