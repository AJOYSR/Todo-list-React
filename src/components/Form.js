import React from "react";
import { useState } from "react";

const Form = ({ todos, setTodos, addTodo }) => {
    // const onInputChange = (e) => {
    //     setInput(e.target.value);
    // };
    const [value, setValue] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        addTodo(value);
        setValue("");
    };


    return (
        <div className="header">
            <form onSubmit={onFormSubmit}>
                <input type="text" value={value} onChange={e => setValue(e.target.value)} required className="input_box" />
                <button
                    className="button-add"
                    type="submit"
                >  +
                </button>
            </form>
        </div>
    );
};

export default Form;
