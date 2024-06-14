import { RouterProvider } from "react-router-dom"
import { router } from "./Routes/Routes"
import ToDo from "./Components/Dashboard/ToDo/ToDo"
import OngoingTask from "./Components/Dashboard/OngoingTask/OngoingTask"
import CompletedTask from "./Components/Dashboard/CompletedTask/CompletedTask"
import { TasksProvider } from "./Components/Shared/TaskContext/TasksContext"

function App() {

  return (
    <>
     <RouterProvider router={router} />
     {/* <TasksProvider>
      <div>
        <ToDo />
        <OngoingTask />
        <CompletedTask />
      </div>
    </TasksProvider> */}
    </>
  )
}

export default App
