import AboutMe from "./about/aboutme";
import EducationSection from "./education/educationsection";
import ExperienceSection from "./experience/experiencesection";
import ProjectsSection from "./projects/projectssection";
import Scroll from "./scroll";

const myText = {
    "about": "Hey there!👋 I'm a backend software engineer with a degree in Computer Science and Engineering. Currently, I'm developing Java - Spring Boot backend services for a new trading platform at my full time job, utilizing my knowlege in Java, Spring Boot, SQL and Kafka. I also like writing frontend code and admire cool UI designs. 🎉",
    "experience": [
        {
            "company": "Softtech",
            "dates": "Apr. 2022 - Present",
            "role": "Software Engineer, Capital Markets Team",
            "bullets": [
                "Developed and maintained microservices from the ground up.", 
                "Worked collaboratively with other teams. Led summer internship projects.", 
                "Boosted my knowledge in capital markets, stock exchange, public offerings, funds and FIX messages.",
                "Designed and managed projects using Java 11, Spring Framework, Kafka, Hazelcast, Jenkins, Junit, Mockito."
            ]
        },
        {
            "company": "NAYA Teknoloji",
            "dates": "Sep. 2021 - Apr. 2022",
            "role": "Software Engineer, Corporate Credits Team",
            "bullets": [
                "Created robust API and service solutions for one of the biggest corporate banks in Turkey.", 
                "Worked collaboratively with a large team, leveraging my knowledge of tools such as Git, Jira.", 
                "Extended my knowledge in banking and other fin-tech industries.",
                "Designed and maintained projects using Java, Oracle Database, iBatis and Swing."
            ]
        },
        {
            "company": "DesenERP",
            "dates": "Aug. 2020 - Sep. 2020",
            "role": "Intern Software Engineer, Mobile",
            "bullets": [
                "Designed a cross-platform mobile application for a delivery services company in Turkey.", 
                "Leveraged technologies such as Flutter and Dart to create a dynamic mobile front end.", 
            ]
        }
    ],
    "education": [
        {
            "company": "Yeditepe University",
            "dates": "Sep. 2017 - Jan. 2022",
            "role": "B.E. in Computer Science and Engineering, Full Scholarship",
            "bullets": [
                "Graduated with honours, 100% English.", 
                "Thesis: Multi-Agent Competitive Reinforcement Learning on Snake Game."
            ]
        },
        {
            "company": "Eberhard Karls University of Tübingen",
            "dates": "Fall 2020",
            "role": "B.S. in Computer Science, Erasmus Exchange Student",
            "bullets": [
                "Coursework: Deep Learning; Artificial Intelligence; Data Literacy; Advanced Topics in Computer Vision."
            ]
        }
    ]
}

function Home(props) {
    return (
        <div id="home" className={`flex flex-col  w-full mt-64 md:mt-96 h-full transition-all duration-1000 md:text-center md:items-center ${props.menuClicked ? 'visible' : 'visible'}`}>
            <h1 className="text-3xl">Hi, I'm <span className="font-bold text-palette-not-bg animate-pulse-slow">Maruf Emre Karatay.</span> <br/> A software engineer based in Istanbul, Turkey.</h1>
            <Scroll/>
            <AboutMe content={myText.about}/>
            <Scroll/>
            <ExperienceSection content={myText.experience}/>
            <Scroll/>
            <EducationSection content={myText.education}/>
            <Scroll/>
            <ProjectsSection/>
        </div>
    );
}

export default Home;