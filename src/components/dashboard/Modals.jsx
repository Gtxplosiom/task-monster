import {useState} from "react";
import './styles/Modals.css'

// TODO: study how tf this works, this spawn of AI yapping
// kun ma understand mo ini master kana hin react
const SpawnMonsterModal = ({onCancel}) => {
    const [todoTitle, setTodoTitle] = useState('')
    const [tasks, setTasks] = useState([])
    const [taskDescription, setTaskDescription] = useState('')

    const addTask = () => {
        setTasks([...tasks, taskDescription])
        setTaskDescription('')
    }

    const renderTasks = () => {
        const taskElements = []
        for (let i = 0; i < tasks.length; i++) {
            taskElements.push(
                <div key={i} className="task-container">
                    <input type="text" value={tasks[i]} onChange={(e) => {
                            const newTasks = [...tasks]
                            newTasks[i] = e.target.value
                            setTasks(newTasks)
                        }}
                    />
                </div>
            )
        }
        return taskElements
    }

    return (
        <div className="modal-container">
            <h1>Spawn Task Monster</h1>

            <input
                type="text"
                placeholder="TODO Title"
                value={todoTitle}
                onChange={(e) => setTodoTitle(e.target.value)}
            />

            <input
                type="text"
                placeholder="Task Description"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
            />

            <button onClick={addTask}>Add Task</button>

            {renderTasks()}

            <button className="spawn-task-monster-btn">Spawn</button>
            <button className="cancel-btn" onClick={onCancel}>Too Scared...</button>
        </div>
    )
}

export { SpawnMonsterModal }
