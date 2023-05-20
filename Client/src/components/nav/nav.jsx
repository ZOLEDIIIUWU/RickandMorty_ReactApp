import SearchBar from "../searchbar/SearchBar";
import styles from "./nav.module.css"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Nav({onSearch, setAccess}) {
    const handleLOGOUT = () => {
        setAccess(false)
    }
    
    const location = useLocation()

    return (
    <div className={styles.nav}>
        <div className={styles.buttonContainer}>
            <button className={styles.navButton}>
                <Link className={styles.navLink} to="/about">
                    <svg width="50" height="50" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={styles.icon} id="about">
                        <path d="M12 4.75a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 1 0 0-14.5z"></path>
                        <path d="M12 13v2"></path>
                        <path d="M12 8a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                    </svg>
                </Link>
            </button>

            <button className={styles.navButton}>
                <Link className={styles.navLink} to="/favorites">
                    <svg width="50" height="50" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={styles.icon} id="favorites">
                        <path d="M11.995 7.233c-1.45-1.623-3.867-2.06-5.683-.573-1.816 1.486-2.072 3.971-.645 5.73l6.328 5.86 6.329-5.86c1.426-1.759 1.201-4.26-.646-5.73-1.848-1.471-4.233-1.05-5.683.573Z" clip-rule="evenodd"></path>
                    </svg>
                </Link>
            </button>
            
            <button className={styles.navButton}>
                <Link className={styles.navLink} to="/home">
                    <svg width="50" height="50" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={styles.icon} id="home">
                        <path d="M5.75 6.75a2 2 0 0 1 2-2h8.5a2 2 0 0 1 2 2v12.5H5.75V6.75Z"></path>
                        <path d="M19.25 19.25H4.75"></path>
                        <path d="M9.75 15.75a2 2 0 0 1 2-2h.5a2 2 0 0 1 2 2v3.5h-4.5v-3.5Z"></path>
                        <path d="M10 9a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                        <path d="M14 9a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                    </svg>
                </Link>
            </button>
        </div>

        {location.pathname === "/home" && <SearchBar className={styles.navSearch} onSearch={onSearch}/>}

        <div className={styles.logoutContainer}>
            <button className={styles.logout} onClick={handleLOGOUT}>
                <svg width="50" height="50" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={styles.icon} id="log-out">
                    <path d="m15.75 8.75 3.5 3.25-3.5 3.25"></path>
                    <path d="M19 12h-8.25"></path>
                    <path d="M15.25 4.75h-8.5a2 2 0 0 0-2 2v10.5a2 2 0 0 0 2 2h8.5"></path>
                </svg>
            </button>
        </div>
    </div>
    )
} 