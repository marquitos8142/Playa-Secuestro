import axios from 'axios'


const tasksApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/tasks/api/v1/tasks/'
})
export const getAllTask = ()=>  tasksApi.get('/')

export const getTask = (id)=>  tasksApi.get('/ '+ id  )

export const createTask = async (task) => {
    const newTask = {
        ... task,
        foto: task.foto[0]
    };
    await tasksApi.post("/", newTask, {
        headers: {
            "Content-Type":"multipart/form-data"
        }
    });
}
export const deleteTask = (id) => tasksApi.delete('/ '+ id )

export const updateTask = async (id, task) => {
    const editTask = {
        ... task,
        foto: task.foto[0]
    };
    await tasksApi.put(`/${id}/`, editTask, {
        headers: {
            "Content-Type":"multipart/form-data"
        }
    });
} 

