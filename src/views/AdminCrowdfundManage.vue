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
            <h5>Crowdfunding List</h5>

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
                                    Project
                                    <div class="d-flex flex-column ms-3">
                                        <i class="fas fa-caret-up text-sm lh-1"
                                            :class="{ 'text-dark': sortBy === 'name' && sortOrder === 'asc' }"></i>
                                        <i class="fas fa-caret-down text-sm lh-1"
                                            :class="{ 'text-dark': sortBy === 'name' && sortOrder === 'desc' }"></i>
                                    </div>
                                </div>
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                <div class="d-flex align-items-center" @click="sortData('startDate')" style="cursor: pointer">
                                    Start Date
                                    <div class="d-flex flex-column ms-3">
                                        <i class="fas fa-caret-up text-sm lh-1"
                                            :class="{ 'text-dark': sortBy === 'startDate' && sortOrder === 'asc' }"></i>
                                        <i class="fas fa-caret-down text-sm lh-1"
                                            :class="{ 'text-dark': sortBy === 'startDate' && sortOrder === 'desc' }"></i>
                                    </div>
                                </div>
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                <div class="d-flex align-items-center" @click="sortData('endDate')" style="cursor: pointer">
                                    End Date
                                    <div class="d-flex flex-column ms-3">
                                        <i class="fas fa-caret-up text-sm lh-1"
                                            :class="{ 'text-dark': sortBy === 'endDate' && sortOrder === 'asc' }"></i>
                                        <i class="fas fa-caret-down text-sm lh-1"
                                            :class="{ 'text-dark': sortBy === 'endDate' && sortOrder === 'desc' }"></i>
                                    </div>
                                </div>
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                <div class="d-flex align-items-center" @click="sortData('fundRaised')" style="cursor: pointer">
                                    Fund Raised
                                    <div class="d-flex flex-column ms-3">
                                        <i class="fas fa-caret-up text-sm lh-1"
                                            :class="{ 'text-dark': sortBy === 'fundRaised' && sortOrder === 'asc' }"></i>
                                        <i class="fas fa-caret-down text-sm lh-1"
                                            :class="{ 'text-dark': sortBy === 'fundRaised' && sortOrder === 'desc' }"></i>
                                    </div>
                                </div>
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                <div class="d-flex align-items-center" @click="sortData('target')" style="cursor: pointer">
                                    Target
                                    <div class="d-flex flex-column ms-3">
                                        <i class="fas fa-caret-up text-sm lh-1"
                                            :class="{ 'text-dark': sortBy === 'target' && sortOrder === 'asc' }"></i>
                                        <i class="fas fa-caret-down text-sm lh-1"
                                            :class="{ 'text-dark': sortBy === 'target' && sortOrder === 'desc' }"></i>
                                    </div>
                                </div>
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                <div class="d-flex align-items-center" @click="sortData('status')" style="cursor: pointer">
                                    Status
                                    <div class="d-flex flex-column ms-3">
                                        <i class="fas fa-caret-up text-sm lh-1"
                                            :class="{ 'text-dark': sortBy === 'status' && sortOrder === 'asc' }"></i>
                                        <i class="fas fa-caret-down text-sm lh-1"
                                            :class="{ 'text-dark': sortBy === 'status' && sortOrder === 'desc' }"></i>
                                    </div>
                                </div>
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
                                <button type="button" class="btn mb-0" data-bs-toggle="modal"
                                    :data-bs-target="'#row' + index"><i class="fas fa-edit"></i></button>
                                <button type="button" class="btn mb-0 ms-3" data-bs-toggle="modal"
                                    :data-bs-target="'#rowDelete' + index"><i class="fas fa-trash-alt"></i></button>

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
                                                        <input type="text" class="form-control" id="name"
                                                            placeholder="Enter name" :value="item.name">
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="startDate" class="form-label">Start Date:</label>
                                                        <input type="date" class="form-control" id="startDate"
                                                            :value="item.startDate">
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="endDate" class="form-label">End Date:</label>
                                                        <input type="date" class="form-control" id="endDate"
                                                            :value="item.endDate">
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="target" class="form-label">Target:</label>
                                                        <input type="text" class="form-control" id="target"
                                                            placeholder="Enter target" :value="item.target">
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

                                <!-- Delete Modal -->
                                <div class="modal fade" :id="'rowDelete' + index" tabindex="-1"
                                    aria-labelledby="ModalLabelD" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="ModalLabelD">Delete</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                Confirm to delete "{{ item.name }}" ?
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Delete</button>
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
