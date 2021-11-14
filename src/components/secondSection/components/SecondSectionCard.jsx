import './secondSectionCardStyle.scss'
export default function SecondSectionCard(props) {
    return (
        <div className="secondCard">
            <div className="img" style={{background: props.color}}>
                <img src={props.image} alt='' />
            </div>
            <h2>{props.title}</h2>
            <p className="grey">{props.content}</p>
        </div>
    )
}