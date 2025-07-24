import styles from "./CarDetails.module.css"

const CarDetails = ({brand, color}) => {
  return (
    <div>
        <ul>
            {brand === "Ferrari" ? <li className={styles.ferrari}>
                Marca: {brand}</li> || 
                brand ==="KIA" ?
                <li className={styles.kia}>
                    Marca: {brand}
                </li>
            }
            
            
        </ul>
    </div>
  )
}

export default CarDetails