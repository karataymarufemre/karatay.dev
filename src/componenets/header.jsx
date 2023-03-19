import logo from '../assets/logo-cropped.png'
function Header(props) {
    return (
        <div className={`fixed w-screen 
        pt-2 px-3 md:pt-4 md:px-4 
        z-20 overflow-hidden `}>
            <div className={`flex h-full w-full px-10 pt-16 pb-4 transition-all duration-1000  ${props.menuClicked ? 'bg-palatte-bg-secondary' : 'bg-palatte-bg'}`}>
                <div className='flex hover:scale-110 z-30'>
                    <a href='/' className='w-full h-full'>
                        <img src={logo} className="w-12 h-16 flex"/>
                    </a>
                </div>
                <div className='flex ml-4 items-center font-mono z-30'>
                    <button className='flex px-4 h-3/4 items-center border-l border-l-black' onClick={()=>props.menuClick(props.menuClicked)}>
                        <h1 className='hover:tracking-widest'>{props.menuClicked ? 'CLOSE' : 'MENU'}</h1>
                    </button>
                </div>
                <div className='flex items-center ml-auto font-mono z-30'>
                    <button className='flex h-3/4 items-center'>
                        <h1 className='hover:tracking-widest'>CONTACT</h1>
                    </button>
                </div>
            </div>

          </div>
    );
}

export default Header;