import { useEffect, useLayoutEffect, useState } from 'react'
import Header from './componenets/header'
import Home from './componenets/home';
import Menu from './componenets/menu'

function App() {
  const [menuClicked, setMenuClicked] = useState(false)

  const menuClick = (value) => {
    if(value==false) {
      setMenuClicked(true);
    } else {
      setMenuClicked(false);
    }
  };

  return (
    <div>
      <Header menuClick={menuClick} menuClicked={menuClicked}/>
      <Menu menuClicked={menuClicked} menuClick={menuClick} />
      <div  className='fixed w-screen h-full mt-36 bottom-0 z-10'>
        <div id="a1" className={`h-full w-full ${menuClicked ? 'bg-palatte-bg-secondary' : 'bg-palatte-bg'} transition-all duration-1000 overflow-x-scroll`}>
          <div className='pt-10 px-10 md:pt-16 md:px-16'>
            <Home menuClicked={menuClicked}/>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
