import FifthSection from '../fifthSection/FifthSection'
import SeventhCardItem from './components/SeventhCardItem'
import './style.scss'

export default function SeventhSection(props) {
    return (
        <div className="seventhContainer">
            <div className="seventhInfo">
                <SeventhCardItem title="What are the documents required for claiming" />
                <SeventhCardItem title="Which are the network hospitals in your vicinity" />
                <SeventhCardItem title="Will I get covared for my pre-existing illnesses?" />
                <SeventhCardItem title="is maternity covered in health insurance policies"/>
            </div>
            <FifthSection imgSrc='https://firebasestorage.googleapis.com/v0/b/fincorp-ac859.appspot.com/o/sevenSection%2Fshield-1.png?alt=media&token=09c450aa-ed48-4fb1-9bf3-2bcb0512d1db' title="Insurance made easy" subtitle="At fincorp, we are commited to provide top-notch services to our customers." />
        </div>
    )
}