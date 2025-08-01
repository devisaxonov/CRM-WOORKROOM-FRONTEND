import Header from "../components/Header"
import SideBar from "../components/SideBar"
import {Outlet} from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
          <SideBar />
          <div>
          <Header />
              <Outlet/>
          </div>
    </>
  )
}

export default RootLayout
