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
    }
  },
  computed: {
    bgColor() {
      return this.bg ?? this.$theme?.buttonBg ?? this.$theme?.bg ?? "#ededed";
    },
    borderColor() {
      return this.border ?? this.$theme?.buttonBorder ?? this.$theme?.border ?? "green";
    },
    colorColor() {
      return this.color ?? this.$theme?.buttonColor ?? this.$theme?.color ?? "black";
    }
  }
}
</script>

<template>
<button ><slot/></button>
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
  background-color: v-bind(bgColor);
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
}
</style>