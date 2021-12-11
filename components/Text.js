import React from 'react';
import styles from '../styles/Article.module.css';

export const HeadingBig = ({ text }) => {
    return (
        <h5 className={styles.articleHeadingBig}>{text}</h5>
    )
}

export const HeadingSmall = ({ text }) => {
    return (
        <h6 className={styles.articleHeadingSmall}>{text}</h6>
    )
}

export const Paragraph = ({ text }) => {
    return (
        <p className={styles.articleParagraph}>{text}</p>
    )
}