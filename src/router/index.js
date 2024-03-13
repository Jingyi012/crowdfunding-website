import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Billing from "../views/Billing.vue";
import VirtualReality from "../views/VirtualReality.vue";
import RTL from "../views/Rtl.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import AdminCrowdfundManage from "../views/AdminCrowdfundManage.vue";
import UserManage from "../views/UserManage.vue";
import Notification from "../views/Notification.vue";
import TransactionList from "../views/TransactionList.vue";
import CrowdfundList from "../views/CrowdfundList.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard-default",
  },
  {
    path: "/dashboard-default",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/crowdfundmanage",
    name: "AdminCrowdfundManage",
    component: AdminCrowdfundManage,
  },
  {
    path: "/usermanage",
    name: "UserManage",
    component: UserManage,
  },
  {
    path: "/notification",
    name: "Notification",
    component: Notification,
  },
  {
    path: "/transactionlist",
    name: "Transactions",
    component: TransactionList,
  },
  {
    path: "/crowdfundlist",
    name: "CrowdfundList",
    component: CrowdfundList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
