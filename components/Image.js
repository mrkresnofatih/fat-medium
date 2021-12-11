import styles from '../styles/Article.module.css';

export const Image = ({src}) => {
    return (
        <div className={styles.articleImage}>
            <img
                src={src}
                alt={"RE"}
            />
        </div>
    )
}

export const Divider = () => {
    return (
        <div className={styles.articleDividerContainer}>{"_____ ,, _____"}</div>
    )
}

export const OrderedList = ({list}) => {
    return (
        <div className={styles.articleList}>
            {Object.keys(list).map((pointKey) => {
                return (
                    <p key={pointKey}>{"o " + list[pointKey]}</p>
                )
            })}
        </div>
    )
}