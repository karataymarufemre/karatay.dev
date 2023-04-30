import FadeInSection from "../fadeinsection";

function AboutMe(props) {
    return (<>
        <FadeInSection className="flex w-full md:w-1/2">
            <div className="flex flex-col pt-12 md:items-center  pb-16">
                <div className="border-b md:w-1/2  pb-4 rounded-sm border-b-palette-not-bg">
                    <h1 id="aboutMe" className="text-3xl pl-2 font-bold text-palette-not-bg scroll-mt-72">About Me</h1>
                </div>
                <p className="pt-4 font-mono">{props.content}</p>
            </div>
        </FadeInSection>
    </>)
}

export default AboutMe;