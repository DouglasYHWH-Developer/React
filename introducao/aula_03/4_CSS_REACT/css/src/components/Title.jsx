import styles from "./Title.module.css"

const Title = () => {
  return (
    <div>
        <h1 className={styles.my_title}>
            Meu título
        </h1>
    </div>
  )
}

export default Title;

{/*
<h1 className={styles['my-title']}> o traço não é muito 
bem visto no React então evite eusar este modelo "className={styles['my-title']}" 
*/}