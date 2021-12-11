import React from 'react';
import styles from '../styles/ArticleCard.module.css';
import Link from 'next/link'

const ArticleCard = ({id, title, abstract, createdAt}) => {
    const dateText = new Date(createdAt).toDateString();

    return (
        <Link href={`/article/${id}`}>
            <div className={styles.articleCardContainer}>
                <ArticleTitleBox title={title}/>
                <div className={styles.articleInfo}>
                    <h5 className={styles.articleTitle}>{title}</h5>
                    <p className={styles.articleAbstract}>{abstract}</p>
                    <p className={styles.articleDate}>{dateText}</p>
                </div>
                <div className={styles.articleReadMore}>{">"}</div>
            </div>
        </Link>
    );
};

export default ArticleCard;

const ArticleTitleBox = ({title}) => {
    return (
        <div className={styles.articleTitleBox}>{title[0]}</div>
    )
}