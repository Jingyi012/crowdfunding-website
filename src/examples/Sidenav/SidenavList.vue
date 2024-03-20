<script setup>
import { useRoute } from "vue-router";
import SidenavItem from "./SidenavItem.vue";


const getRoute = () => {
  const route = useRoute();
  const routeArr = route.path.split("/");
  return routeArr[1];
};
</script>
<template>
  <div class="collapse navbar-collapse w-auto h-auto h-100" id="sidenav-collapse-main">
    <ul class="navbar-nav">
      <!-- admin -->
      <li class="mt-3 nav-item">
        <h6 class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6 ms-2">
          Crowdfund
        </h6>
      </li>
      <li class="nav-item">
        <sidenav-item to="/generallist" :class="getRoute() === 'generallist' ? 'active' : ''" navText="List">
          <template v-slot:icon>
            <i class="ni ni-collection text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>

      <li class="nav-item">
        <sidenav-item to="/crowdfundmanage" :class="getRoute() === 'crowdfundmanage' ? 'active' : ''" navText="Manage">
          <template v-slot:icon>
            <i class="fas fa-money-check text-sm text-dark opacity-10 position-absolute" style="top: 6px;"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item to="/issuer/crowdfundmanage" :class="getRoute() === 'issuer/crowdfundmanage' ? 'active' : ''" navText="Manage">
          <template v-slot:icon>
            <i class="fas fa-list text-sm text-dark opacity-10 position-absolute" style="top: 6px;"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item to="/createCampaign" :class="getRoute() === 'createCampaign' ? 'active' : ''" navText="Create">
          <template v-slot:icon>
            <i class="fas fa-plus text-sm text-dark opacity-10 position-absolute" style="top: 4px;"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="mt-3 nav-item">
        <h6 class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6 ms-2">
          User
        </h6>
      </li>
      <li class="nav-item">
        <sidenav-item to="/usermanage" :class="getRoute() === 'usermanage' ? 'active' : ''" navText="Manage">
          <template v-slot:icon>
            <i class="fas fa-users text-sm text-dark opacity-10 position-absolute" style="top: 6px;"></i>
          </template>
        </sidenav-item>
      </li>

      <!-- user -->
      <li class="mt-3 nav-item">
        <h6 class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6 ms-2">
          ACCOUNT
        </h6>
      </li>
      <li class="nav-item">
        <sidenav-item to="/profile" :class="getRoute() === 'profile' ? 'active' : ''" navText="Profile">
          <template v-slot:icon>
            <i class="ni ni-single-02 text-dark text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>

      <li class="nav-item">
        <sidenav-item to="/transaction" :class="getRoute() === 'transaction' ? 'active' : ''" navText="History">
          <template v-slot:icon>
            <i class="ni ni-app text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="mt-3 nav-item">
        <h6 class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6 ms-2">
          Crowdfund
        </h6>
      </li>
      <li class="nav-item">
        <sidenav-item to="/crowdfundlist" :class="getRoute() === 'crowdfundlist' ? 'active' : ''" navText="List">
          <template v-slot:icon>
            <i class="ni ni-collection text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item to="/manage" :class="getRoute() === 'manage' ? 'active' : ''" navText="Manage">
          <template v-slot:icon>
            <i class="ni ni-credit-card text-success text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>



      <li class="nav-item">
        <sidenav-item to="/tables" :class="getRoute() === 'tables' ? 'active' : ''" navText="Tables">
          <template v-slot:icon>
            <i class="ni ni-calendar-grid-58 text-warning text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>

      <li class="nav-item">
        <sidenav-item to="/billing" :class="getRoute() === 'billing' ? 'active' : ''" navText="Billing">
          <template v-slot:icon>
            <i class="ni ni-credit-card text-success text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
    </ul>
  </div>

</template>
