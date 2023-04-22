function HeaderMenuButton(props) {
    return (<>
        <div className={`px-4 h-3/4 items-center hidden md:flex ${props.isFirst ? 'border-l border-l-black': ''}`}>
            { props.href === null || props.href === undefined ? <button className='hover:tracking-widest' onClick={()=>props.onClickProp()}>{props.name}</button> :
                <a className='hover:tracking-widest' href={props.href}>{props.name}</a>
            }
            
        </div>
    </>)
}

export default HeaderMenuButton;