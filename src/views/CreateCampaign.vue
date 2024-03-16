<script setup>
import ArgonButton from "@/components/ArgonButton.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
import Navbar from "@/examples/PageLayout/Navbar.vue";
import { onBeforeMount, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
const body = document.getElementsByTagName("body")[0];
import FundsTransaction from "./components/FundsTransaction.vue";

const store = useStore();
onBeforeMount(() => {
  store.state.hideConfigButton = true;
  store.state.showNavbar = false;
  store.state.showSidenav = false;
  store.state.showFooter = false;
  body.classList.remove("bg-gray-100");
});
onBeforeUnmount(() => {
  store.state.hideConfigButton = false;
  store.state.showNavbar = true;
  store.state.showSidenav = true;
  store.state.showFooter = true;
  body.classList.add("bg-gray-100");
});

</script>
<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar isBlur="blur  border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow" v-bind:darkMode="true"
          isBtn="bg-gradient-success" />
      </div>
    </div>
  </div>
  <div class="page-header align-items-start min-vh-50 pt-5 pb-11 position-absolute top-0 w-100" style="
        background-image: url(&quot;https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg&quot;);
        background-position: top;
      "></div>
  <main class="mt-0 main-content">
    <div class="px-6 mt-6 container-fluid">
      <div class="mt-8 row">
        <div class="col-md-4">
          <!-- <CreditCard /> -->
          <FundsTransaction />
        </div>
        <div class="col-md-8">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-flex align-items-center">
                <p class="mb-0">Create Investment</p>
                <!-- <argon-button color="success" size="sm" class="ms-auto">Settings</argon-button> -->
              </div>
            </div>
            <div class="card-body">
    <p class="text-uppercase text-sm">Investment General Information</p>
    <div class="row">
        <div class="col-md-6">
            <label for="investmentName" class="form-control-label">Investment Name</label>
            <argon-input type="text" placeholder="Enter investment name"></argon-input>
        </div>
        <div class="col-md-6">
            <label for="investmentPoster" class="form-control-label">Investment Poster (Image File Format)</label>
            <br>
            <input type="file" class="form-control-file" id="investmentPoster" accept="image/*" />
        </div>
        <div class="col-md-6">
            <label for="investmentPurpose" class="form-control-label">Investment Purpose</label>
            <argon-input type="text" placeholder="Enter investment description"></argon-input>

        </div>
        <div class="col-md-6">
            <label for="investmentOrganization" class="form-control-label">Investment Organization Name</label>
            <argon-input type="text" placeholder="Enter organization name"></argon-input>
        </div>
    </div>

    <hr class="horizontal dark" />
    
    <p class="text-uppercase text-sm">Investment Details</p>
    <div class="row">
        <div class="col-md-6">
            <label for="investmentPricePerShare" class="form-control-label">Investment Price Per Share (ETH)</label>
            <argon-input type="number" step="0.01" placeholder="0.00"></argon-input>
        </div>
        <div class="col-md-6">
            <label for="investmentTargetAmount" class="form-control-label">Investment Target Amount (ETH)</label>
            <argon-input type="number" step="0.01" placeholder="0.00"></argon-input>
        </div>
        <div class="col-md-6">
            <label for="investmentDeadline" class="form-control-label">Investment Deadline (dd/mm/yy hh:mm)</label>
            <argon-input type="datetime-local" placeholder="Select deadline"></argon-input>
        </div>
        <div class="col-md-6">
            <label for="investmentValuation" class="form-control-label">Investment Valuation</label>
            <argon-input type="text" placeholder="Enter valuation"></argon-input>
        </div>
    </div>

    <hr class="horizontal dark" />

    <p class="text-uppercase text-sm">Investment Breakdown</p>
    <div class="row">
        <div class="col-md-6">
            <label for="minInvestment" class="form-control-label">Minimum Investment (ETH)</label>
            <argon-input type="number" step="0.01" placeholder="0.00"></argon-input>
        </div>
        <div class="col-md-6">
            <label for="maxInvestment" class="form-control-label">Maximum Investment (ETH)</label>
            <argon-input type="number" step="0.01" placeholder="0.00"></argon-input>
        </div>
        <div class="col-md-6">
            <label for="minSharesOffered" class="form-control-label">Minimum Number of Shares Offered</label>
            <argon-input type="number" placeholder="Enter minimum shares"></argon-input>
        </div>
        <div class="col-md-6">
            <label for="maxSharesOffered" class="form-control-label">Maximum Number of Shares Offered</label>
            <argon-input type="number" placeholder="Enter maximum shares"></argon-input>
        </div>
        <div class="col-md-6">
            <label for="offeringType" class="form-control-label">Offering Type</label>
            <select class="form-control" id="offeringType">
                <option value="---Select offering type---" selected disabled>--Select offering type--</option>
                <option value="public">Public</option>
                <option value="private">Private</option>
            </select>
        </div>
        <div class="col-md-6">
            <label for="assetType" class="form-control-label">Asset Type</label>
            <select class="form-control" id="assetType">
                <option value="---Select asset type---" selected disabled>--Select asset type--</option>
                <option value="equity">Equity</option>
                <option value="debt">Debt</option>
                <option value="real estate">Real Estate</option>
            </select>
        </div>
        <div class="col-md-6">
            <label for="sharesOffered" class="form-control-label">Shares Offered</label>
            <select class="form-control" id="sharesOffered">
                <option value="---Select shares offered---" selected disabled>--Select shares offered--</option>
                <option value="common">Common</option>
                <option value="preferred">Preferred</option>
            </select>
        </div>
    </div>

    <argon-button color="success" size="sm" class="ms-auto" style="float: right;">Submit</argon-button>
</div>


          </div>
        </div>
        
      </div>

    </div>
  </main>
  <app-footer />
</template>
