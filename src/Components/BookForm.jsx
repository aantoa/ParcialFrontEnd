import { useState } from "react";
import validateFormData from "../Validation/BookFormValidation";
import Styles from "../Styles/BookForm.module.css";

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
        const isValid = validateFormData(formData);
        setError(!isValid);
        
        if(isValid){
            setSubmittedData(formData);
        }
        else{
            setSubmittedData(null);
        }
    }

    return (
        <>
        <div  className={Styles.container}>
            <h3>Indica tu libro favorito ⭐</h3>
            <form onSubmit={handleSubmit}  className={Styles.form}>
                <input type="text" 
                    className={Styles.input}
                    value={formData.name}
                    placeholder="Ingresa tu nombre" 
                    onChange={handleChangeName} />
                <input type="text" 
                    className={Styles.input}
                    value={formData.book} 
                    placeholder="Ingresa tu libro favorito" 
                    onChange={handleChangeBook}/>
                <div >
                    <button className={Styles.submitBtn}>Enviar</button>
                </div>
                
            </form>
            {
                error && <span className={Styles.error}>Por favor chequea que la informacion sea correcta</span>
            }
        </div>
        </>
    )
}

export default BookForm;