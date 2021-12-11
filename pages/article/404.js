import styles from "../../styles/Home.module.css";
import Header from "../../components/Header";
import {default as Img} from "next/dist/client/image";
import Link from "next/link";
import AppHead from "../../components/AppHead";

export const ArticleNotFound = () => {
    return (
        <div className={styles.container}>
            <AppHead title={"404"} />
            <Header/>
            <div className={styles.body404}>
                <div className={styles.contentContainer}>
                    <div className={styles.homeBanner}>
                        <Img
                            src={"/abstract-wp.jpg"}
                            alt={"RE"}
                            layout={"fill"}
                            objectFit={"contain"}
                        />
                        <div>
                            <h4 className={styles.allArticlesSectionHeader}>404.</h4>
                            <p className={styles.homeBannerDescription}>{"Sorry, We can't seem to find what you are currently looking for!"}</p>
                            <Link href={"/"}>
                                <label className={styles.goToAdminButton}>Go To Home</label>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}