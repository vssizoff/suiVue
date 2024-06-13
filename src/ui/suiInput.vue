<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "SuiInput",
  props: {
    colour: {
      type: String,
      default: "rgb(2, 255, 64)"
    },
    clear: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: String,
      default: ""
    },
    date: {
      type: Boolean,
      default: false
    },
    datetime: {
      type: Boolean,
      default: false
    },
    email: {
      type: Boolean,
      default: false
    },
    month: {
      type: Boolean,
      default: false
    },
    number: {
      type: Boolean,
      default: false
    },
    password: {
      type: Boolean,
      default: false
    },
    search: {
      type: Boolean,
      default: false
    },
    tel: {
      type: Boolean,
      default: false
    },
    time: {
      type: Boolean,
      default: false
    },
    url: {
      type: Boolean,
      default: false
    },
    week: {
      type: Boolean,
      default: false
    },
    max: null,
    min: null,
    maxLength: null,
    minLength: null,
    placeholder: String,
    readonly: Boolean,
    pattern: String,
    border: {
      type: String
    },
    bg: {
      type: String
    },
    transform: {
      type: String,
      default: "1.2"
    },
    color: {
      type: String
    }
  },
  computed: {
    type() {
      if (this.date) return "date";
      if (this.datetime) return "datetime-local";
      if (this.email) return "email";
      if (this.month) return "month";
      if (this.number) return "number";
      if (this.password) return "password";
      if (this.search) return "search";
      if (this.tel) return "tel";
      if (this.time) return "time";
      if (this.url) return "url";
      if (this.week) return "week";
      return "text";
    },
    bgColor() {
      return this.bg ?? this.$theme?.inputBg ?? this.$theme?.bg ?? "#ededed";
    },
    borderColor() {
      return this.border ?? this.$theme?.inputBorder ?? this.$theme?.border ?? "green";
    },
    colorColor() {
      return this.color ?? this.$theme?.inputColor ?? this.$theme?.color ?? "black";
    }
  },
  emits: ["update:model-value"]
})
</script>

<template>
  <input :type="type" :class="{input: true}" :value="modelValue"
         @input="$emit('update:model-value', $event.target.value)"
         :max="max" :min="min" :maxlength="maxLength" :minlength="minLength" :placeholder="placeholder"
         :readonly="readonly" :pattern="pattern">
</template>

<style scoped>
input {
  outline: none;
  padding: 10px 20px 10px 20px;
  border-radius: 15px;
  font-size: 24px;
  transition-duration: 0.4s;
  overflow: hidden;
  border: transparent solid 2px;
  background: v-bind(bgColor);
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