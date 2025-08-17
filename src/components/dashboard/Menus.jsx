import {useState} from "react";
import { SpawnMonsterModal } from './Modals.jsx'
import './styles/Menus.css'

const EnemiesMenu = () => {
    const [spawnMonsterModal, setSpawnMonsterModal] = useState(false)

    return (
        <div>
            <button onClick={() => setSpawnMonsterModal(true)}>Spawn task monster</button>
            {spawnMonsterModal && <SpawnMonsterModal onCancel={() => setSpawnMonsterModal(false)}/>}
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