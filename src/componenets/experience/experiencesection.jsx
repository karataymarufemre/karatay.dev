import FadeInSection from "../fadeinsection";
import Experience from "./experience";

function ExperienceSection(props) {
    return (<>
        <FadeInSection className="flex w-full md:w-1/2">
            <div className="flex flex-col w-full pt-12 md:items-center  pb-16">
                <div className="border-b md:w-1/2 pb-4 rounded-sm border-b-palette-not-bg">
                    <h1 id="experience" className="text-3xl pl-2 font-bold text-palette-not-bg scroll-mt-64">Experience</h1>
                </div>
                {props.content.map((obj, index) => {
                    return (
                        <Experience
                            key={index}
                            company={obj.company}
                            dates={obj.dates}
                            role={obj.role}
                            bullets={obj.bullets}
                        />
                    );
                })}
            </div>
        </FadeInSection>
    </>)
}

export default ExperienceSection;