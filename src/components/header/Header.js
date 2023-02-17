import styles from "../../../styles/Home.module.css";
// Failed to compile you can't import globals.css in other palace than _app.js
// import "../../../styles/globals.css";
import Link from "next/link";
import Image from "next/image";

const Header = () => (
    // here we aren't using return keyword we are jus returning what is inside ( )
    <header className={styles.header}>
        <nav className={styles.nav}>
            <div className="logo_container">
                <Image
                    className="logo"
                    width={50}
                    height={50}
                    alt="none"
                    src={"/web_logo.png"}
                />
            </div>
            <div className="links">
                <Link legacyBehavior href="/">
                    <a> Home</a>
                </Link>
                <Link legacyBehavior href="/events">
                    <a> Events</a>
                </Link>
                <Link legacyBehavior href="/about-us">
                    <a> About Us</a>
                </Link>
            </div>
        </nav>
    </header>
);

export default Header;
