<script>
import SuiInput from "@/ui/suiInput.vue";
import ThemeEditor from "@/components/themeEditor.vue";

export default {
  name: "InputsView",
  components: {ThemeEditor, SuiInput}
}
</script>

<template>
  <SuiInput class="elem"/>
  <SuiInput date class="elem"/>
  <SuiInput datetime class="elem"/>
  <SuiInput email class="elem"/>
  <SuiInput month class="elem"/>
  <SuiInput number class="elem"/>
  <SuiInput password class="elem"/>
  <SuiInput search class="elem"/>
  <SuiInput tel class="elem"/>
  <SuiInput time class="elem"/>
  <SuiInput url class="elem"/>
  <SuiInput week class="elem"/>
</template>

<style scoped>

</style>