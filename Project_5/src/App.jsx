import { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import Task_form from './Components/Task_form';

function App() {

  const [tasks, setTasks] = useState([])
  const [addTask, setAddTask] = useState(false)
  const [modify, setModify] = useState(false)
  const [taskToEdit, setTaskToEdit] = useState(null)


  // ADD TASK
  const addTask_db = async (task) => {
    try {
      const response = await fetch('http://localhost:3000/add-task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      throw new Error("Error adding task");
    }
  }

  const onAddTask = (task) => {
    setTasks([...tasks, task])
    addTask_db(task)
    setAddTask(!addTask)
  }

  // DELETE TASK
  const delete_task_db = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/delete-task/${id}`, {
        method: 'DELETE'
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      throw new Error("Error deleting task");
    }
  }

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((task) => task.id !== index)
    setTasks(newTasks)
    delete_task_db(index)
  }

  // UPDATE TASK
  const handleEditTask = (id) => {
    const task_to_edit = tasks.find(task => task.id === id)

    if (task_to_edit) {
      setAddTask(!addTask)
      setModify(true)
      setTaskToEdit(task_to_edit)
    }
  }

  const onModifyTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    update_task_db(updatedTask);
    setAddTask(false);
    setModify(false);
  };


  const update_task_db = async (task) => {
    try {
      const responce = await fetch(`http://localhost:3000/modify-task/${task.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      })
    } catch (error) {
      throw new Error("Error modifying task");
    }
  }

  // GET TASKS
  const get_tasks = async () => {
    try {
      const responce = await fetch('http://localhost:3000/get-tasks', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await responce.json()
      setTasks(data.data)
    } catch (error) {
      throw new Error("Error fetching tasks");
    }
  }

  useEffect(() => {
    get_tasks()
  }, [])


  return (
    <>
      <div className='h-screen flex flex-col gap-5 justify-center items-center bg-slate-300 relative'>
        <div className='p-4 bg-slate-200 rounded-lg shadow-lg w-1/3'>
          <div className='flex items-center bg-purple-500 p-2 w-full rounded-t-lg'>
            <GiHamburgerMenu className='w-[10%]' />
            <h1 className='text-2xl font-bold text-center w-[90%]'>TaskQuest</h1>
          </div>
          <div>
            <ul>
              {tasks.length > 0 ? (
                tasks.map((task, index) => (
                  <li key={index} className='flex justify-between items-center p-2 my-2 border-b-2 border-slate-400'>
                    <div className='flex items-center gap-3'>
                      <span>{task.task}</span>
                    </div>
                    <div>
                      <button onClick={() => { handleEditTask(task.id) }}><MdEdit /></button>
                      <button onClick={() => { handleDeleteTask(task.id) }} className=' px-2 py-1 rounded-lg'><RiDeleteBin5Fill /></button>
                    </div>
                  </li>
                ))
              ) : (
                <li className='text-center text-lg p-2'>No tasks added</li>
              )}
            </ul>
          </div>
        </div>
        <div>{addTask && <Task_form onAddTask={onAddTask} modify={modify} onModifyTask={onModifyTask} taskToEdit={taskToEdit} />}</div>
        <div className='w-1/3 flex justify-center items-center p-2 bg-purple-500 rounded-lg shadow-lg'>
          <button onClick={() => { setAddTask(!addTask); setModify(false) }} className='flex gap-3 items-center font-semibold'><FiPlus /> New Task</button>
        </div>
      </div>
    </>
  )
}

export default App
