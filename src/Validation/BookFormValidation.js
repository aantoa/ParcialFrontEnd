const validateName = (name)=>{
    return name.trim().length>=3 && !/\d/.test(name);
}

const validateBook = (book)=>{
    return book.trim().length >=6;
}

const validateFormData = (formData)=>{
    return validateName(formData.name) && validateBook(formData.book);
}

export default validateFormData;