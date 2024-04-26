import {computed, ref, watch} from "vue";

// import SuiButton0 from './SuiButton.vue';
// import SuiCheckbox0 from './SuiCheckbox.vue';
// import SuiColorInput0 from './SuiColorInput.vue';
// import SuiFileInput0 from './SuiFileInput.vue';
// import SuiInput0 from './SuiInput.vue';
// import SuiModalWindow0 from './SuiModalWindow.vue';
// import SuiRadio0 from './SuiRadio.vue';
// import SuiVerticalNav0 from './SuiVerticalNav.vue';
//
// export const SuiButton = SuiButton0;
// export const SuiCheckbox = SuiCheckbox0;
// export const SuiColorInput = SuiColorInput0;
// export const SuiFileInput = SuiFileInput0;
// export const SuiInput = SuiInput0;
// export const SuiModalWindow = SuiModalWindow0;
// export const SuiRadio = SuiRadio0;
// export const SuiVerticalNav = SuiVerticalNav0;

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
    bodyBg: "white"
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
    bodyBg: "black"
};

export const SuiVue = {
    install(app, options) {
        let {light = {}, dark = {}, ...providedThemes} = options?.themes ?? {}
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
        const themeName = ref(options?.default ?? "light");
        const theme = computed(() => themes[themeName.value]);
        watch(theme, ({bodyBg}) => {
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
    }
}