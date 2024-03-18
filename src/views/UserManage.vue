<script setup>
import { ref } from 'vue';
const temp = ref([
    {
        "username": "john_doe",
        "firstName": "John",
        "lastName": "Doe",
        "phone": "+1234567890",
        "email": "john.doe@example.com",
        "walletAddress": "0xAbCdEf1234567890"
    },
    {
        "username": "jane_smith",
        "firstName": "Jane",
        "lastName": "Smith",
        "phone": "+1987654321",
        "email": "jane.smith@example.com",
        "walletAddress": "0xFeDcBa0987654321"
    },
    {
        "username": "alice_johnson",
        "firstName": "Alice",
        "lastName": "Johnson",
        "phone": "+1122334455",
        "email": "alice.johnson@example.com",
        "walletAddress": "0x1234567890AbCdEf"
    },
    {
        "username": "mark_turner",
        "firstName": "Mark",
        "lastName": "Turner",
        "phone": "+1555666777",
        "email": "mark.turner@example.com",
        "walletAddress": "0x4567890AbCdEf123"
    },
    {
        "username": "sarah_brown",
        "firstName": "Sarah",
        "lastName": "Brown",
        "phone": "+1777888999",
        "email": "sarah.brown@example.com",
        "walletAddress": "0x67890AbCdEf12345"
    },
    {
        "username": "chris_jackson",
        "firstName": "Chris",
        "lastName": "Jackson",
        "phone": "+1888999000",
        "email": "chris.jackson@example.com",
        "walletAddress": "0xAbCdEf1234567890"
    },
    {
        "username": "emily_taylor",
        "firstName": "Emily",
        "lastName": "Taylor",
        "phone": "+1444555666",
        "email": "emily.taylor@example.com",
        "walletAddress": "0xFeDcBa0987654321"
    },
    {
        "username": "david_clark",
        "firstName": "David",
        "lastName": "Clark",
        "phone": "+1222333444",
        "email": "david.clark@example.com",
        "walletAddress": "0x1234567890AbCdEf"
    },
    {
        "username": "jennifer_white",
        "firstName": "Jennifer",
        "lastName": "White",
        "phone": "+1333444555",
        "email": "jennifer.white@example.com",
        "walletAddress": "0xAbCdEf1234567890"
    },
    {
        "username": "ryan_miller",
        "firstName": "Ryan",
        "lastName": "Miller",
        "phone": "+1666777888",
        "email": "ryan.miller@example.com",
        "walletAddress": "0xFeDcBa0987654321"
    }
]
);

const sortBy = ref(null);
const sortOrder = ref('asc');

function sortData(criteria) {
    if (sortBy.value === criteria) {
        sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortBy.value = criteria;
        sortOrder.value = 'asc';
    }

    temp.value.sort((a, b) => {
        const factor = sortOrder.value === 'asc' ? 1 : -1;
        if (a[criteria] < b[criteria]) return -1 * factor;
        if (a[criteria] > b[criteria]) return 1 * factor;
        return 0;
    });
}
</script>

<template>
    <div class="card m-4">
        <div class="card-header pb-0 d-flex justify-content-between align-items-center">
            <h5>User Management</h5>

            <div class="d-flex">
                <div class="form-outline">
                    <input type="search" id="form1" class="form-control rounded-start rounded-0" placeholder="name" />
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
                                <div class="d-flex align-items-center" @click="sortData('username')"
                                    style="cursor: pointer">
                                    User Name
                                    <div class="d-flex flex-column ms-3">
                                        <i class="fas fa-caret-up text-sm lh-1"
                                            :class="{ 'text-dark': sortBy === 'username' && sortOrder === 'asc' }"></i>
                                        <i class="fas fa-caret-down text-sm lh-1"
                                            :class="{ 'text-dark': sortBy === 'username' && sortOrder === 'desc' }"></i>
                                    </div>
                                </div>
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                First Name
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Last Name
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Phone Number
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Email
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Wallet Address
                            </th>
                            <!-- <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Fund Raised
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Target
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Status <i class="fas fa-filter"></i>
                            </th> -->
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in temp" :key="index">
                            <td>
                                <h6 class="item ps-3">{{ item.username }}</h6>
                            </td>
                            <td>
                                <h6 class="item">{{ item.firstName }}</h6>
                            </td>
                            <td>
                                <h6 class="item">{{ item.lastName }}</h6>
                            </td>
                            <td>
                                <h6 class="item">{{ item.phone }}</h6>
                            </td>
                            <td>
                                <h6 class="item">{{ item.email }}</h6>
                            </td>
                            <td>
                                <h6 class="item">{{ item.walletAddress }}</h6>
                            </td>
                            <td>
                                <button type="button" class="btn mb-0" data-bs-toggle="modal"
                                    :data-bs-target="'#row' + index"><i class="fas fa-edit"></i></button>

                                <!-- Edit Modal -->
                                <div class="modal fade" :id="'row' + index" tabindex="-1" aria-labelledby="ModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="ModalLabel">Edit</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <form>
                                                    <div class="mb-3">
                                                        <label for="username" class="form-label">Username:</label>
                                                        <input type="text" class="form-control" id="username"
                                                            placeholder="Enter name" :value="item.username">
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="firstName" class="form-label">First Name:</label>
                                                        <input type="text" class="form-control" id="firstName"
                                                            placeholder="Enter name" :value="item.firstName">
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="lastName" class="form-label">Last Name:</label>
                                                        <input type="text" class="form-control" id="lastName"
                                                            placeholder="Enter name" :value="item.lastName">
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="phone" class="form-label">Last Name:</label>
                                                        <input type="text" class="form-control" id="phone"
                                                            placeholder="Enter name" :value="item.phone">
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="email" class="form-label">Email:</label>
                                                        <input type="email" class="form-control" id="email"
                                                            :value="item.email">
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="walletAddress" class="form-label">Wallet
                                                            Address:</label>
                                                        <input type="text" class="form-control" id="walletAddress"
                                                            :value="item.walletAddress">
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

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
