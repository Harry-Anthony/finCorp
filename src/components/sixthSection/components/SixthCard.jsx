
import './sixthCardStyle.scss'
export default function SixthCard(props) {
    return (
        <div className="sixthCardContainer ">
            <h2>{props.title}</h2>
            <div className="circleDollar">
                <div>
                    <span>$</span>
                    <span>{props.price}</span>
                </div>
            </div>
            <div>
                <div>Rapidiously stategize value</div>
                <div>Progressively visualize leadership</div>
                <div>Equity invested supply chains</div>
            </div>
            <div className='sixthButton' style={{background: props.buttonColor}}>
                Choose Plan
            </div>
        </div>
    )
}