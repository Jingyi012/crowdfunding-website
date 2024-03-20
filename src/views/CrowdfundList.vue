<script setup>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
import { onBeforeUnmount, onBeforeMount, ref } from "vue";
import { useStore } from "vuex";
import CrowdFundCard from "./components/CrowdfundCard.vue";


const body = document.getElementsByTagName("body")[0];


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

const transactionList = [{
  title: "Artificial Intelligence",
  category: "Charity",
  objective: "To enhance experience",
  goal: 2,
  raised: 1233,
  investor: 3,
  status: "Open"
}, {
  title: "Artificial Intelligence",
  category: "Business",
  objective: "To enhance experience",
  goal: 2,
  raised: 1233,
  investor: 3,
  status: "Open"
}, {
  title: "Artificial Intelligence",
  category: "Education",
  objective: "To enhance experience",
  goal: 2,
  raised: 1233,
  investor: 3,
  status: "Closed"
}, {
  title: "Artificial Intelligence",
  category: "Business",
  objective: "To enhance experience",
  goal: 2,
  raised: 1233,
  investor: 3,
  status: "Closed"
}, {
  title: "Artificial Intelligence",
  category: "Charity",
  objective: "To enhance experience",
  goal: 2,
  raised: 1233,
  investor: 3,
  status: "Closed"
},];

const filteredTransactions = ref(transactionList);
const selectedCategory = ref(""); // Track the selected category

const filterTransactions = (category) => {
  if (selectedCategory.value === category) {
    filteredTransactions.value = transactionList;
    selectedCategory.value = "";
  }
  else {
    selectedCategory.value = category; // Update the selected category
    filteredTransactions.value = transactionList.filter(transaction => transaction.category === category);
  }
};

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
  <main class="mt-4 main-content">
    <section>
      <div style="margin-top: 8rem;" class="d-flex justify-content-center align-items-center w-100"
        :class="`${darkMode ? 'bg-transparent' : ''}`">
        <!-- admin -->
        <button type="button" class="btn" :class="{ 'btn-success': selectedCategory === 'Education' }"
          @click="filterTransactions('Education')">
          Education
        </button>
        <button type="button" class="btn mx-3" :class="{ 'btn-success': selectedCategory === 'Business' }"
          @click="filterTransactions('Business')">
          Business
        </button>
        <button type="button" class="btn" :class="{ 'btn-success': selectedCategory === 'Charity' }"
          @click="filterTransactions('Charity')">
          Charity
        </button>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row py-5">
              <div class="col-lg-4 col-md-6 col-12 px-3" v-for="(transaction, index) in filteredTransactions"
                :key="index">
                <CrowdFundCard :title="`${transaction.title}`" :category="`${transaction.category}`"
                  :objective="`${transaction.objective}`" :goal="`${transaction.goal}`"
                  :raised="`${transaction.raised}`" :investor="`${transaction.investor}`"
                  :status="`${transaction.status}`" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  </main>
  <app-footer />
</template>
