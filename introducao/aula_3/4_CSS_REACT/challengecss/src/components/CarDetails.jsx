import styles from "./CarDetails.module.css"

const CarDetails = ({brand, color}) => {
  
  return (
    <div>
        <ul>
            <li className={styles.ferrari}>Marca: {brand} Cor: {color}</li>
            <li className={styles.kia}>Marca: {brand} Cor: {color}</li>
            <li className={styles.renault}>Marca: {brand} Cor: {color}</li>
        </ul>
    </div>
  )
}

export default CarDetails