import styles from "../styles/components/backarrow.module.scss";
import {useNavigate} from "react-router-dom";

export default function BackArrow(props: {
    url: string,
    text: string
}) {

    const navigate = useNavigate();

    return (
        <div className={styles.top}>
            <div className={styles.backArrow} onClick={() => {
                window.history.back();
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <rect width="24" height="24" fill="none"/>
                    <path fill="currentColor"
                          d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0l-6.59 6.59a.996.996 0 0 0 0 1.41l6.59 6.59a.996.996 0 1 0 1.41-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1"/>
                </svg>
            </div>

            <h2 className={styles.topText}>{props.text}</h2>
        </div>
    )
}