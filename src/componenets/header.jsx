import { useState } from 'react';
import { handleScroll } from '../utils/scroll';
import HeaderMenuButton from './menu/headermenubutton';

function Header(props) {
    const [menuHover, setMenuHover] = useState(false);

    return (
        <div className={`fixed w-screen 
        pt-2 px-3 md:pt-4 md:px-4 
        z-20 overflow-hidden`}>
            <div className={`flex h-full w-full px-10 pt-16 pb-4 transition-all duration-1000  ${props.menuClicked ? 'bg-palatte-bg-secondary' : 'bg-palatte-bg'}`}>
                <div className='flex z-30' onMouseEnter={() => setMenuHover(true)} onMouseLeave={() => setMenuHover(false)}>
                    <a href='/' className='w-full h-full flex flex-row items-center font-mono'>
                        <h1 className={`${menuHover ? 'tracking-widest': '' }`}>KARATAY.DEV</h1>
                    </a>
                </div>
                <div className='flex ml-4 items-center font-mono z-30'>
                    <button className='flex md:hidden px-4 h-3/4 items-center border-l border-l-black' onClick={()=>props.menuClick(props.menuClicked)}>
                        <h1 className='hover:tracking-widest'>{props.menuClicked ? 'CLOSE' : 'MENU'}</h1>
                    </button>
                    <HeaderMenuButton 
                        name="ABOUT ME"
                        isFirst="true"
                        onClickProp={()=>handleScroll("aboutMe")}
                    />
                    <HeaderMenuButton 
                        name="EXPERIENCE"
                        onClickProp={()=>handleScroll("experience")}
                    />
                    <HeaderMenuButton 
                        name="PROJECTS"
                        href="/"
                    />
                    <HeaderMenuButton 
                        name="LINKS"
                        href="/"
                    />
                </div>
                <div className='flex items-center ml-auto font-mono z-30'>
                    <a className='flex h-3/4 items-center' href='mailto:karataymarufemre@gmail.com?subject=Reaching%20from%20karatay.dev' target="_blank">
                        <h1 className='hover:tracking-widest'>CONTACT</h1>
                    </a>
                </div>
            </div>

          </div>
    );
}

export default Header;