import FadeInSection from "../fadeinsection";

function AboutMe(props) {
    return (<>
        <FadeInSection className="flex w-full md:w-1/2">
            <div className="flex flex-col pt-12 md:items-center  pb-16">
                <div className="border-b w-1/2 pb-4 rounded-sm border-b-palette-not-bg">
                    <h1 id="aboutMe" className="text-3xl pl-2 font-bold text-palette-not-bg scroll-mt-72">About Me</h1>
                </div>
                <p className="pt-4 font-mono">Hey there!&#128075; I'm a backend software engineer with a degree in Computer Science and Engineering. Currently, I'm developing Java - Spring Boot backend services for a new trading platform at my full time job, utilizing my knowlege in Java, Spring Boot, SQL and Kafka. I also like writing frontend code and admire cool UI designs. &#127881;</p>
            </div>
        </FadeInSection>
    </>)
}

export default AboutMe;