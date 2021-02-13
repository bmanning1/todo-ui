import { useEffect, useState } from 'react';
import axios from 'axios';

const url = process.env.ENV === 'development'
    ? 'http://localhost:8080/todos'
    : '/api/todos';

const App = () => {
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos();
    }, []);

    const getTodos = async() => {
        try {
            const res = await axios.get(url);
            if (res.status === 200) {
                setTodos(res.data);
            } else {
                console.log(`Error code ${res.status}`);
            }
        } catch (err) {
            console.log(err.message)
        }
    }

    const addTodo = async() => {
        try {
            const res = await axios.post(url, { todo: newTodo });
            if (res.status === 200) {
                setNewTodo('');
            } else {
                console.log(`Error code ${res.status}`);
            }
        } catch (err) {
            console.log(err.message)
        }
    };

    const deleteTodo = async(id) => {
        try {
            // for delete method, the body has to be like { data: body }
            const res = await axios.delete(url, { data: { id } });
            if (res.status === 200) {
                getTodos();
            } else {
                console.log(`Error code ${res.status}`);
            }
        } catch (err) {
            console.log(err.message)
        }
    };

    return (
        <div>
            <p>Full stack TODO application to practice coding and deployment.</p>

            <h1>TODOs</h1>
            <form>
                <input autoFocus onChange={e => setNewTodo(e.target.value)} value={newTodo} />
                <button type="submit" onClick={addTodo}>Add TODO</button>
            </form>

            {todos.map(({ id, todo }, i) => (
                <div key={i} style={{ display: 'flex' }}>
                    <button onClick={() => deleteTodo(id)}>x</button>
                    <p>{todo}</p>
                </div>
            ))}
        </div>
    );
}

export default App;
