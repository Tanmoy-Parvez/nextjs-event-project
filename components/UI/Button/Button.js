import Link from "next/link";
import styles from './Button.module.css';

const Button = (props) => {
    if (props.link) {
        return (
            <div>
                <Link href={props.link}>
                    <span className={styles.btn}>{props.children}</span>
                </Link>
            </div>
        );
    }

    return (
        <button className={styles.btn} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;