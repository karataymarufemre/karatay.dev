function MenuButton(props) {
    return (<>
        <div className='flex mt-10'>
            <a className='' href={props.href} onClick={()=>props.onClickProp()}>{props.name}</a>
        </div>
    </>)
}

export default MenuButton;