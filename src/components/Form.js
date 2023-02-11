import React from "react";
import { useState } from "react";

const Form = ({ todos, setTodos, addTodo }) => {
    function inputValidate(givenvalue) {
        const newTodos = [...todos];
        for (let i = 0; i < newTodos.length; i++) {
            if (newTodos[i].title === givenvalue) {
                return false;
            }
        }
        return true;
    };
    const [value, setValue] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (inputValidate(value)) {
            addTodo(value);
            setValue("");
        } else {
            alert('please add unique item!');
        }
    };

    return (
        <div className="header">
            <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    required
                    className="input_box"
                />
                <button className="button-add" type="submit">
                    {" "}
                    +
                </button>
            </form>
        </div>
    );
};

export default Form;
