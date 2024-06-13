<script>
import IonIcon from "./ionIcon.vue";
import cancelIcon from "./assets/cancel.svg";
import {defineComponent} from "vue";

export default defineComponent({
  name: "SuiFilePreview",
  components: {IonIcon},
  props: {
    file: {
      type: File,
      required: true
    },
    borderRadius: {
      type: String,
      default: "5px"
    }
  },
  emits: ["remove"],
  data() {
    return {
      fileUrl: "",
      cancelIcon
    }
  },
  methods: {
    updateFileUrl() {
      let fileReader = new FileReader();
      fileReader.readAsDataURL(this.file);
      fileReader.onload = url => this.fileUrl = url.target.result;
    },
    remove(event) {
      console.log(event);
      event.stopPropagation();
      this.$emit('remove');
    }
  },
  mounted() {
    if (this.file.type.startsWith('image')) this.updateFileUrl();
  },
  watch: {
    file() {
      if (this.file.type.startsWith('image')) this.updateFileUrl();
    }
  }
})
</script>

<template>
  <div>
    <img :src="cancelIcon" alt="remove file" class="cancel" @click="remove">
    <img v-if="file.type.startsWith('image')" :src="fileUrl" :alt="file.name" class="icon">
    <IonIcon v-else-if="file.type.startsWith('audio') || file.type.startsWith('video')" name="play" class="icon"/>
    <IonIcon v-else name="document" class="icon"/>
    <span>{{file.name}}</span>
  </div>
</template>

<style scoped>
div {
  display: inline-flex;
  flex-direction: column;
  position: relative;
  overflow: visible;
}

.icon {
  max-height: 80px;
  max-width: 80px;
  border-radius: v-bind(borderRadius);
  transition: all 0.4s ease;
}

.cancel {
  max-height: 20px;
  max-width: 20px;
  position: absolute;
  top: -10px;
  right: -10px;
  transform: rotate(0);

  &:hover {
    transform: rotate(360deg);
  }
}

span {
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  font-size: 16px;
  text-align: center;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>