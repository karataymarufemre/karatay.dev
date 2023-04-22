import { FaEnvelope, FaGithub, FaLinkedinIn, } from 'react-icons/fa';

function MenuLogoSection(props) {
    return (
        <div className="flex w-full h-8 items-center">
            <div className="flex w-24 h-1 border-palette-not-bg border-2 rounded-full"></div>
            <a href='https://github.com/karataymarufemre' target="_blank" className='relative flex align-items-center ml-4'>
                <FaGithub size={24} />
            </a>
            <a href='https://www.linkedin.com/in/karataymarufemre/' target="_blank"  className='relative flex align-items-center ml-3'>
                <FaLinkedinIn size={24} />
            </a>
            <a href='mailto:karataymarufemre@gmail.com?subject=Reaching%20from%20karatay.dev' target="_blank" className='relative flex align-items-center ml-3'>
                <FaEnvelope size={24} />
            </a>
        </div>
    )
}

export default MenuLogoSection;