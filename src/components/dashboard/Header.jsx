import './styles/Header.css'

const Header = ({className, title}) => {
    return (
        <div className={className}>
            <h1 className="header-title">{title}</h1>
        </div>
    )
}

export default Header
