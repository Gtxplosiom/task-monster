import {useState} from "react";
import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx'
import DashboardPanel from './DashboardPanel.jsx'
import './styles/DashboardLayout.css'
import { EnemiesMenu, JourneyMenu, TrophiesMenu } from './Menus.jsx'

export const DashboardLayout = () => {
  const [headerTitle, setHeaderTitle] = useState('Enemies')
  const [dashboardMenu, setDashboardMenu] = useState(<EnemiesMenu />)
  const [dashboardContent, setDashboardContent] = useState('Current Enemies')

  const handleLinkClick = (title, menu, content) => {
    setHeaderTitle(title)
    setDashboardMenu(menu)
    setDashboardContent(content)
  }

  return (
    <div className="dashboard-container">
        <Header className="header" title={headerTitle}/>
        <Sidebar className="sidebar" onLinkClick={handleLinkClick}/>
        <DashboardPanel className="dashboard-panel" menu={dashboardMenu} content={dashboardContent}/>
    </div>
  )
}

export default DashboardLayout
