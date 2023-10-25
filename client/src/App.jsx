import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { TaskFormpage } from "./pages/TaskFormPage";
import { Navigation } from "./component/Navigation";
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>

      <div className="container mx-auto">

        <Navigation/>

        <Routes>    

          <Route path="/" element={<Navigate to = '/tasks' />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/tasks-create" element={<TaskFormpage />} />
          <Route path="/tasks/:id" element={<TaskFormpage />} />

        </Routes>

        <Toaster />

      </div>

    </BrowserRouter>
  );
}

export default App;