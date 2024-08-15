import { useState } from "react";
import validateFormData from "../Validation/BookFormValidation";

const BookForm = ({setSubmittedData}) => {
    const [formData, setFormData] = useState({
        name: "",
        book: "",
    });
    
    const [error, setError] = useState(false);

   

    const handleChangeName = (event) =>{
        setFormData({...formData, name: event.target.value});
    }

    const handleChangeBook = (event)=>{
        setFormData({...formData, book: event.target.value});
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        const isValid = validateFormData(formData)
        if(isValid){
            setSubmittedData(formData);
        }
        setError(!isValid)
    }

    return (
        <>
        <h3>Indica tu libro favorito ⭐</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" 
                value={formData.name}
                placeholder="Ingresa tu nombre" 
                onChange={handleChangeName} />
            <input type="text" 
                value={formData.book} 
                placeholder="Ingresa tu libro favorito" 
                onChange={handleChangeBook}/>
            <button>Enviar</button>
        </form>
        {
            error && <span>Por favor chequea que la informacion sea correcta</span>
        }

        </>
    )
}

export default BookForm;