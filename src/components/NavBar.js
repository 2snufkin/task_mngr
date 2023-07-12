import Logo from "../assets/task-logo.png"
import styles from '../css/navbar.module.css';
export const NavBar = ()=> {
    const themes = ["light", "medium", "dark", "gradientBlue", "gradientMix", "gradientViolet"]
    return (
        <header>
            <div className={styles.logo}>
                <img src={Logo} alt="logo" />
                <span>Task Manager</span>
            </div>
            <div className={styles.themeSelector}>
                {themes.map((theme) => <span className={themes} key={theme}></span>)}
            </div>
        </header>
    )
}