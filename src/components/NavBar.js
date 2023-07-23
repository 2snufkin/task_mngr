import Logo from "../assets/task-logo.png"
import styles from '../css/navbar.module.css';
import {useEffect, useState} from "react";
export const NavBar = ()=> {
    const themes = ["light", "medium", "dark", "gradientBlue", "gradientMix", "gradientViolet", "green"]
    const [theme, setTheme] = useState("light")

    useEffect(()=> {
        // I need to remove it since every color change add to the list of classes, when the list is full,
        // changing the background won't have any effect
        document.body.removeAttribute("class");
        // selecting the HTML document: <html lang="en" >
        document.body.classList.add(theme)

    }, [theme])

    return (
        <header>
            <div className={styles.logo}>
                <img src={Logo} alt="logo" />
                <span>Task Manager</span>
            </div>
                {themes.map((themeName) =>{
                    return (
                        <span
                            onClick={ () => setTheme(themeName)}
                            className={`${styles[themeName]} ${theme === themeName ? styles.activeTheme : ""}`}
                            key={themeName}>
                    </span>
                    )
                })}
                     </header>
    )
}