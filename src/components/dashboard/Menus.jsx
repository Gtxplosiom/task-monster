import './styles/Menus.css'

const EnemiesMenu = () => {
  return (
    <div>
      <button>Spawn task monster</button>
    </div>
  )
}

const TrophiesMenu = () => {
  return (
    <div>
      <button>Save as PDF</button>
    </div>
  )
}

const JourneyMenu = () => {
  return (
    <div>
      <select name="year-select" id="year-select">
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
      </select>
    </div>
  )
}

export { EnemiesMenu, TrophiesMenu, JourneyMenu}