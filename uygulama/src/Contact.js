import React,  { useState }  from 'react';
import List from './List';
import Form from './Form';

 function Contact() {

    const [InputText, setInputText] = useState("");
    const [Todos, setTodos] = useState([]);

    return (
        <div className="container d-flex">
            <Form InputText={InputText} Todos={Todos} setTodos={setTodos} setInputText={setInputText}/>
            <List Todos={Todos} setTodos={setTodos}/>  
        </div>
    )
}
export default Contact;