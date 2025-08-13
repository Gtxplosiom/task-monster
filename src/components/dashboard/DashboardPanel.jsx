import './styles/DashboardPanel.css'

const DashboardPanel = ({className, menu, content}) => {
    return (
      <div className={className}>
        <div className="dashboard-panel-menu">
          <h1>{menu}</h1>
        </div>
        <div className="dashboard-panel-content">
          {content}
        </div>
      </div>
    )
}

export default DashboardPanel
