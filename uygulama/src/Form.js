import React from 'react';
import Button from 'react-bootstrap/Button';
import "./Form.css";
import Figure from 'react-bootstrap/Figure';
import TodoImage from "./img.jpg";

    const Form = ({ setInputText, Todos, setTodos, InputText }) => {
        const inputTextHandler = (e) => {
          console.log(e.target.value);
          setInputText(e.target.value);
        };
        const SubmitTodoHandler = (e) => {
            e.preventDefault();
            setTodos([
                ...Todos, {text: InputText, completed: false, id: Math.random() * 1000}
            ])
        };
    return (
        
        <div className="col-4 mt-5 bg-dark text-center"> 
                <Figure className="figure mt-4">
                    <img className="img-fluid" src={TodoImage} width="300" height="300"/>
                </Figure>
                <div className="form-group col-8 ml-5">
                    <h3 className="text-center mt-4 text-light">ToDo List Bootstrap App</h3>
                    <input onChange={inputTextHandler} type="text" className="form-control mt-4" placeholder="What's on your mind..." />
                    <Button onClick={SubmitTodoHandler} variant="btn btn-success mt-4">Submit</Button>
                </div> 
        </div>
    )
}
export default Form;