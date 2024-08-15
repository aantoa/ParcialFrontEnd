import CardStyles from "../Styles/Card.module.css";

const Card = ({name, book}) => {
  return (
    <div className={CardStyles.container}>
      <div className={CardStyles.card}>
        <h2>Hola {name}</h2>
        <p>Sabemos que tu libro favorito es: </p>
        <p className={CardStyles.favorite}>{book}</p>
      </div>
    </div>
  )
}

export default Card