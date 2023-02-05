import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/InvoiceHome.vue";
import InvoiceView from "../views/InvoiceView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/invoices/:invoiceId",
    name: "Invoice",
    component: InvoiceView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
