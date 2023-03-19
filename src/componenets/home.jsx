function Home(props) {
    return (
        <div className={`flex flex-col  w-full mt-64 h-full transition-all duration-1000 md:text-center md:items-center ${props.menuClicked ? 'visible' : 'visible'}`}>
            <h1 className="text-3xl">Hi, I'm <span className="font-bold text-palette-not-bg animate-pulse-slow">Maruf Emre Karatay.</span> <br/> A software engineer based in Istanbul, Turkey.</h1>
            <div className="text-xs text-center mt-16 tracking-widest-2xl text-palette-not-bg">SCROLL</div>
            <div className="flex items-center w-full h-80 justify-center mt-8">
                <div className="flex w-0.5 border-palette-not-bg border h-full rounded-full"></div>
            </div>
            <div className="flex flex-col pt-12 md:items-center md:w-1/2 pb-16">
                <div className="border-b w-1/2 pb-4 rounded-sm border-b-palette-not-bg">
                    <h1 className="text-3xl pl-2 font-bold text-palette-not-bg">About Me</h1>
                </div>
                <p className="pt-4 font-mono">Hey there!&#128075; I'm a backend software engineer with a degree in Computer Science and Engineering. Currently, I'm developing high-performance backend trading services at Softtech, utilizing my knowlege in Java, Spring Boot, SQL and Kafka. I also like writing frontend and admire cool UI designs. &#127881;</p>
                
            </div>
        </div>
    );
}

export default Home;