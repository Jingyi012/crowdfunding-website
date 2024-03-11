<script setup>
import { ref } from 'vue';
const temp = ref([
    { name: 'John Doe', email: 'john@example.com', walletAddress: '0x876E869E4A62627C3d8F49163d8C90d47eE08fb5' },
  { name: 'Jane Smith', email: 'jane@example.com', walletAddress: '0x3dEFd9277C1724DcA8E94385D2173fEbaA6524e7' },
  { name: 'Michael Johnson', email: 'michael@example.com', walletAddress: '0xFfAc5D3e5276fFAa41Ab5dE73A8A79A81eBe7F8a' },
  { name: 'Emily Brown', email: 'emily@example.com', walletAddress: '0x0a56C3881C9dB046A5a3A31aBe84Caf06F98d937' },
  { name: 'David Wilson', email: 'david@example.com', walletAddress: '0x4E6c3D6e256B8eDE5B28d6d8a1a242b0455E2409' },
  { name: 'Emma Taylor', email: 'emma@example.com', walletAddress: '0xc5e3FEd4166b8C422B90F788d02a6f86C0Af3Ab8' },
  { name: 'Daniel Martinez', email: 'daniel@example.com', walletAddress: '0xe3F8e0f4Ee322420D31932a9D40e51E14D9Df09d' },
  { name: 'Olivia Garcia', email: 'olivia@example.com', walletAddress: '0x6bD75833a04eA2c12745d2f7a4D9AD054812cFA1' },
  { name: 'James Rodriguez', email: 'james@example.com', walletAddress: '0xd6bF91BBaC18F8ECbaF55C4d6663646aF9F02d94' },
  { name: 'Sophia Hernandez', email: 'sophia@example.com', walletAddress: '0x5C2186Fb225a15e06B89aB85C61A0a91f0FF8Cf6' }
]);

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
                                <div class="d-flex align-items-center" @click="sortData('name')" style="cursor: pointer">
                                    User Name 
                                    <div class="d-flex flex-column ms-3">
                                        <i class="fas fa-caret-up text-sm lh-1" :class="{'text-dark': sortBy === 'name' && sortOrder === 'asc'}"></i>
                                        <i class="fas fa-caret-down text-sm lh-1" :class="{'text-dark': sortBy === 'name' && sortOrder === 'desc'}"></i>
                                    </div>
                                </div>
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
                                <h6 class="item ps-3">{{ item.name }}</h6>
                            </td>
                            <td>
                                <h6 class="item">{{ item.email }}</h6>
                            </td>
                            <td>
                                <h6 class="item">{{ item.walletAddress }}</h6>
                            </td>
                            <!-- <td>
                                <h6 class="item">{{ item.fundRaised }}</h6>
                            </td>
                            <td>
                                <h6 class="item">{{ item.target }}</h6>
                            </td>
                            <td>
                                <h6 class="item">Ongoing</h6>
                            </td> -->
                            <td>
                                <button type="button" class="btn mb-0" data-bs-toggle="modal" :data-bs-target="'#row' + index"><i class="fas fa-edit"></i></button>

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
                                                        <label for="name" class="form-label">Name:</label>
                                                        <input type="text" class="form-control" id="name" placeholder="Enter name" :value="item.name">
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="startDate" class="form-label">Email:</label>
                                                        <input type="email" class="form-control" id="email" :value="item.email">
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="endDate" class="form-label">Wallet Address:</label>
                                                        <input type="text" class="form-control" id="walletAddress" :value="item.walletAddress">
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
