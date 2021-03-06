import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
// import SvgComponent from './Nodata/Nodata';
import { PColor } from '../../assets/colors';
import { IconEdit, IconDelete, IconDost, IconSuccess } from '../../assets/icons/icons';
import { ContainerTask, Button, Options, ListTask, Task } from './styled';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [show, setShow] = useState(false)
    const [success, setSuccess] = useState(null)
    useEffect(() => {
        const body = document.body
        body.addEventListener('keyup', e => e.code === 'Escape' && setShow(false))
        return () => body.removeEventListener('keyup', () => setShow)

    }, [setShow])

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };
    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }
    const handleClick = index => {
        setSuccess(index === success ? true : index)
    }
    // // Función para buscar por nombre
    // const [query, SetQuery] = useState('')
    // const [filterName, SetFilterName] = useState(todos)

    // React.useMemo(
    //     () => {
    //         const result = todos.filter(tod => `${ tod?.text }`.toLowerCase().includes(query));
    //         SetFilterName(result)
    //     }, [query, todos])
    // const [filterTerm, SetFilterTerm] = useState(todos)
    return (<>
        {/*!!todos.length && <ContainInput>
            { <Input
                onChange={event => {
                    SetFilterTerm(event.target.value)
                }}
                placeholder='Filtrar por nombres ' /> */}
        {
            // eslint-disable-next-line array-callback-return
            todos.map((todo, index) => (
                <ContainerTask key={index}>
                    <Options show={show === index}>
                        {/* Eliminar */}
                        <Button onClick={() => removeTodo(todo.id)}><IconDelete size={30} /></Button>
                        {/* Editar */}
                        <Button onClick={() => setEdit({ id: todo.id, value: todo.text })}><IconEdit size={30} /></Button>
                        {/* Todo Success */}
                        <Button onClick={() => handleClick(index)}><IconSuccess size={30} color={index === success ? '#25AE88' : 'red'} /></Button>
                    </Options>
                    {/* Tareas */}
                    <ListTask show={show === index} key={todo.id} onClick={() => completeTodo(todo.id)}>
                        {todo.text}
                    </ListTask>
                    <div style={{ display: 'contents' }}><Button onClick={() => setShow(index === show ? false : index)}><IconDost size={30} color={show === index ? PColor : '#CCC'} /></Button></div>
                    {show === index && <Task style={{ display: 'contents', fontSize: '13px' }} show={show === index} >Tarea{index +1}</Task> }
                </ContainerTask>
            ))}
    </>);
};

export default Todo;