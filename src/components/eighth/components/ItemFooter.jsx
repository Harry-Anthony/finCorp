import './style.scss'

export default function ItemFooter(props){
    return (
        <div className="containerItemFoot">
            <h4>{props.title}</h4>
            {
                props.text.map((element)=><div>{element}</div>)
            }
        </div>
    )
}