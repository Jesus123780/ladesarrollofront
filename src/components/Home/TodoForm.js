import React, { useState, useEffect, useRef } from 'react';
import { RippleButton } from '../Ripple';
import { Input, ContainInput } from './styled';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef?.current?.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };
    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            {props.edit ? (
                <ContainInput>
                    <Input
                        placeholder='Add your task'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        ref={inputRef}
                    />
                    <RippleButton onClick={handleSubmit} className='todo-button edit'>Update</RippleButton>
                </ContainInput>
            ) : (
                <ContainInput>
                    <Input
                        placeholder='Add Task'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        ref={inputRef}
                    />
                    <RippleButton onClick={handleSubmit} >Add task</RippleButton>
                </ContainInput>
            )}
        </form>
    );
}

export default TodoForm;