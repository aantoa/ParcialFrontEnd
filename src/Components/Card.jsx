import CardStyles from "../Styles/Card.module.css";

const Card = ({name, book}) => {
  return (
    <div className={CardStyles.card}>
      <h2>Hola {name}</h2>
      <p>Sabemos que tu libro favorito es: </p>
      <mark>{book}</mark>
    </div>
  )
}

export default Card