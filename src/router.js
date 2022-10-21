import { createRouter, createWebHistory } from "vue-router";

import CovidVaccine from "./pages/questionnaire/CovidVaccine.vue";
import CovidPolicy from "./pages/questionnaire/CovidPolicy.vue";
import CovidSituation from "./pages/questionnaire/CovidSituation.vue";
import IdentifyUser from "./pages/questionnaire/IdentifyUser.vue";
import WelcomePage from "./pages/WelcomePage.vue";
import ThanksPage from "./pages/ThanksPage.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: WelcomePage },
    { path: "/identify", component: IdentifyUser },
    { path: "/covid-situation", component: CovidSituation },
    { path: "/covid-vaccine", component: CovidVaccine },
    { path: "/covid-policy", component: CovidPolicy },
    { path: "/thanks", component: ThanksPage },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
