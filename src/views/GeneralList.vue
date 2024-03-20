<script setup>
import { ref } from "vue";
import CrowdFundCard from "./components/CrowdfundCard.vue";

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
    <div class="card m-4 px-4 pt-1">
        <div style="margin-top: 3rem;" class="d-flex justify-content-center align-items-center w-100"
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
    </div>
</template>

<style></style>
