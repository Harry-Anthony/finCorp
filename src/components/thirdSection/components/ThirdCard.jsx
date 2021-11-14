import './style.scss'
export default function ThirdCard(props) {
    return(
            <div className="contentClaimItem">
                <div className="circle" style={{background: props.color, color: props.textColor}}>{props.id}</div>
                <h2>{props.title}</h2>
                <span className="grey">{props.content}</span>
            </div>
    )
}