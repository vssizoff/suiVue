<script>
import IonIcon from "@/ui/ionIcon.vue";
import SuiButton from "@/ui/suiButton.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "SuiVerticalNav",
  components: {SuiButton, IonIcon},
  props: {
    data: {
      type: Array,
      required: true
    },
    bg: {
      type: String
    }
  },
  computed: {
    bgColor() {
      return this.bg ?? this.$theme?.verticalNavBg ?? this.$theme?.bg ?? "#ededed";
    }
  },
  emits: ["onClick"]
})
</script>

<template>
<nav>
  <ul>
    <li v-for="({text, icon, ionIcon, alt, onClick}, index) in data">
      <SuiButton transform="120%" @click="(onClick ?? (event => $emit('onClick', event, index)))($event)">
        <img v-if="icon" :src="icon" :alt="alt ?? text">
        <IonIcon v-if="ionIcon" :name="ionIcon" :alt="alt ?? text"/>
        <span v-if="text">{{text}}</span>
      </SuiButton>
    </li>
  </ul>
</nav>
</template>

<style scoped>
nav {
  border-radius: 15px;
  transition-duration: 0.4s;
  border: transparent solid 2px;
  background: v-bind(bgColor);
  display: inline-flex;

  ul {
    display: inline-flex;
    align-items: center;
    flex-direction: column;
    padding: 0;
    list-style: none;

    li {
      margin-bottom: 10px;
      width: 100%;

      &:last-child {
        margin-bottom: 0;
      }

      button {
        width: 100%;

        img {
          max-width: 24px;
          max-height: 24px;
          margin-right: 4px;
        }
      }
    }
  }
}
</style>