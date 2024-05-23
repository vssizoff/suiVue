import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import {SuiDark, SuiVue} from "@/ui/index.js";
import icon from "@/assets/keys-d.jpg";

const app = createApp(App)

app.use(router)
app.use(SuiVue, {
    themes: {
        test: {
            ...SuiDark,
            bodyBg: `url(${icon})`
        }
    }
});

app.mount('#app')