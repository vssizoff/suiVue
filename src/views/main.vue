<script>
import icon from "@/assets/keys-d.jpg";
import SuiRadio from "@/ui/suiRadio.vue";
import SuiButton from "@/ui/suiButton.vue";
import SuiCheckbox from "@/ui/suiCheckbox.vue";
import SuiFileInput from "@/ui/suiFileInput.vue";
import SuiColorInput from "@/ui/suiColorInput.vue";
import SuiModalWindow from "@/ui/suiModalWindow.vue";
import SuiVerticalNav from "@/ui/suiVerticalNav.vue";
import ThemeEditor from "@/components/header.vue";
import SuiSlider from "@/ui/suiSlider.vue";

export default {
  name: "MainView",
  components: {
    SuiSlider,
    ThemeEditor,
    SuiRadio, SuiCheckbox, SuiVerticalNav, SuiModalWindow, SuiFileInput, SuiColorInput, SuiButton},
  data() {
    return {
      color: "#000",
      files: [],
      open: false,
      navData: [
        {text: "test", onClick: console.warn},
        {text: "test2", icon: icon},
        {text: "test3", ionIcon: "attach"},
        {icon: icon, onClick: console.warn}
      ],
      checkbox: false,
      radio: "test",
      num: 10
    }
  }
}
</script>

<template>
  <SuiButton @click="open = !open" class="elem">test</SuiButton>
  <SuiButton class="elem">test</SuiButton>
  <SuiButton @click="open = !open" class="elem" disabled>disabled</SuiButton>
  <SuiSlider v-model="num"/>
  <SuiColorInput v-model="color" class="elem"/>
  <SuiFileInput v-model="files" multiple class="elem">Select files</SuiFileInput>
  <SuiCheckbox v-model="checkbox" class="elem">test</SuiCheckbox>
  <SuiRadio value="test" v-model="radio" class="elem">test</SuiRadio>
  <SuiRadio value="test0" v-model="radio" class="elem">test0</SuiRadio>
  <SuiVerticalNav :data="navData" class="elem" @onClick="console.log"/>
  <a class="elem" v-suiButton>test</a>
  <SuiModalWindow v-model:open="open">
    <SuiColorInput v-model="color"/>
    <SuiFileInput v-model="files" multiple>Select files</SuiFileInput>
  </SuiModalWindow>
</template>

<style scoped>
.elem {
  margin: 20px;
}
</style>

<style>
body {
  padding: 100px;
}
</style>