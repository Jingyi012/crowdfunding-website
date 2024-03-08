<script setup>
import { ref } from 'vue';
const temp = ref([
    {
        name: 'ABC Company',
        startDate: '21 Jan 2024',
        endDate: '21 Apr 2024',
        fundRaised: 23431,
        target: 1000000
    },
    {
        name: 'DEF Company',
        startDate: '22 Jan 2024',
        endDate: '21 Jun 2024',
        fundRaised: 211131,
        target: 2000000
    },
    {
        name: 'GHI Company',
        startDate: '1 Jan 2024',
        endDate: '23 Apr 2024',
        fundRaised: 13121,
        target: 1000000
    },
    {
        name: 'JKL Company',
        startDate: '1 Jan 2024',
        endDate: '29 Apr 2024',
        fundRaised: 74199,
        target: 1000000
    },
    {
        name: 'MNO Company',
        startDate: '1 Jan 2024',
        endDate: '16 Apr 2024',
        fundRaised: 99141,
        target: 1000000
    },
    {
        name: 'PQR Company',
        startDate: '1 Jan 2024',
        endDate: '16 Apr 2024',
        fundRaised: 99141,
        target: 1000000
    }
]);
</script>

<template>
    <div class="card m-4">
        <div class="card-header pb-0 d-flex justify-content-between align-items-center">
            <h5>Crowdfunding List</h5>
            
            <div class="d-flex">
                <div class="form-outline">
                    <input type="search" id="form1" class="form-control rounded-start rounded-0" placeholder="name"/>
                </div>
                <button id="search-button" type="button" class="btn btn-success rounded-0 rounded-end">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </div>
        <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive p-0">
                <table class="table align-items-center justify-content-center mb-0">
                    <thead>
                        <tr>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                Project
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Start Date <i class="fas fa-filter"></i>
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                End Date <i class="fas fa-filter"></i>
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Fund Raised <i class="fas fa-filter"></i>
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Target
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Status <i class="fas fa-filter"></i>
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in temp" :key="index">
                            <td>
                                <h6 class="item ps-3">{{ item.name }}</h6>
                            </td>
                            <td>
                                <h6 class="item">{{ item.startDate }}</h6>
                            </td>
                            <td>
                                <h6 class="item">{{ item.endDate }}</h6>
                            </td>
                            <td>
                                <h6 class="item">{{ item.fundRaised }}</h6>
                            </td>
                            <td>
                                <h6 class="item">{{ item.target }}</h6>
                            </td>
                            <td>
                                <h6 class="item">Ongoing</h6>
                            </td>
                            <td>
                                <button class="btn mb-0">Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style>
.item {
    margin-bottom: 0;
    font-size: small;
}
</style>
