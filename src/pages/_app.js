/* 
// using local styles
import "@/styles/variables.css";
import "@/styles/globals.css";
import "@/styles/icons.css";
import "@/styles/icons-group.css";
import "@/styles/button.css";
import "@/styles/a11y.css";
import "@/styles/layout.css";
import "@/styles/header.css";
import "@/styles/nav.css";
import "@/styles/navbar.css";
import "@/styles/footer.css";
import "@/styles/dialog.css";
import "@/styles/dropdown.css";
import "@/styles/article.css";
import "@/styles/text.css";
import "@/styles/toggle.css";
import "@/styles/toast.css";
import "@/styles/sitemap.css";
import "@/styles/message.css"; */

// using news-site-css stylesheets
/* import "news-site-css/dist/variables.css";
import "news-site-css/dist/global.css";
import "news-site-css/dist/icons.css";
import "news-site-css/dist/icons-group.css";
import "news-site-css/dist/button.css";
import "news-site-css/dist/a11y.css";
import "news-site-css/dist/layout.css";
import "news-site-css/dist/header.css";
import "news-site-css/dist/nav.css";
import "news-site-css/dist/navbar.css";
import "news-site-css/dist/footer.css";
import "news-site-css/dist/dialog.css";
import "news-site-css/dist/dropdown.css";
import "news-site-css/dist/article.css";
import "news-site-css/dist/text.css";
import "news-site-css/dist/toggle.css";
import "news-site-css/dist/toast.css";
import "news-site-css/dist/sitemap.css";
import "news-site-css/dist/message.css"; */

// just using global news-site-css stylesheets
import "news-site-css/dist/variables.css";
import "news-site-css/dist/global.css";
import "news-site-css/dist/a11y.css"
import "news-site-css/dist/icons.css";
import "news-site-css/dist/text.css";

import { useEffect, useState } from "react";

function App({ Component, pageProps }) {
    const [render, setRender] = useState(false);
    useEffect(() => setRender(true), []);
    return render ? <Component {...pageProps} /> : null;
}
export default App;
