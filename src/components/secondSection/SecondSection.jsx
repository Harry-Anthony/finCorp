import './outils/secondSectionStyle.scss'
import SecondSectionCard from './components/SecondSectionCard';
export default function SecondSection(){
    return (
        <div className="containerSecondSection">
            <div className="busnessTitle">
                <h1>Choose your Insurance</h1>
                <span>Keep your life smile, Safe, and Wealthy</span>
            </div>
            <div className='containerSecondCard'>
                <SecondSectionCard color="#b0f3ff" image='https://firebasestorage.googleapis.com/v0/b/fincorp-ac859.appspot.com/o/secondSection%2Fhome-insurance-1.png?alt=media&token=1042c2cd-d4a4-460c-bc22-1217e73a4687' title="Home Insurance" content="Insurance can have various effects on society through the way that it changes who bears the const of losses and damage." />
                <SecondSectionCard color="#fbd1ff" image='https://firebasestorage.googleapis.com/v0/b/fincorp-ac859.appspot.com/o/secondSection%2Fcar-insurance-1.png?alt=media&token=3faf3cdd-3a6b-4788-a0c9-514d48707ef0' title="Car Insurance" content="Insurance can have various effects on society through the way that it changes who bears the const of losses and damage." />
                <SecondSectionCard color="#d9ffd3" image='https://firebasestorage.googleapis.com/v0/b/fincorp-ac859.appspot.com/o/secondSection%2Flife-insurance-1.png?alt=media&token=88528fd9-6faf-4ec8-97fc-c684990621d8' title="Life Insurance" content="Insurance can have various effects on society through the way that it changes who bears the const of losses and damage." />
                <SecondSectionCard color="#fff4b4" image='https://firebasestorage.googleapis.com/v0/b/fincorp-ac859.appspot.com/o/secondSection%2Fbusiness-insurance-1.png?alt=media&token=7485de5f-3353-4cc3-9c0d-b54e4818f2d0' title="Business Insurance" content="Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage." />
                <SecondSectionCard color="#ffdad1" image='https://firebasestorage.googleapis.com/v0/b/fincorp-ac859.appspot.com/o/secondSection%2Ftravel-insurance-1.png?alt=media&token=398d94cf-ca13-4a34-9354-4bfc91d17c7e' title="Travel Insurance" content="Insurance can have various effects on society through the way that it changes who bears the const of losses and damage." />
                <SecondSectionCard color="#d3d3ff" image='https://firebasestorage.googleapis.com/v0/b/fincorp-ac859.appspot.com/o/secondSection%2Fother-insurance-1.png?alt=media&token=b4f85a33-02ec-4f26-80a6-f9a60acdc28d' title="Other Insurance" content="Insurance can have various effects on society through the way that it changes who bears the const of losses and damage." /> 
            </div>
        </div>
    )
}