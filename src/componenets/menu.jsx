import MenuButton from './menu/menubutton';
import MenuLogoSection from './menu/menulogosection';
function Menu(props) {
    return (
        <div className={`fixed w-screen px-3 md:pt-4 md:px-4 
        z-20 mt-32 
        flex h-screen
        transition-all duration-500 flex-col overflow-hidden overflow-x-hidden 
        ${props.menuClicked ? "translate-x-0" : "translate-x-full"} 
        `}>
            <div className={`transition-all h-full pl-10 duration-1000 ${props.menuClicked ? 'bg-palatte-bg-secondary' : 'bg-palatte-bg'}`}>
                <MenuLogoSection/>
                <div className='flex flex-col mt-8 w-128 h-full text-palette-not-bg text-3xl font-bold tracking-wider'>
                    <MenuButton 
                        href="/"
                        name="HOME"
                    />
                    <MenuButton 
                        href="#aboutMe"
                        name="ABOUT"
                        onClickProp={()=>props.menuClick(props.menuClicked)}
                    />
                    <MenuButton 
                        href="/"
                        name="PROJECTS"
                    />
                    <MenuButton 
                        href="/"
                        name="LINKS"
                    />
                </div>
            </div>
            
        </div>
    );
}

export default Menu;