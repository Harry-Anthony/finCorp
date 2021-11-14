import ItemFooter from "./components/ItemFooter"
import './style.scss'
import {textFoot}  from './outils/text'
export default function EigthSection() {
    return (
        <div className='eigthContainer'>
            <div className="contentItemFoot">
                <ItemFooter text={textFoot[0]} title="ADDRESS" />
                <ItemFooter text={textFoot[1]} title="FOLLOW US"/>
                <ItemFooter text={textFoot[2]}title="ABOUT US" />
            </div>
            <h5 style={{marginBottom: "50px", color: "#9fa3b1"}}>
                Copyright c 2019. Insurance LLC
            </h5>
        </div>
    )
}