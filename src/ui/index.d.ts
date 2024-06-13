export type BaseThemeType = {
    bg: string,
    border: string,
    color: string,
    buttonBg: string,
    buttonBorder: string,
    checkboxBg: string,
    checkboxBorder: string,
    colorInputBg: string,
    colorInputBorder: string,
    fileInputBg: string,
    fileInputBorder: string,
    inputBg: string,
    inputBorder: string,
    modalWindowBg: string,
    verticalNavBg: string,
    bodyBg: string,
    bodyTransition: string,
    buttonDisabledBg: string
}

export const SuiLight: BaseThemeType;

export const SuiDark: BaseThemeType;

export type ThemesType<ThemeType> = {[key: string]: Omit<ThemeType, keyof BaseThemeType> & Partial<BaseThemeType>};

export type OptionsType<Theme extends string> = {
    default: Theme
}

export type SuiVueType<ThemeType> = {
    install(app: VueConstructor, options): void
}

export function createVueSui<ThemeType>(themes?: ThemesType<ThemeType>, options?: Partial<OptionsType<keyof themes>>);

declare module 'vue' {
    interface ComponentCustomProperties {
        $themes: ThemesType<{[key: string]: any}>
        $themeName: string
        $theme: BaseThemeType
        $setTheme(name: string): void
    }
}