import { createApp } from "vue"
import App from "./App.vue"
import Modals from "./plugins/modals"

import "./assets/styles.css"

createApp(App)
    .use(Modals)
    .mount("#app")
