import { useCallback, useRef, useState } from 'react'
import './style.scss'

export default function SeventhCardItem(props) {
    const [maxheight, setMaxHeight] = useState("0px")
    let clickStatus = useRef(true)
    const [borderWidth, setBorderWidth] = useState(0)
    const [padd, setPadd] = useState(0)
    const [angle, setAngle] = useState(0)
    const clickToShow = useCallback(()=>{
        if (clickStatus.current)
        {
            clickStatus.current = false;
            setBorderWidth(1)
            setMaxHeight("150px");
            setPadd(12)
            setAngle(180)
        }
        else  
        {
            clickStatus.current = true;
            setBorderWidth(0)
            setMaxHeight("0px")
            setPadd(0)
            setAngle(0)
        }
    }, [])
    return (
        <div className="sevenCardContainer">
            <div className="sevencardTitle">
                <h5 style={{color: "#47b4ff"}}>{props.title}</h5>
                <span className="cursor" style={{transform: "rotate("+angle+"deg)", color: "#a3a6b3"}} onClick={clickToShow}>^</span>
            </div>
            <div className="sevenCardContent" style={{maxHeight: maxheight, border: "solid #a3a6b3 "+borderWidth+"px", padding: padd+"px", color: "#a3a6b3"}}>
                A pre-authorization form mis required in case of
                cashless claims which are to be submited to the TPA.
                Other documents might also be required and you should have
                the knowledge of the required documents
            </div>
        </div>
    )
}