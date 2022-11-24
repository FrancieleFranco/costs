import styles from './Submitbutton.module.css'


function Submitbutton({text}) {
    return(
        <div>
            <button className={styles.btn}>{text}</button>
        </div>    

    )  
}

export default Submitbutton