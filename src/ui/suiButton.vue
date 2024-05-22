<script>
export default {
  name: "SuiButton",
  props: {
    border: {
      type: String
    },
    bg: {
      type: String
    },
    color: {
      type: String
    },
    transform: {
      type: String,
      default: "1.4"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    bgColor() {
      return this.bg ?? this.$theme?.buttonBg ?? this.$theme?.bg ?? "#ededed";
    },
    disabledColor() {
      return this.bg ?? this.$theme?.buttonDisabledBg ?? this.$theme?.bg ?? "#ededed";
    },
    borderColor() {
      return this.border ?? this.$theme?.buttonBorder ?? this.$theme?.border ?? "green";
    },
    colorColor() {
      return this.color ?? this.$theme?.buttonColor ?? this.$theme?.color ?? "black";
    },
    additionalTransform() {
      return this.transform.endsWith('%') ? `${Number(this.transform.substring(0, this.transform.length - 1)) + 20}%` : String(Number(this.transform) + 0.2);
    }
  }
}
</script>

<template>
<button :disabled="disabled"><slot/></button>
</template>

<style scoped>
button {
  outline: none;
  padding: 10px 20px 10px 20px;
  border-radius: 15px;
  font-size: 24px;
  transition-duration: 0.4s;
  overflow: hidden;
  border: transparent solid 2px;
  background: v-bind(bgColor);
  color: v-bind(colorColor);

  &:not(:disabled) {
    &:focus-visible {
      border-radius: 32px;
      transform: scale(v-bind(transform));
      border: v-bind(borderColor) solid 2px;
    }

    @media (hover: hover) {
      &:hover {
        border-radius: 32px;
        transform: scale(v-bind(transform));
        border: v-bind(borderColor) solid 2px;
      }
    }

    &:active {
      border-radius: 32px;
      transform: scale(v-bind(additionalTransform));
      border: v-bind(borderColor) solid 2px;
    }
  }

  &:disabled {
    background: v-bind(disabledColor);
  }
}
</style>