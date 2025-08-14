import './styles/Sidebar.css'
import { EnemiesMenu, JourneyMenu, TrophiesMenu } from './Menus.jsx'
import { EnemiesContent, TrophiesContent, JourneyContent } from './DashboardContents.jsx'

// TODO: the content (second parameter of onlinkclick) needs to be loaded from a database
// or load in the content itself which is in DashboardPanel.jsx

const Sidebar = ({className, onLinkClick}) => {
    return (
        <div className={className}>
            <a className="sidebar-link" onClick={() => onLinkClick('Enemies', <EnemiesMenu />, <EnemiesContent />)}>Enemies</a>
            <a className="sidebar-link" onClick={() => onLinkClick('Trophies', <TrophiesMenu />, <TrophiesContent />)}>Trophies</a>
            <a className="sidebar-link" onClick={() => onLinkClick('Journey', <JourneyMenu />, <JourneyContent />)}>Journey</a>
            <a className="sidebar-link" onClick={() => onLinkClick('About', 'Created by Gtxplosiom')}>About</a>
        </div>
    )
}

export default Sidebar
