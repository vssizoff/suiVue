import {computed, ref, watch} from "vue";
import {vSuiButton as Style} from "./vSuiButton.module.css";

export default function vSuiButton(element, args, theme) {
    const {bg, border, color, transform = "1.4"} = args ?? {};

    const value = ref(""), bgColor = computed(() => {
        return bg ?? theme?.value.buttonBg ?? theme?.value.bg ?? "#ededed";
    }), disabledColor = computed(() => {
        return bg ?? theme?.value.buttonDisabledBg ?? theme?.value.bg ?? "#ededed";
    }), borderColor = computed(() => {
        return border ?? theme?.value.buttonBorder ?? theme?.value.bg ?? "green";
    }), colorColor = computed(() => {
        return color ?? theme?.value.buttonColor ?? theme?.value.color ?? "black";
    }), additionalTransform = computed(() => {
        return transform.endsWith('%') ? `${Number(transform.substring(0, transform.length - 1)) + 20}%` : String(Number(transform) + 0.2);
    }), style = computed({
        get() {
            return value.value.replaceAll("{bg}", bgColor.value).replaceAll("{color}", colorColor.value)
                .replaceAll("{transform}", transform).replaceAll("{border}", borderColor.value)
                .replaceAll("{additionalTransform}", additionalTransform.value);
        },
        set(a) {
            value.value = a;
        }
    });

    element.classList.add(Style);

    style.value = `
        background: {bg};
        color: {color};
    `;

    if (window.matchMedia("(hover: hover)").matches) {
        element.addEventListener("mouseover", () => {
            style.value = `
                background: {bg};
                color: {color};
                transform: scale({transform});
                border: {border} solid 2px;
            `;
        });

        element.addEventListener("mouseout", () => {
            style.value = `
                background: {bg};
                color: {color};
            `;
        });
    }

    element.addEventListener("click", () => {
        const before = style.value;

        style.value = `
            background: {bg};
            color: {color};
            transform: scale({additionalTransform});
            border: {border} solid 2px;
        `
        setTimeout(() => {
            style.value = before;
        }, 150);
    })

    element.style = style.value;

    watch(style, () => {
        element.style = style.value;
    });
}