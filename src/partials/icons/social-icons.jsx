import FacebookIcon from "@/assets/facebook-icon";
import InstagramIcon from "@/assets/instagram-icon";
import TwitterIcon from "@/assets/twitter-icon";

import styles from "news-site-css/dist/icons-group.module.css";

export default function SocialIcons() {
    return (
        <div className={styles["icons-group"]}>
            <ul className={styles["icons-group-list"]}>
                <li className={styles["icons-group-item"]}>
                    <a href="#" id="footer-link-social-facebook">
                        <div className={styles["group-icon"]}>
                            <FacebookIcon />
                        </div>
                    </a>
                </li>
                <li className={styles["icons-group-item"]}>
                    <a href="#" id="footer-link-social-instagram">
                        <div className={styles["group-icon"]}>
                            <InstagramIcon />
                        </div>
                    </a>
                </li>
                <li className={styles["icons-group-item"]}>
                    <a href="#" id="footer-link-social-twitter">
                        <div className={styles["group-icon"]}>
                            <TwitterIcon />
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
}
