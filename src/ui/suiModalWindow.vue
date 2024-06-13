<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "SuiModalWindow",
  data() {
    return {
      closed: true
    }
  },
  props: {
    open: {
      type: Boolean,
      required: true
    },
    bg: {
      type: String
    }
  },
  methods: {
    close() {
      this.$emit("update:open", false)
    }
  },
  mounted() {
    window.addEventListener("keydown", event => {if (event.key === "Escape" && this.open) this.close()})
  },
  watch: {
    open() {
      if (this.open) {
        this.closed = false;
      }
      else {
        setTimeout(() => this.closed = true, 400)
      }
    }
  },
  computed: {
    bgColor() {
      return this.bg ?? this.$theme?.modalWindowBg ?? this.$theme?.bg ?? "#ededed"
    }
  }
})
</script>

<template>
  <teleport to="body" v-if="!closed">
    <div @click="close" :class="{'opened': open}">
      <dialog :open="open" @click="$event.stopPropagation()" :class="{'hidden': !open}">
        <slot/>
      </dialog>
    </div>
  </teleport>
</template>

<style scoped>
div {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background: #000000da;
  align-items: center;
  transition: opacity .4s ease-in-out;
  opacity: 0;

  &.opened {
    opacity: 1;
  }
}

dialog {
  text-align: center;
  background: v-bind(bgColor);
  padding: 20px;
  border-radius: 20px;
  border: none;
  display: block;

  &[open] {
    animation: show .4s ease-in-out;
  }

  &.hidden {
    animation: hide .4s ease-in-out;
  }
}

@keyframes show {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes hide {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
</style>