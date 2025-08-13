import {useState} from "react";
import { SpawnMonsterModal } from './Modals.jsx'
import './styles/Menus.css'

const EnemiesMenu = () => {
    const [spawnMonsterModal, setSpawnMonsterModal] = useState(false)

    // nagkaada hin prop nga onCancel kay para ma connect an setSpawnMonsterModal
    // ha button didto ha Modal
    // note to self gamita an ternary na "condition && result" kun usa la an resulta
    // basically an spawnMonsterModal an switch or like an properties ha C# WPF, like an states ha react na work similarly
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