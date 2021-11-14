import EigthSection from "./components/eighth/EightthSection";
import FifthSection from "./components/fifthSection/FifthSection";
import FirstSection from "./components/firstSection/FirstSection";
import FourthSection from "./components/fourthSection/FourthSection";
import SecondSection from "./components/secondSection/SecondSection";
import SeventhSection from "./components/seventhSection/SeventhSection";
import SixthSection from "./components/sixthSection/SixthSection";
import ThirdSection from "./components/thirdSection/ThirdSection";
function App() {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection imgSrc='https://firebasestorage.googleapis.com/v0/b/fincorp-ac859.appspot.com/o/fifthSection%2Fshield-2.png?alt=media&token=63c26aaa-fb97-415d-a92b-df9a7239d842' title="100% Satisfaction Guarantee" subtitle="we ofter no questions asked refund policy for 14 days from the policy date." />
      <SixthSection />
      <SeventhSection />
      <EigthSection />
      <br />
    </div>
  );
}

export default App;
//https://hardcore-ptolemy-f8fd33.netlify.app/