import './styles/Modals.css'
import {useState} from "react";

const SpawnMonsterModal = ({onCancel}) => {
    const [currentTaskList, setCurrentTaskList] = useState([])

    const handleTaskChange = () => {
        setCurrentTaskList(prev => [...prev, ""]);
    };

    return (
        <div className="modal-container">
            <form onSubmit={() => {}}>
                <h3>Spawn Task Monster</h3>
                <input type="text" placeholder="Monster Name"/>
                <input type="text" placeholder="Monster Description"/>

                {currentTaskList.map((_, index) => (
                    <input
                        key={index}
                        type="text"
                        placeholder={`Task ${index + 1}`}
                    />
                ))}

                <a href="#" onClick={() => {handleTaskChange()}}>add task +</a>
                <button type="submit">Spawn</button>
                <button onClick={() => {onCancel()}}>Cancel</button>
            </form>
        </div>
    )
}

export { SpawnMonsterModal }
