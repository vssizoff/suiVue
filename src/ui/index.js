import {computed, ref, watch} from "vue";
import vSuiButton from "./vSuiButton.js";

export const SuiLight = {
    bg: "#ededed",
    border: "green",
    color: "black",
    buttonBg: "#ededed",
    buttonBorder: "green",
    checkboxBg: "#ededed",
    checkboxBorder: "green",
    colorInputBg: "#ededed",
    colorInputBorder: "green",
    fileInputBg: "#ededed",
    fileInputBorder: "green",
    inputBg: "#ededed",
    inputBorder: "green",
    modalWindowBg: "white",
    verticalNavBg: "#ededed",
    bodyBg: "white",
    bodyTransition: "all .4 ease",
    buttonDisabledBg: "#a5a5a5"
};

export const SuiDark = {
    bg: "#2c2c2c",
    color: "white",
    buttonBg: "#2c2c2c",
    buttonBorder: "green",
    checkboxBg: "#2c2c2c",
    checkboxBorder: "green",
    colorInputBg: "#2c2c2c",
    colorInputBorder: "green",
    fileInputBg: "#2c2c2c",
    fileInputBorder: "green",
    inputBg: "#2c2c2c",
    inputBorder: "green",
    modalWindowBg: "#1e1e1e",
    verticalNavBg: "#2c2c2c",
    bodyBg: "#121212",
    bodyTransition: "all .4 ease",
    buttonDisabledBg: "#1b1b1b"
};

export function createVueSui(Themes, options) {
    return {
        install(app) {
            let {light = {}, dark = {}, ...providedThemes} = Themes ?? {}
            const themes = {
                light: {
                    ...SuiLight,
                    ...light
                },
                dark: {
                    ...SuiDark,
                    ...dark
                },
                ...Object.fromEntries(Object.entries(providedThemes).map(([key, theme]) => [key, {
                    bg: "#ededed",
                    border: "green",
                    color: "black",
                    ...theme
                }]))
            };
            const themeName = ref(localStorage.getItem("$theme") ?? options?.default ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"));
            setInterval(() => {
                themeName.value = localStorage.getItem("$theme") ?? options?.default ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");
            }, 500);
            watch(themeName, name => localStorage.setItem("$theme", name));
            const theme = computed(() => themes[themeName.value]);
            document.body.style.background = theme.value.bodyBg;
            document.body.style.transition = theme.value.bodyTransition;
            watch(theme, ({bodyBg}) => {
                document.body.style.transition = theme.value.bodyTransition;
                document.body.style.background = bodyBg;
            });
            app.config.globalProperties = {
                ...app.config.globalProperties,
                $themes: themes,
                get $themeName() {
                    return themeName.value;
                },
                set $themeName(value) {
                    themeName.value = value;
                },
                get $theme() {
                    return {...theme.value, set(name) {themeName.value = name}};
                },
                $setTheme(theme) {
                    themeName.value = theme;
                }
            };
            app.directive("suiButton", {
                mounted(element, {value}) {
                    vSuiButton(element, value, theme);
                }
            })
        }
    }
}