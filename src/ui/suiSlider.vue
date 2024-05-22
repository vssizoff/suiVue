<script>
export default {
  name: "SuiSlider",
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    color: {
      type: String,
      default: "green"
    },
    progressColor: {
      type: String,
      default: "green"
    },
    remainedColor: {
      type: String,
      default: "gray"
    }
  },
  computed: {
    progress() {
      return this.modelValue / this.max * 100;
    },
    gradient() {
      return `linear-gradient(to right, ${this.progressColor} 0%, ${this.progressColor} ${this.progress}%, ${this.remainedColor} ${this.progress}%, ${this.remainedColor} 100%)`;
    }
  }
}
</script>

<template>
<input :value="modelValue" @input="$emit('update:modelValue', Number($event.target.value))" :min="min" :max="max" type="range">
</template>

<style scoped>
input {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  height: 6px;
  background: v-bind(gradient);
  transition: all 0.5s ease;

  &:focus-visible::-webkit-slider-thumb {
    transform: scale(1.8);
  }

  @media (hover: hover) {
    &::-webkit-slider-thumb:hover {
      transform: scale(1.4);
      cursor: ew-resize;
    }
    &::-moz-range-thumb:hover {
      transform: scale(1.4);
      cursor: ew-resize;
    }
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 15px;
    width: 15px;
    background-color: v-bind(color);
    border-radius: 50%;
    border: none;
    transition: all 0.5s ease;
  }

  &::-moz-range-thumb {
    height: 15px;
    width: 15px;
    background-color: v-bind(color);
    border-radius: 50%;
    border: none;
    transition: all 0.5s ease;
  }
}
</style>