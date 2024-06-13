<script>
import SuiCheckbox from "./suiCheckbox.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "SuiRadio",
  components: {SuiCheckbox},
  props: {
    modelValue: {
      required: true
    },
    value: {
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
    checked: {
      get() {return this.modelValue === this.value},
      set(value) {if (value) this.$emit("update:modelValue", this.value)}
    }
  }
})
</script>

<template>
  <SuiCheckbox v-model="checked" :bg="bg" :border="border" :transform="transform" :color="color"><slot/></SuiCheckbox>
</template>