import './Styles/App.css';
import { useState } from "react";
import Card from './Components/Card';
import BookForm from './Components/BookForm'

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <>
    <h1>Mi libro favorito</h1>
      <BookForm setSubmittedData={setSubmittedData}/>
      {
        submittedData && <Card name={submittedData.name} book={submittedData.book}/>
      }
    </>
  )
}

export default App
