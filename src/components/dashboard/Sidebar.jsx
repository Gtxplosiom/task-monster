import './styles/Sidebar.css'
import { EnemiesMenu, JourneyMenu, TrophiesMenu } from './Menus.jsx'

const Sidebar = ({className, onLinkClick}) => {
    return (
        <div className={className}>
            <a className="sidebar-link" onClick={() => onLinkClick('Enemies', <EnemiesMenu />, 'Current Enemies')}>Enemies</a>
            <a className="sidebar-link" onClick={() => onLinkClick('Trophies', <TrophiesMenu />, 'Monsters Slain')}>Trophies</a>
            <a className="sidebar-link" onClick={() => onLinkClick('Journey', <JourneyMenu />, 'Journey Timeline')}>Journey</a>
            <a className="sidebar-link" onClick={() => onLinkClick('About', 'Created by Gtxplosiom')}>About</a>
        </div>
    )
}

export default Sidebar
