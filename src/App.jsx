import { useState } from 'react'
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
    <>
      <Header menuClick={menuClick} menuClicked={menuClicked}/>
      <Menu menuClicked={menuClicked} />
      <div className='fixed w-screen h-full mt-36 bottom-0 py-2 px-3 md:p-4 z-10'>
        <div className={`h-full w-full ${menuClicked ? 'bg-palatte-bg-secondary' : 'bg-palatte-bg'} transition-all duration-1000 overflow-x-scroll`}>
          <div className='pt-10 px-10 md:pt-16 md:px-16'>
            <Home menuClicked={menuClicked}/>
          </div>
        </div>
      </div>
    </>

  )
}

export default App
