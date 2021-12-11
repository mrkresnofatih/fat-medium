import Header from "../../components/Header";
import styles from '../../styles/Article.module.css';
import React from "react";
import {HeadingBig, HeadingSmall, Paragraph} from "../../components/Text";
import {contentTypes} from "../../constants/contentTypes";
import {Divider, Image, OrderedList} from "../../components/Image";
import AppHead from "../../components/AppHead";
import {apiHostUrl} from "../../constants/route";

export const getStaticPaths = async () => {
    const response = await fetch(apiHostUrl + '/api/client/getAll');
    const data = await response.json();

    const paths = Object.keys(data.result).map((articleID) => {
        return {
            params: {articleID}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.articleID;
    const response = await fetch(apiHostUrl + '/api/client/getById/' + id);
    const data = await response.json();

    const username = data.result.authorUsername;
    const res = await fetch(apiHostUrl + '/api/client/getAuthorAvatar/' + username);
    const avatarData = await res.json();

    return {
        props: {
            article: {
                ...data.result, contents: Object.values(data.result.contents)
                    .filter((content) => !((data.result.archivedContents).includes(content.id)))
                    .sort((a, b) => ((a.id).localeCompare(b.id)))
            },
            avatar: avatarData.result
        },
        revalidate: 300
    }
}

const Article = ({article, avatar}) => {
    const [copyText, setCopyText] = React.useState("COPY URL");
    const dateText = new Date(article.createdAt).toUTCString().substr(0, 17);

    const copyAction = () => {
        if (copyText === "COPY URL") {
            const el = document.createElement("input");
            el.value = window.location.href;
            document.body.appendChild(el);
            el.select();
            document.execCommand("copy");
            document.body.removeChild(el);
            setCopyText("COPIED");
            setTimeout(() => {
                setCopyText("COPY URL");
            }, 2000);
        }
    }

    return (
        <>
            <AppHead title={article.title}/>
            <Header/>
            <div className={styles.bodyContainer}>
                <div className={styles.contentContainer}>
                    <h4 className={styles.articleTitle}>{article.title}</h4>
                    <div className={styles.articleHeader}>
                        <div className={styles.articleHeaderIdentityTime}>
                            <img className={styles.articleAuthorAvatar} src={avatar} alt={"Ava"}/>
                            <p className={styles.articleAuthor}>{article.authorUsername}</p>
                            <p className={styles.articleDate}>{dateText}</p>
                        </div>
                        <label onClick={copyAction} className={styles.copyUrlButton}>{copyText}</label>
                    </div>
                    <hr style={{marginBottom: 16}}/>
                    {article.contents.map((content) => {
                        switch (content.type) {
                            case    contentTypes.ORDEREDLIST:
                                return (
                                    <OrderedList
                                        key={content.id}
                                        list={content.list}
                                    />
                                )
                            case    contentTypes.DIVIDER:
                                return (
                                    <Divider key={content.id}/>
                                )
                            case    contentTypes.IMAGE:
                                return (
                                    <Image
                                        key={content.id}
                                        src={content.imageUrl}
                                    />
                                )
                            case    contentTypes.PARAGRAPH:
                                return (
                                    <Paragraph
                                        key={content.id}
                                        text={content.text}
                                    />
                                )
                            case    contentTypes.HEADINGSMALL:
                                return (
                                    <HeadingSmall
                                        key={content.id}
                                        text={content.text}
                                    />
                                );
                            case    contentTypes.HEADINGBIG:
                                return (
                                    <HeadingBig
                                        key={content.id}
                                        text={content.text}
                                    />
                                );
                            default:
                                return (
                                    <></>
                                );
                        }
                    })}
                </div>
            </div>
        </>
    )
}

export default Article;