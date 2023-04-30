function Project(props) {
    return (<>
        <div className="flex flex-col md:flex-row pt-4 md:px-8 font-mono w-full justify-between font-bold">
            <a className="" href={props.link} target="_blank"><span className="text-palette-not-bg">&#x2022;</span> {props.name} &#128279;</a>
            <p className="">{props.dates}</p>
        </div>

        <div className="flex flex-row pt-4  md:px-9 font-mono w-full text-left">
            <div className="flex w-0.5 border-palette-not-bg border rounded-full"></div>
            <div className="pl-6 py-2">
                {props.bullets.map((bullet, index) => {
                    return (
                        <p key={index} className="py-0.5"><span className="text-palette-not-bg">&#x2022;</span> {bullet}</p>
                    );
                })}
            </div>
        </div>
    </>)
}

export default Project;