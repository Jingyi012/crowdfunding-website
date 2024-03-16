<script setup>
import DonatorList from "./components/DonatorList.vue";
import ArgonButton from "@/components/ArgonButton.vue";


import { ref, onBeforeMount, onMounted, onBeforeUnmount } from "vue";
import { useStore } from "vuex";

import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";

const body = document.getElementsByTagName("body")[0];

const store = useStore();
const showdonation = ref(true);
onMounted(() => {
  store.state.isAbsolute = true;
  setNavPills();
  setTooltip();
});
onBeforeMount(() => {
  store.state.layout = "profile-overview";
  store.state.imageLayout = "profile-overview";
  store.state.showNavbar = true;
  store.state.showFooter = true;
  store.state.hideConfigButton = true;
  body.classList.add("profile-overview");
});
onBeforeUnmount(() => {
  store.state.layout = "default";
  store.state.isAbsolute = false;
  store.state.imageLayout = "default";
  store.state.showNavbar = true;
  store.state.showFooter = true;
  store.state.hideConfigButton = false;
  body.classList.remove("profile-overview");
});



const selectedAmount = ref(null);

const selectAmount = (amount) => {
  selectedAmount.value = amount;
};

const updateSelectedAmount = () => {
  selectedAmount.value = selectedAmount.value ? parseInt(selectedAmount.value) : null;
};

const toggledonation= () => {
  showdonation.value = !showdonation.value;
};

</script>

<template>
  <div class="container-fluid">

    <div class="page-header min-height-400" style="
        background-image: url(https://www.unodc.org/res/endht/get-involved_html/join-theme.png);
        margin-right: -24px;
        margin-left: -34%;
      ">
      <span class="mask bg-gradient-success opacity-1"></span>
    </div>
  </div>
  <div class="container-fluid" style="margin-top:-5%;">
    <div class="row">
      <div class="col-lg-8">
        <div class="col-md-12 mb-4">
          <div class="row mb-4">

            <div class="card">
              <div class="card-header pb-0 p-3">
                <div class="row">
                  <div class="col-6 d-flex align-items-center">
                    <h4>Save Water Campaign</h4>

                  </div>


                  <div class="col-6 text-end">
                    <argon-button @click="toggledonation" color="dark" variant="gradient">
                      <i class="bi bi-heart-fill"></i>
                      Donate Now
                    </argon-button>
                  </div>
                  <div class="col-12 text-end p-3">
                    <div class="progress" style="height:40px;border-radius:10px;">
                      <div class="progress-bar" role="progressbar" style="width: 50%;border-radius:10px;"
                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-md-4 mb-md-0 mb-4">
                    <div
                      class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-column">
                      <h3>Our Goal</h3>
                      <h6>100000ETH</h6>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div
                      class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-column">
                      <h3>Raised</h3>
                      <h6>5000ETH</h6>
                    </div>
                  </div>
                  <div class="col-md-4 mb-md-0 mb-4">
                    <div
                      class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-column">
                      <h3>Completed</h3>
                      <h6>50%</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <div class="row mb-4">
            <DonatorList />
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="col-md-12 mb-4">
          <div class="card">
            <div class="pb-0 p-3">
              <div class="col-12 align-items-center">
                <div class="mb-3 flex-row d-flex  align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="black"
                    class="bi bi-info-circle-fill mr-4" viewBox="0 0 16 16">
                    <path
                      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                  </svg>
                  <div class="ml-3 align-items-center d-flex">
                    <h6 class="mb-0">&nbsp;Campaign Info</h6>
                  </div>
                </div>
                <hr />
                <div class="d-flex align-items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-calendar" viewBox="0 0 16 16">
                    <path
                      d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                  </svg>
                  <p style="margin-bottom:0;margin-left:5px;">16 March - 21 April 2023</p>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-bullseye" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
                    <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                  </svg>
                  <p style="margin-bottom:0;margin-left:5px;">Implement clean water projects</p>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-bookmark" viewBox="0 0 16 16">
                    <path
                      d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                  </svg>
                  <p style="margin-bottom:0;margin-left:5px;">Business</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="col-md-12 mb-4">
          <div class="card mt-4">
            <div class="p-4">
              <h6>About the campaign</h6>
              <hr />
              Welcome to the Clean Water Initiative! At the heart of our mission is the commitment to bring clean and
              safe drinking water to communities that need it most. Lack of access to clean water is a global challenge,
              and together, we can make a significant impact on the lives of countless individuals.
            </div>
          </div>
        </div>

        <div class="col-md-12 mb-4">
          <div class="card mt-4">
            <div class="p-4">
              <div class="col-12 align-items-center">
                <div class="row">
                  <div class="col-4 align-items-center justify-content-center d-flex">
                    <img :src="require('@/assets/img/bruce-mars.jpg')" style="width: 80px; height: 80px;"
                      alt="Your Image" />

                  </div>
                  <div class="col-8 align-items-center justify-content-center d-flex">
                    <div>
                      <h6 style="text-align:center;margin:0;">Campaign Organiser</h6>
                      <p style="text-align:center;margin:0;">Bruce Lee</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-12 mb-4">
          <div class="card mt-4">
            <div class="p-4">
              <div class="col-12 align-items-center justify-content-center">

                <h4 style="text-align:center;margin:0;">Every dollar counts!</h4>
                <h6 style="text-align:center;margin:0;">Your contribution is meaningful</h6>

              </div>
            </div>
          </div>
        </div>


      </div>
   

    </div>
    <div v-if="showdonation" class="donation-pop-out">
      <div @click="toggledonation"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-x-circle closebutton" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
      </svg></div>
      <h4 style="margin-left:10px">Donation amount</h4>

      <button id="button" :class="{ 'selected': selectedAmount === 100 }" @click="selectAmount(100)">100 ETH</button>
      <button id="button" :class="{ 'selected': selectedAmount === 200 }" @click="selectAmount(200)">200 ETH</button>
      <button id="button" :class="{ 'selected': selectedAmount === 300 }" @click="selectAmount(300)">300 ETH</button>

      <input class="donationamount" v-model="selectedAmount" @input="updateSelectedAmount" placeholder="Amount" />ETH
      <div class="d-flex align-items-center mt-3" style="margin-left:10px">
        <div class="checkbox-wrapper-46">
          <input class="inp-cbx" id="cbx-46" type="checkbox" />
          <label class="cbx" for="cbx-46"><span>
              <svg width="12px" height="10px" viewbox="0 0 12 10">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
              </svg></span>
          </label>
        </div>
        <p class="mb-0" style="display:inline;font-size:14px;margin-left:3px;">I agree with the terms and conditions
        </p>
      </div>
      <div class="d-flex align-items-center justify-content-center mt-4">


        <button id="paynowbutton"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-wallet-fill" style="margin-right:5px;" viewBox="0 0 16 16">
            <path
              d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542s.987-.254 1.194-.542C9.42 6.644 9.5 6.253 9.5 6a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2z" />
            <path
              d="M16 6.5h-5.551a2.7 2.7 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5s-1.613-.412-2.006-.958A2.7 2.7 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5z" />
          </svg>Pay Now</button>
      </div>

    </div>


  </div>
</template>


<style scoped>

.closebutton{
  position: absolute;
  top: 5%;
  right: 5%;
}
#paynowbutton {
  background-color: #3BD99E;
  color: white;
  border: 1px solid #3BD99E;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  margin: 10px;
}

.donationamount {
  margin: 20px 3px 0 10px;
  padding: 10px;
  font-weight: 500;
  font-size: larger;
}

#button {
  background-color: #fff;
  color: #3BD99E;
  border: 1px solid #3BD99E;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  margin: 10px;
}

#button.selected {
  background-color: #3BD99E;
  color: #fff;

}

.donation-pop-out {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f2f2f2;
  height: 400px;
  width: 30%;
  z-index: 99999;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.checkbox-wrapper-46 input[type="checkbox"] {
  display: none;
  visibility: hidden;
}

.checkbox-wrapper-46 .cbx {
  margin: auto;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
}

.checkbox-wrapper-46 .cbx span {
  display: inline-block;
  vertical-align: middle;
  transform: translate3d(0, 0, 0);
}

.checkbox-wrapper-46 .cbx span:first-child {
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 3px;
  transform: scale(1);
  vertical-align: middle;
  border: 1px solid #9098A9;
  transition: all 0.2s ease;
}

.checkbox-wrapper-46 .cbx span:first-child svg {
  position: absolute;
  top: 3px;
  left: 2px;
  fill: none;
  stroke: #FFFFFF;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  transition: all 0.3s ease;
  transition-delay: 0.1s;
  transform: translate3d(0, 0, 0);
}

.checkbox-wrapper-46 .cbx span:first-child:before {
  content: "";
  width: 100%;
  height: 100%;
  background: #3BD99E;
  display: block;
  transform: scale(0);
  opacity: 1;
  border-radius: 50%;
}

.checkbox-wrapper-46 .cbx span:last-child {
  padding-left: 8px;
}

.checkbox-wrapper-46 .cbx:hover span:first-child {
  border-color: #3BD99E;
}

.checkbox-wrapper-46 .inp-cbx:checked+.cbx span:first-child {
  background: #3BD99E;
  border-color: #3BD99E;
  animation: wave-46 0.4s ease;
}

.checkbox-wrapper-46 .inp-cbx:checked+.cbx span:first-child svg {
  stroke-dashoffset: 0;
}

.checkbox-wrapper-46 .inp-cbx:checked+.cbx span:first-child:before {
  transform: scale(3.5);
  opacity: 0;
  transition: all 0.6s ease;
}

@keyframes wave-46 {
  50% {
    transform: scale(0.9);
  }
}
</style>
