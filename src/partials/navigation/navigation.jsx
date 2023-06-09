import { useState } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";

import Sidebar from "@/components/sidebar/sidebar";
import Navbar from "@/components/navbar/navbar";

import { login } from "@/data/buttons";

import navStyles from "news-site-css/dist/nav.module.css";
import buttonStyles from "news-site-css/dist/button.module.css";

export default function Navigation() {
    const [showPortal, setShowPortal] = useState(false);

    function openPortal() {
        setShowPortal(true);
    }

    function closePortal() {
        setShowPortal(false);
    }

    function logIn() {
        console.log("logIn()");
    }

    return (
        <>
            <nav className={navStyles["page-navigation"]} aria-label="main menu">
                <div className={navStyles["page-navigation-row"]}>
                    <div className={navStyles["page-navigation-column-left"]}>
                        <Navbar callback={openPortal} />
                    </div>
                    <div className={navStyles["page-navigation-column-right"]}>
                        <button id="login-button" className={classNames(
                            buttonStyles.button,
                            buttonStyles["secondary-button"],
                            navStyles["nav-button"]
                        )} onClick={logIn}>
                        {login.label}
                        </button>
                    </div>
                </div>
            </nav>
            {showPortal
                ? createPortal(
                        <Sidebar onClose={closePortal} />,
                        document.getElementById("sitemap-container")
                    )
                : null}
        </>
    );
}
