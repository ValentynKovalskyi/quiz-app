import StartPage from "../views/StartPage.vue";
import SignUpPage from "../views/SignUpPage.vue";
import { createRouter } from "vue-router"
import { createWebHashHistory } from "vue-router";

const routes = [
    { path: '/', component: StartPage },
    { path: '/signup', component: SignUpPage },
  ]
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

  export default router;