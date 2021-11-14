import './style.scss'
export default function FifthSection(props) {
    return (
        <div className="containerSatisfaction">
            <div className='mainStatisfaction'>
                <img src={props.imgSrc} alt='' />
                <div>
                    <div className="fifth" style={{fontSize: "30px", fontWeight: "bold", marginLeft: "40px"}}>
                        {props.title}
                    </div>
                    <span  className="grey fifthSub" style={{marginLeft: "40px"}}>{props.subtitle}</span>
                </div>
                <div className="buttonQuote">
                    Get your free Quote
                </div>
            </div>
        </div>
    )
}