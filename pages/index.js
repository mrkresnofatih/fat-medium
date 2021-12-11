import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ArticleCard from "../components/ArticleCard";
import Header from "../components/Header";
import {default as Img} from 'next/image';
import AppHead from "../components/AppHead";
import {apiHostUrl} from "../constants/route";

export const getStaticProps = async () => {
    const response = await fetch(apiHostUrl+'/api/client/getAll');
    const data = await response.json();

    return {
        props: {
            articles: Object.values(data.result)
        },
        revalidate: 300
    }
}

export default function Home({articles}) {
    return (
        <div className={styles.container}>
            <AppHead title={"Home"} />
            <Header/>
            <div className={styles.bodyContainer}>
                <div className={styles.contentContainer}>
                    <div className={styles.homeBanner}>
                        <Img
                            src={"/abstract-wp.jpg"}
                            alt={"RE"}
                            layout={"fill"}
                            objectFit={"contain"}
                        />
                        <div>
                            <h4 className={styles.allArticlesSectionHeader}>Welcome.</h4>
                            <p className={styles.homeBannerDescription}>Fatmedium is a site of free articles for all! Publish your own articles from the admin site!</p>
                            <label className={styles.goToAdminButton}>Go To Admin</label>
                        </div>
                    </div>
                    <h4 className={styles.allArticlesSectionHeader}>Everything.</h4>
                    <hr style={{marginBottom: 16}}/>
                    {articles.map((article) => (
                        <ArticleCard
                            id={article.id}
                            key={article.id}
                            title={article.title}
                            abstract={article.spoilerMessage}
                            createdAt={article.createdAt}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
