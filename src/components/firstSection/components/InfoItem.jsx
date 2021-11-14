import './infoItem.scss'

export default function InfoItem(props) {
    return (
        <div className="infoContainer">
            <img src='https://firebasestorage.googleapis.com/v0/b/fincorp-ac859.appspot.com/o/firstSection%2Ftick.png?alt=media&token=5775ccda-d347-47f0-bdcc-26541ffd4e39' alt='' />
            <div className='infoTextContent'>
                <div className="itemTextTitle">{props.title}</div>
                <span className="grey">{props.content}</span>
            </div>
        </div>
    )
}