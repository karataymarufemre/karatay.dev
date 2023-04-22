import FadeInSection from "../fadeinsection";
import Experience from "./experience";

function ExperienceSection(props) {
    return (<>
        <FadeInSection className="flex w-full md:w-1/2">
            <div className="flex flex-col w-full pt-12 md:items-center  pb-16">
                <div className="border-b w-1/2 pb-4 rounded-sm border-b-palette-not-bg">
                    <h1 id="experience" className="text-3xl pl-2 font-bold text-palette-not-bg scroll-mt-64">Experience</h1>
                </div>
                <Experience
                    company="Softtech"
                    dates="Apr. 2022 - Present"
                    role="Software Engineer, Capital Markets Team"
                    bullets={[
                        "Developed and maintained microservices from the ground up.", 
                        "Worked collaboratively with other teams. Led summer internship projects.", 
                        "Boosted my knowledge in capital markets, stock exchange, public offerings, funds and FIX messages.",
                        "Designed and managed projects using Java 11, Spring Framework, Kafka, Hazelcast, Jenkins, Junit, Mockito."
                    ]}
                />
                <Experience
                    company="NAYA Teknoloji"
                    dates="Sep. 2021 - Apr. 2022"
                    role="Software Engineer, Corporate Credits Team"
                    bullets={[
                        "Created robust API and service solutions for one of the biggest corporate banks in Turkey.", 
                        "Worked collaboratively with a large team, leveraging my knowledge of tools such as Git, Jira.", 
                        "Extended my knowledge in banking and other fin-tech industries.",
                        "Designed and maintained projects using Java, Oracle Database, iBatis and Swing."
                    ]}
                />
                <Experience
                    company="DesenERP"
                    dates="Aug. 2020 - Sep. 2020"
                    role="Intern Software Engineer, Mobile"
                    bullets={[
                        "Designed a cross-platform mobile application for a delivery services company in Turkey.", 
                        "Leveraged technologies such as Flutter and Dart to create a dynamic mobile front end.", 
                    ]}
                />

            </div>
        </FadeInSection>
    </>)
}

export default ExperienceSection;