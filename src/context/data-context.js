import { createContext, useContext } from "react";

import { content as contentEn } from "@/data/en/content";
import { content as contentJp } from "@/data/jp/content";
import { content as contentAr } from "@/data/ar/content";

import { settings as settingsEn } from "@/data/en/dialog";
import { settings as settingsJp } from "@/data/jp/dialog";
import { settings as settingsAr } from "@/data/ar/dialog";

import { footer as footerEn } from "@/data/en/footer";
import { footer as footerJp } from "@/data/jp/footer";
import { footer as footerAr } from "@/data/ar/footer";

import { sitemap as sitemapEn } from "@/data/en/sidebar";
import { sitemap as sitemapJp } from "@/data/jp/sidebar";
import { sitemap as sitemapAr } from "@/data/ar/sidebar";

import * as buttonsEn from "@/data/en/buttons";
import * as buttonsJp from "@/data/jp/buttons";
import * as buttonsAr from "@/data/ar/buttons";

import * as linksEn from "@/data/en/links";
import * as linksJp from "@/data/jp/links";
import * as linksAr from "@/data/ar/links";

import * as formsEn from "@/data/en/form";
import * as formsJp from "@/data/jp/form";
import * as formsAr from "@/data/ar/form";

const contentImport = { en: contentEn, jp: contentJp, ar: contentAr };
const settingsImport = { en: settingsEn, jp: settingsJp, ar: settingsAr };
const footerImport = { en: footerEn, jp: footerJp, ar: footerAr };
const sitemapImport = { en: sitemapEn, jp: sitemapJp, ar: sitemapAr };
const buttonsImport = { en: buttonsEn, jp: buttonsJp, ar: buttonsAr };
const linksImport = { en: linksEn, jp: linksJp, ar: linksAr };
const formsInput = { en: formsEn, jp: formsJp, ar: formsAr };

const DataContext = createContext(null);

export const DataContextProvider = ({ children }) => {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get("lang") ?? "en";
    const dir = urlParams.get("dir") ?? "ltr";

    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);

    const value = {
        lang,
        dir,
        content: contentImport[lang],
        settings: settingsImport[lang],
        buttons: buttonsImport[lang],
        links: linksImport[lang],
        footer: footerImport[lang],
        sitemap: sitemapImport[lang],
        forms: formsInput[lang],
    };

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
    const dataContext = useContext(DataContext);

    if (!dataContext)
        throw new Error("A DataProvider must be rendered before using useDataContext");

    return dataContext;
};