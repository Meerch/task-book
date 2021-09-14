import {useState} from 'react'
import {ButtonAddTask, Navigation, PanelFacts, PanelObservation, PanelTasks, PanelTime, PanelStatistic, PanelNewTask} from "./components"


function App() {
    const [visibilityTask, changeVisibilityTask] = useState(false)

    return (
        <>
            <Navigation/>

            <section className="panel-tasks">
                <ButtonAddTask changeVisibilityTask={changeVisibilityTask}/>
                <PanelStatistic/>
                <PanelTasks/>
            </section>

            <section className="addition">
                <PanelTime/>
                <PanelObservation/>
                <PanelFacts/>
            </section>

            {visibilityTask && <PanelNewTask changeVisibilityTask={changeVisibilityTask}/>}
        </>
    )
}

export default App
