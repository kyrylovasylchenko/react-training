import styles from './Card.module.scss';




const Card = (props) => {

    const onClickBtn = () => {
        alert(props.title);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/img/unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src={props.imgUrl} alt="Sneakers" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>{props.price} usd</b>
                </div>
                <button className="button" onClick={onClickBtn}>
                    <img width={11} height={11} src="/img/addIcon.svg" alt="Add" />
                </button>
            </div>

        </div>
    )
}

export default Card;