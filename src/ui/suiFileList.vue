<script>
import SuiFilePreview from "./suiFilePreview.vue";

export default {
  name: "SuiFileList",
  components: {SuiFilePreview},
  props: {
    files: {
      type: Array,
      required: true
    },
    borderRadius: {
      type: String,
      default: "5px"
    }
  },
  emits: ["update:files"],
  computed: {
    width() {
      return `${this.files.length * 80 + 20}px`;
    }
  }
}
</script>

<template>
  <div>
    <SuiFilePreview v-for="(file, index) of files" :file="file" :borderRadius="borderRadius" @remove="$emit('update:files', files.filter((_, i) => i !== index))"/>
  </div>
</template>

<style scoped>
div {
  display: inline-flex;
  width: v-bind(width);
  overflow: visible;
  max-width: 500px;
  border-radius: v-bind(borderRadius);
  transition: all 0.4s ease;
  padding: 2px;

  * {
    margin-right: 5px;
  }

  *:last-child {
    margin-right: 0;
  }
}
</style>