import { FaEnvelope, FaGithub, FaLinkedinIn, } from 'react-icons/fa';
function Menu(props) {
    return (
        <div className={`fixed w-screen px-3 md:pt-4 md:px-4 
        z-20 mt-48 
        flex h-screen
        transition-all duration-500 flex-col overflow-hidden overflow-x-hidden 
        ${props.menuClicked ? "translate-x-0" : "translate-x-full"} 
        `}>
            <div className={`transition-all h-full pl-10 duration-1000 ${props.menuClicked ? 'bg-palatte-bg-secondary' : 'bg-palatte-bg'}`}>
                <div className="flex w-full h-8 items-center">
                    <div className="flex w-24 h-1 border-palette-not-bg border-2 rounded-full"></div>
                    <a href='https://github.com/karataymarufemre' className='relative flex align-items-center ml-4'>
                        <FaGithub size={24} />
                    </a>
                    <a href='https://www.linkedin.com/in/karataymarufemre/'  className='relative flex align-items-center ml-3'>
                        <FaLinkedinIn size={24} />
                    </a>
                    <a href='mailto:karataymarufemre@gmail.com?subject=Reaching%20from%20karatay.dev' className='relative flex align-items-center ml-3'>
                        <FaEnvelope size={24} />
                    </a>
                </div>
                <div className='flex flex-col mt-8 w-128 h-full text-palette-not-bg text-3xl font-bold tracking-wider'>
                    <div className='flex mt-8'>
                        <a className='' href='/'>HOME</a>
                    </div>
                    <div className='flex mt-16'>
                        <a className='' href='/'>ABOUT</a>
                    </div>
                    <div className='flex mt-16'>
                        <a className='' href='/'>PROJECTS</a>
                    </div>
                    <div className='flex mt-16'>
                        <a className='' href='/'>LINKS</a>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Menu;