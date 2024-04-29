<script>
import SuiRadio from "@/ui/suiRadio.vue";

export default {
  name: "ThemeEditor",
  components: {SuiRadio}
}
</script>

<template>
  <SuiRadio v-for="(_, themeName) in $themes" :value="themeName" :modelValue="$themeName" @update:modelValue="$setTheme(themeName)" class="elem">{{themeName}}</SuiRadio>
</template>

<style scoped>
.elem {
  margin: 10px;
}
</style>