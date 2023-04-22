import AboutMe from "./about/aboutme";
import ExperienceSection from "./experience/experiencesection";
import Scroll from "./scroll";

function Home(props) {
    return (
        <div className={`flex flex-col  w-full mt-64 md:mt-96 h-full transition-all duration-1000 md:text-center md:items-center ${props.menuClicked ? 'visible' : 'visible'}`}>
            <h1 className="text-3xl">Hi, I'm <span className="font-bold text-palette-not-bg animate-pulse-slow">Maruf Emre Karatay.</span> <br/> A software engineer based in Istanbul, Turkey.</h1>
            <Scroll/>
            <AboutMe/>
            <Scroll/>
            <ExperienceSection/>
        </div>
    );
}

export default Home;