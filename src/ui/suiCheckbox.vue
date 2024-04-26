<script>
export default {
  name: "SuiCheckbox",
  props: {
    modelValue: {
      type: Boolean,
      required: true
    },
    border: {
      type: String
    },
    bg: {
      type: String
    },
    transform: {
      type: String,
      default: "1.4"
    },
    color: {
      type: String
    }
  },
  emits: ["update:modelValue"],
  computed: {
    bgColor() {
      return this.bg ?? this.$theme?.checkboxBg ?? this.$theme?.bg ?? "#ededed";
    },
    borderColor() {
      return this.border ?? this.$theme?.checkboxBorder ?? this.$theme?.border ?? "green";
    },
    colorColor() {
      return this.color ?? this.$theme?.checkboxColor ?? this.$theme?.color ?? "black";
    }
  }
}
</script>

<template>
  <button @click="$emit('update:modelValue', !modelValue)" :class="{checked: modelValue}"><slot/></button>
</template>

<style scoped>
button {
  padding: 10px 20px 10px 20px;
  border-radius: 15px;
  font-size: 24px;
  transition: all 0.4s;
  overflow: hidden;
  border: transparent solid 2px;
  background-color: v-bind(bgColor);
  outline: v-bind(borderColor) solid 0;
  outline-offset: 0;
  color: v-bind(colorColor);

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

  @media (hover: none) {
    &:active {
      border-radius: 32px;
      transform: scale(v-bind(transform));
      border: v-bind(borderColor) solid 2px;
    }
  }

  &.checked {
    outline: v-bind(borderColor) solid 4px;
    outline-offset: 4px;
  }
}
</style>