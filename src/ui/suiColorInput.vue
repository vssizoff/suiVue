<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "suiColorInput",
  props: {
    bg: {
      type: String
    },
    border: {
      type: String
    },
    modelValue: {
      type: String,
      default: "#000"
    }
  },
  emits: ["update:model-value"],
  computed: {
    bgColor() {
      return this.bg ?? this.$theme?.colorInputBg ?? this.$theme?.bg ?? "#ededed";
    },
    borderColor() {
      return this.border ?? this.$theme?.colorInputBorder ?? this.$theme?.border ?? "green";
    }
  }
})
</script>

<template>
  <input type="color" class="colour" :value="modelValue" @input="$emit('update:model-value', $event.target.value)">
</template>

<style scoped>
input {
  border-radius: 15px;
  height: 60px;
  width: 60px;
  border: none;
  appearance: none;
  padding: 0;
  transition: all 0.4s ease;
  background: v-bind(bgColor);
  display: inline-flex;

  &::-webkit-color-swatch {
    border-radius: 50%;
    transition: all 0.2s ease, transform 0.6s ease, border 2s ease 1s;
  }

  &::-webkit-color-swatch-wrapper {
    padding: 10px;
  }

  &:focus-visible {
    transform: scale(1.6);
    border: v-bind(borderColor) solid 2px;
    outline: none;

    &::-webkit-color-swatch {
      transform: scale(1.8);
      border: v-bind(modelValue) solid 2px;
    }
  }

  @media (hover: hover) {
    &:hover {
      transform: scale(1.6);
      border: v-bind(borderColor) solid 2px;

      &::-webkit-color-swatch {
        transform: scale(1.8);
        border: v-bind(modelValue) solid 2px;
      }
    }
  }

  @media (hover: none) {
    &:active {
      transform: scale(1.6);
      border: v-bind(borderColor) solid 2px;

      &::-webkit-color-swatch {
        transform: scale(1.8);
        border: v-bind(modelValue) solid 2px;
      }
    }
  }
}
</style>