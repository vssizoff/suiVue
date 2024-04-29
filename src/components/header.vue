<script>
import SuiRadio from "@/ui/suiRadio.vue";
import SuiButton from "@/ui/suiButton.vue";

export default {
  name: "Header",
  components: {SuiButton, SuiRadio}
}
</script>

<template>
  <header>
    <div>
      <SuiRadio v-for="(_, themeName) in $themes" :value="themeName" :modelValue="$themeName" @update:modelValue="$setTheme(themeName)" class="elem">{{themeName}}</SuiRadio>
    </div>
    <nav>
      <SuiButton @click="$router.push('/')" class="elem">main</SuiButton>
      <SuiButton @click="$router.push('/inputs')" class="elem">inputs</SuiButton>
    </nav>
  </header>
</template>

<style scoped>
.elem {
  margin: 10px;
}

header {
  display: flex;
  justify-content: space-between;
}
</style>