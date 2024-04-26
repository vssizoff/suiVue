<script>
import SuiFileList from "./suiFileList.vue";

export default {
  name: "SuiFileInput",
  components: {SuiFileList},
  props: {
    border: {
      type: String
    },
    bg: {
      type: String
    },
    modelValue: {
      type: Array,
      default: []
    },
    accept: {
      type: String,
      default: "*"
    },
    multiple: {
      type: Boolean,
      default: false
    },
    transform: {
      type: String,
      default: "1.4"
    },
    color: {
      type: String
    }
  },
  emits: ["update:model-value"],
  computed: {
    bgColor() {
      return this.bg ?? this.$theme?.fileInputBg ?? this.$theme?.bg ?? "#ededed";
    },
    borderColor() {
      return this.border ?? this.$theme?.fileInputBorder ?? this.$theme?.border ?? "green";
    },
    colorColor() {
      return this.color ?? this.$theme?.fileInputColor ?? this.$theme?.color ?? "black";
    }
  },
  data() {
    return {
      borderRadius: "5px",
      dragOver: false
    }
  },
  methods: {
    dropHandler(event) {
      event.preventDefault();
      this.$emit("update:model-value", [...this.modelValue, ...Array.from(event.dataTransfer.files)]);
      this.dragOver = false;
    }
  }
}
</script>

<template>
  <label @mouseenter="borderRadius = '20px'"
         @mouseleave="borderRadius = '5px'"
         @drop="dropHandler"
         @dragover="$event.preventDefault(); dragOver = true"
         @dragleave="$event.preventDefault(); dragOver = false">
    <input type="file" @input="$emit('update:model-value', [...modelValue, ...Array.from($event.target.files)])"
           :accept="accept" :multiple="multiple">
    <span class="button" :class="{dragOver: dragOver}">
      <SuiFileList :files="modelValue" @update:files="([files]) => $emit('update:model-value', files)" class="fileList" :borderRadius="borderRadius" v-if="modelValue.length"/>
      <span><slot/></span>
    </span>
  </label>
</template>

<style scoped>
input {
  position: absolute;
  z-index: -1;
  opacity: 0;
  display: block;
  width: 0;
  height: 0;
}

label .button {
  display: inline-flex;
  flex-direction: column;
  outline: none;
  border-radius: 15px;
  font-size: 24px;
  transition-duration: 0.4s;
  overflow: hidden;
  border: transparent solid 2px;
  background-color: v-bind(bgColor);
  align-items: center;
  color: v-bind(colorColor);

  &.dragOver {
    background-color: rgba(0, 0, 0, 0.5);
  }

  span {
    padding: 10px 20px 10px 20px;
  }

  .fileList {
    margin: 10px 10px 0;
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

input:focus-visible + .button {
  border-radius: 32px;
  transform: scale(v-bind(transform));
  border: v-bind(borderColor) solid 2px;
}
</style>