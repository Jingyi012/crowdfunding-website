<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

/* Approved page */
const temp = ref([
    {
        campaignName: 'Educate360 ',
        name: 'ABC Company',
        purpose: 'Education',
        description: 'description ......',
        startDate: '21 Jan 2024',
        endDate: '21 Apr 2024',
        fundRaised: 23431,
        target: 1000000
    },
    {
        campaignName: 'BizBoost',
        name: 'DEF Company',
        purpose: 'Business',
        description: 'description ......',
        startDate: '22 Jan 2024',
        endDate: '21 Jun 2024',
        fundRaised: 211131,
        target: 2000000
    },
    {
        campaignName: 'Caring',
        name: 'GHI Company',
        purpose: 'Charity',
        description: 'description ......',
        startDate: '1 Jan 2024',
        endDate: '23 Apr 2024',
        fundRaised: 13121,
        target: 1000000
    },
    {
        campaignName: 'Help Victim',
        name: 'JKL Company',
        purpose: 'Charity',
        description: 'description ......',
        startDate: '1 Jan 2024',
        endDate: '29 Apr 2024',
        fundRaised: 74199,
        target: 1000000
    },
    {
        campaignName: 'AI Technology',
        name: 'MNO Company',
        purpose: 'Business',
        description: 'description ......',
        startDate: '1 Jan 2024',
        endDate: '16 Apr 2024',
        fundRaised: 99141,
        target: 1000000
    },
    {
        campaignName: 'AI for rakyat',
        name: 'PQR Company',
        purpose: 'Education',
        description: 'description ......',
        startDate: '1 Jan 2024',
        endDate: '16 Apr 2024',
        fundRaised: 99141,
        target: 1000000
    },
    {
        campaignName: 'AI for rakyat',
        name: 'PQR Company',
        purpose: 'Education',
        description: 'description ......',
        startDate: '1 Jan 2024',
        endDate: '16 Apr 2024',
        fundRaised: 99141,
        target: 1000000
    }
]);

const sortBy = ref(null);
const sortOrder = ref('asc');
const currentPage = ref(1);
const maxPageSize = ref(null);
const listData = ref([]);

function sortData(criteria) {
    if (sortBy.value === criteria) {
        sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortBy.value = criteria;
        sortOrder.value = 'asc';
    }

    listData.value.sort((a, b) => {
        const factor = sortOrder.value === 'asc' ? 1 : -1;
        if (a[criteria] < b[criteria]) return -1 * factor;
        if (a[criteria] > b[criteria]) return 1 * factor;
        return 0;
    });
}

const router = useRouter();
const beforeEachGuard = (to, from, next) => {
    closeModal();
    next();
};

router.beforeEach(beforeEachGuard);

onBeforeUnmount(() => {
    router.beforeEach((to, from, next) => {

        if (beforeEachGuard === router.beforeEach) {
            router.beforeEach(null);
        }
        next();
    });
});

function closeModal() {
    document.body.classList.remove('modal-open');
    const modalBackdrop = document.querySelector('.modal-backdrop');
    if (modalBackdrop) {
        modalBackdrop.parentNode.removeChild(modalBackdrop);
    }
}

const goToPreviousPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
    sliceTempArray();
}

const goToNextPage = () => {
    if (currentPage.value < maxPageSize.value) {
        currentPage.value++;
    }
    sliceTempArray();
}

function setMaxPageSize() {
    maxPageSize.value = Math.ceil(temp.value.length / 6);
}

function sliceTempArray() {
    const startIndex = (currentPage.value - 1) * 6;
    const endIndex = startIndex + 6;
    listData.value = temp.value.slice(startIndex, endIndex);
}

onMounted(() => {
    setMaxPageSize();
    sliceTempArray();
})

/* Pending page */
const temp2 = ref([
    {
        campaignName: 'Educate360 ',
        name: 'ABC Company',
        purpose: 'Education',
        description: 'description ......',
        startDate: '21 Jan 2024',
        endDate: '21 Apr 2024',
        status: 'Pending',
        target: 1000000
    },
    {
        campaignName: 'BizBoost',
        name: 'DEF Company',
        purpose: 'Business',
        description: 'description ......',
        startDate: '22 Jan 2024',
        endDate: '21 Jun 2024',
        status: 'Pending',
        target: 2000000
    },
    {
        campaignName: 'Caring',
        name: 'GHI Company',
        purpose: 'Charity',
        description: 'description ......',
        startDate: '1 Jan 2024',
        endDate: '23 Apr 2024',
        status: 'Pending',
        target: 1000000
    },
    {
        campaignName: 'Help Victim',
        name: 'JKL Company',
        purpose: 'Charity',
        description: 'description ......',
        startDate: '1 Jan 2024',
        endDate: '29 Apr 2024',
        status: 'Pending',
        target: 1000000,
    },
    {
        campaignName: 'AI Technology',
        name: 'MNO Company',
        purpose: 'Business',
        description: 'description ......',
        startDate: '1 Jan 2024',
        endDate: '16 Apr 2024',
        status: 'Pending',
        target: 1000000
    },
    {
        campaignName: 'AI for rakyat',
        name: 'PQR Company',
        purpose: 'Education',
        description: 'description ......',
        startDate: '1 Jan 2024',
        endDate: '16 Apr 2024',
        status: 'Pending',
        target: 1000000
    },
    {
        campaignName: 'AI for rakyat',
        name: 'PQR Company',
        purpose: 'Education',
        description: 'description ......',
        startDate: '1 Jan 2024',
        endDate: '16 Apr 2024',
        status: 'Pending',
        target: 1000000
    },
    {
        campaignName: 'AI for rakyat',
        name: 'PQR Company',
        purpose: 'Education',
        description: 'description ......',
        startDate: '1 Jan 2024',
        endDate: '16 Apr 2024',
        status: 'Pending',
        target: 1000000
    }
]);

const sortBy2 = ref(null);
const sortOrder2 = ref('asc');
const currentPage2 = ref(1);
const maxPageSize2 = ref(null);
const listData2 = ref([]);

function sortData2(criteria) {
    if (sortBy2.value === criteria) {
        sortOrder2.value = sortOrder2.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortBy2.value = criteria;
        sortOrder2.value = 'asc';
    }

    listData2.value.sort((a, b) => {
        const factor = sortOrder2.value === 'asc' ? 1 : -1;
        if (a[criteria] < b[criteria]) return -1 * factor;
        if (a[criteria] > b[criteria]) return 1 * factor;
        return 0;
    });
}

const goToPreviousPage2 = () => {
    if (currentPage2.value > 1) {
        currentPage2.value--;
    }
    sliceTempArray2();
}

const goToNextPage2 = () => {
    if (currentPage2.value < maxPageSize2.value) {
        currentPage2.value++;
    }
    sliceTempArray2();
}

function setMaxPageSize2() {
    maxPageSize2.value = Math.ceil(temp2.value.length / 6);
}

function sliceTempArray2() {
    const startIndex = (currentPage2.value - 1) * 6;
    const endIndex = startIndex + 6;
    listData2.value = temp2.value.slice(startIndex, endIndex);
}

onMounted(() => {
    setMaxPageSize2();
    sliceTempArray2();
})

</script>

<template>
    <div class="card m-4">
        <ul class="nav nav-tabs mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-approved-tab" data-bs-toggle="pill" data-bs-target="#pills-approve"
                    type="button" role="tab" aria-controls="pills-approve" aria-selected="true">Approved</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-pending-tab" data-bs-toggle="pill"
                    data-bs-target="#pills-pending" type="button" role="tab" aria-controls="pills-pending"
                    aria-selected="false">Pending</button>
            </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade" id="pills-approve" role="tabpanel" aria-labelledby="pills-approved-tab"
                tabindex="0">
                <div class="card-header py-0 d-flex justify-content-between align-items-center">
                    <h5>Approved Campaign</h5>

                    <div class="d-flex">
                        <div class="form-outline">
                            <input type="search" id="form1" class="form-control rounded-start rounded-0"
                                placeholder="name" />
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
                                        <div class="d-flex align-items-center" @click="sortData('campaignName')"
                                            style="cursor: pointer">
                                            Campaign
                                            <div class="d-flex flex-column ms-3">
                                                <i class="fas fa-caret-up text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'campaignName' && sortOrder === 'asc' }"></i>
                                                <i class="fas fa-caret-down text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'campaignName' && sortOrder === 'desc' }"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        <div class="d-flex align-items-center" @click="sortData('purpose')"
                                            style="cursor: pointer">
                                            Purpose
                                            <div class="d-flex flex-column ms-3">
                                                <i class="fas fa-caret-up text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'purpose' && sortOrder === 'asc' }"></i>
                                                <i class="fas fa-caret-down text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'purpose' && sortOrder === 'desc' }"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                        <div class="d-flex align-items-center" @click="sortData('startDate')"
                                            style="cursor: pointer">
                                            Start Date
                                            <div class="d-flex flex-column ms-3">
                                                <i class="fas fa-caret-up text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'startDate' && sortOrder === 'asc' }"></i>
                                                <i class="fas fa-caret-down text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'startDate' && sortOrder === 'desc' }"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                        <div class="d-flex align-items-center" @click="sortData('endDate')"
                                            style="cursor: pointer">
                                            End Date
                                            <div class="d-flex flex-column ms-3">
                                                <i class="fas fa-caret-up text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'endDate' && sortOrder === 'asc' }"></i>
                                                <i class="fas fa-caret-down text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'endDate' && sortOrder === 'desc' }"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                        <div class="d-flex align-items-center" @click="sortData('fundRaised')"
                                            style="cursor: pointer">
                                            Fund Raised
                                            <div class="d-flex flex-column ms-3">
                                                <i class="fas fa-caret-up text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'fundRaised' && sortOrder === 'asc' }"></i>
                                                <i class="fas fa-caret-down text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'fundRaised' && sortOrder === 'desc' }"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                        <div class="d-flex align-items-center" @click="sortData('target')"
                                            style="cursor: pointer">
                                            Target
                                            <div class="d-flex flex-column ms-3">
                                                <i class="fas fa-caret-up text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'target' && sortOrder === 'asc' }"></i>
                                                <i class="fas fa-caret-down text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'target' && sortOrder === 'desc' }"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                        <div class="d-flex align-items-center" @click="sortData('status')"
                                            style="cursor: pointer">
                                            Status
                                            <div class="d-flex flex-column ms-3">
                                                <i class="fas fa-caret-up text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'status' && sortOrder === 'asc' }"></i>
                                                <i class="fas fa-caret-down text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'status' && sortOrder === 'desc' }"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in listData" :key="index">
                                    <td>
                                        <h6 class="item ps-3">{{ item.campaignName }}</h6>
                                    </td>
                                    <td>
                                        <h6 class="item ps-3">{{ item.purpose }}</h6>
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
                                        <router-link class="btn mb-0" to="/billing"><i
                                                class="fas fa-info-circle"></i></router-link>
                                        <button type="button" class="btn mb-0 ms-3" data-bs-toggle="modal"
                                            :data-bs-target="'#row' + index"><i class="fas fa-edit"></i></button>
                                        <button type="button" class="btn mb-0 ms-3" data-bs-toggle="modal"
                                            :data-bs-target="'#rowDelete' + index"><i
                                                class="fas fa-trash-alt"></i></button>

                                        <!-- Edit Modal -->
                                        <div class="modal fade" :id="'row' + index" tabindex="-1"
                                            aria-labelledby="ModalLabel" aria-hidden="true">
                                            <div class="modal-dialog" style="max-width: 600px !important">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5" id="ModalLabel"><i
                                                                class="fas fa-edit"></i>
                                                            Edit</h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <form>
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <label for="investmentName"
                                                                        class="form-label">Campaign
                                                                        Name</label>
                                                                    <input type="text" class="form-control"
                                                                        placeholder="Enter investment name"
                                                                        :value="item.campaignName" />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="investmentPoster"
                                                                        class="form-label">Campaign
                                                                        Poster (Image File Format)</label>
                                                                    <br>
                                                                    <input type="file" class="form-control"
                                                                        id="investmentPoster" accept="image/*" />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="investmentPurpose" class="form-label">
                                                                        Purpose</label>
                                                                    <input type="text" class="form-control"
                                                                        placeholder="Enter investment description"
                                                                        :value="item.purpose" />

                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="investmentOrganization"
                                                                        class="form-label">Campaign Organization
                                                                        Name</label>
                                                                    <input type="text" class="form-control"
                                                                        placeholder="Enter organization name" />
                                                                </div>
                                                            </div>

                                                            <hr class="horizontal dark" />

                                                            <p class="text-uppercase text-sm">Campaign Details</p>
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <label for="investmentPricePerShare"
                                                                        class="form-label">Price Per Share
                                                                        (ETH)</label>
                                                                    <input type="number" step="0.01"
                                                                        class="form-control" placeholder="0.00" />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="investmentTargetAmount"
                                                                        class="form-label">Target Amount
                                                                        (ETH)</label>
                                                                    <input type="number" step="0.01"
                                                                        class="form-control" placeholder="0.00" />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="investmentDeadline"
                                                                        class="form-label">Deadline
                                                                        (dd/mm/yy
                                                                        hh:mm)</label>
                                                                    <input type="datetime-local" class="form-control"
                                                                        placeholder="Select deadline"
                                                                        :value="item.endDate" />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="investmentValuation"
                                                                        class="form-label">Valuation</label>
                                                                    <input type="text" class="form-control"
                                                                        placeholder="Enter valuation" />
                                                                </div>
                                                            </div>

                                                            <hr class="horizontal dark" />

                                                            <p class="text-uppercase text-sm">Investment Breakdown</p>
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <label for="minInvestment"
                                                                        class="form-label">Minimum
                                                                        Investment
                                                                        (ETH)</label>
                                                                    <input type="number" step="0.01"
                                                                        class="form-control" placeholder="0.00" />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="maxInvestment"
                                                                        class="form-label">Maximum
                                                                        Investment
                                                                        (ETH)</label>
                                                                    <input type="number" step="0.01"
                                                                        class="form-control" placeholder="0.00" />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="minSharesOffered"
                                                                        class="form-label">Minimum
                                                                        Number of Shares
                                                                        Offered</label>
                                                                    <input type="number" class="form-control"
                                                                        placeholder="Enter minimum shares" />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="maxSharesOffered"
                                                                        class="form-label">Maximum
                                                                        Number of Shares
                                                                        Offered</label>
                                                                    <input type="number" class="form-control"
                                                                        placeholder="Enter maximum shares" />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="offeringType"
                                                                        class="form-label">Offering
                                                                        Type</label>
                                                                    <select class="form-control" id="offeringType">
                                                                        <option value="---Select offering type---"
                                                                            selected disabled>--Select offering type--
                                                                        </option>
                                                                        <option value="public">Public</option>
                                                                        <option value="private">Private</option>
                                                                    </select>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="assetType" class="form-label">Asset
                                                                        Type</label>
                                                                    <select class="form-control" id="assetType">
                                                                        <option value="---Select asset type---" selected
                                                                            disabled>--Select asset type--</option>
                                                                        <option value="equity">Equity</option>
                                                                        <option value="debt">Debt</option>
                                                                        <option value="real estate">Real Estate</option>
                                                                    </select>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="sharesOffered" class="form-label">Shares
                                                                        Offered</label>
                                                                    <select class="form-control" id="sharesOffered">
                                                                        <option value="---Select shares offered---"
                                                                            selected disabled>--Select shares offered--
                                                                        </option>
                                                                        <option value="common">Common</option>
                                                                        <option value="preferred">Preferred</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                        </form>

                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary"
                                                            data-bs-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-primary">Save
                                                            changes</button>
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
                                                        <h1 class="modal-title fs-5" id="ModalLabelD"><i
                                                                class="fas fa-trash-alt"></i> Delete</h1>
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
                                <tr>
                                    <td colspan="8">
                                        <div class="d-flex justify-content-end me-4">
                                            <button class="btn my-0 me-2" @click="goToPreviousPage()"> <i
                                                    class="fas fa-chevron-left"></i> </button>
                                            <span
                                                class="pageNum border rounded d-flex align-items-center justify-content-center"
                                                style="min-width: 30px">{{ currentPage }}</span>
                                            <button class="btn my-0 ms-2" @click="goToNextPage()"> <i
                                                    class="fas fa-chevron-right"></i> </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade show active" id="pills-pending" role="tabpanel"
                aria-labelledby="pills-pending-tab" tabindex="0">
                <div class="card-header py-0 d-flex justify-content-between align-items-center">
                    <h5>Pending Validate Campaign</h5>

                    <div class="d-flex">
                        <div class="form-outline">
                            <input type="search" id="form1" class="form-control rounded-start rounded-0"
                                placeholder="name" />
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
                                        <div class="d-flex align-items-center" @click="sortData2('campaignName')"
                                            style="cursor: pointer">
                                            Campaign
                                            <div class="d-flex flex-column ms-3">
                                                <i class="fas fa-caret-up text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy2 === 'campaignName' && sortOrder2 === 'asc' }"></i>
                                                <i class="fas fa-caret-down text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy2 === 'campaignName' && sortOrder2 === 'desc' }"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        <div class="d-flex align-items-center" @click="sortData2('purpose')"
                                            style="cursor: pointer">
                                            Purpose
                                            <div class="d-flex flex-column ms-3">
                                                <i class="fas fa-caret-up text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy2 === 'purpose' && sortOrder2 === 'asc' }"></i>
                                                <i class="fas fa-caret-down text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy2 === 'purpose' && sortOrder2 === 'desc' }"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                        <div class="d-flex align-items-center" @click="sortData2('startDate')"
                                            style="cursor: pointer">
                                            Start Date
                                            <div class="d-flex flex-column ms-3">
                                                <i class="fas fa-caret-up text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy2 === 'startDate' && sortOrder2 === 'asc' }"></i>
                                                <i class="fas fa-caret-down text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy2 === 'startDate' && sortOrder2 === 'desc' }"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                        <div class="d-flex align-items-center" @click="sortData2('endDate')"
                                            style="cursor: pointer">
                                            End Date
                                            <div class="d-flex flex-column ms-3">
                                                <i class="fas fa-caret-up text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy2 === 'endDate' && sortOrder2 === 'asc' }"></i>
                                                <i class="fas fa-caret-down text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy2 === 'endDate' && sortOrder2 === 'desc' }"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                        <div class="d-flex align-items-center" @click="sortData2('target')"
                                            style="cursor: pointer">
                                            Target
                                            <div class="d-flex flex-column ms-3">
                                                <i class="fas fa-caret-up text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy2 === 'target' && sortOrder2 === 'asc' }"></i>
                                                <i class="fas fa-caret-down text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy2 === 'target' && sortOrder2 === 'desc' }"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                        <div class="d-flex align-items-center" @click="sortData2('status')"
                                            style="cursor: pointer">
                                            Status
                                            <div class="d-flex flex-column ms-3">
                                                <i class="fas fa-caret-up text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy2 === 'status' && sortOrder2 === 'asc' }"></i>
                                                <i class="fas fa-caret-down text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy2 === 'status' && sortOrder2 === 'desc' }"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in listData2" :key="index">
                                    <td>
                                        <h6 class="item ps-3">{{ item.campaignName }}</h6>
                                    </td>
                                    <td>
                                        <h6 class="item ps-3">{{ item.purpose }}</h6>
                                    </td>
                                    <td>
                                        <h6 class="item">{{ item.startDate }}</h6>
                                    </td>
                                    <td>
                                        <h6 class="item">{{ item.endDate }}</h6>
                                    </td>
                                    <td>
                                        <h6 class="item">{{ item.target }}</h6>
                                    </td>
                                    <td>
                                        <h6 class="item">{{ item.status }}</h6>
                                    </td>
                                    <td>
                                        <router-link class="btn mb-0" to="/billing"><i
                                                class="fas fa-info-circle"></i></router-link>
                                        <button type="button" class="btn mb-0 ms-3" data-bs-toggle="modal"
                                            :data-bs-target="'#rowPending' + index">
                                            <i class="fas fa-check"></i>
                                        </button>
                                        <button type="button" class="btn mb-0 ms-3" data-bs-toggle="modal"
                                            :data-bs-target="'#rowReject' + index">
                                            <i class="fas fa-times"></i>
                                        </button>


                                        <!-- View Modal -->
                                        <div class="modal fade" :id="'rowPending' + index" tabindex="-1"
                                            aria-labelledby="ModalLabel" aria-hidden="true">
                                            <div class="modal-dialog" style="max-width: 600px !important">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5" id="ModalLabel"><i
                                                                class="fas fa-edit"></i>
                                                            Edit</h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <form>
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <label for="investmentName"
                                                                        class="form-label">Campaign
                                                                        Name</label>
                                                                    <input type="text" class="form-control"
                                                                        placeholder="Enter investment name"
                                                                        :value="item.campaignName" />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="investmentPoster"
                                                                        class="form-label">Campaign
                                                                        Poster (Image File Format)</label>
                                                                    <br>
                                                                    <input type="file" class="form-control"
                                                                        id="investmentPoster" accept="image/*" />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="investmentPurpose" class="form-label">
                                                                        Purpose</label>
                                                                    <input type="text" class="form-control"
                                                                        placeholder="Enter investment description"
                                                                        :value="item.purpose" />

                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="investmentOrganization"
                                                                        class="form-label">Campaign Organization
                                                                        Name</label>
                                                                    <input type="text" class="form-control"
                                                                        placeholder="Enter organization name" />
                                                                </div>
                                                            </div>

                                                            <hr class="horizontal dark" />

                                                            <p class="text-uppercase text-sm">Campaign Details</p>
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <label for="investmentPricePerShare"
                                                                        class="form-label">Price Per Share
                                                                        (ETH)</label>
                                                                    <input type="number" step="0.01"
                                                                        class="form-control" placeholder="0.00" />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="investmentTargetAmount"
                                                                        class="form-label">Target Amount
                                                                        (ETH)</label>
                                                                    <input type="number" step="0.01"
                                                                        class="form-control" placeholder="0.00" />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="investmentDeadline"
                                                                        class="form-label">Deadline
                                                                        (dd/mm/yy
                                                                        hh:mm)</label>
                                                                    <input type="datetime-local" class="form-control"
                                                                        placeholder="Select deadline"
                                                                        :value="item.endDate" />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="investmentValuation"
                                                                        class="form-label">Valuation</label>
                                                                    <input type="text" class="form-control"
                                                                        placeholder="Enter valuation" />
                                                                </div>
                                                            </div>

                                                            <hr class="horizontal dark" />

                                                            <p class="text-uppercase text-sm">Investment Breakdown</p>
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <label for="minInvestment"
                                                                        class="form-label">Minimum
                                                                        Investment
                                                                        (ETH)</label>
                                                                    <input type="number" step="0.01"
                                                                        class="form-control" placeholder="0.00" />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="maxInvestment"
                                                                        class="form-label">Maximum
                                                                        Investment
                                                                        (ETH)</label>
                                                                    <input type="number" step="0.01"
                                                                        class="form-control" placeholder="0.00" />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="minSharesOffered"
                                                                        class="form-label">Minimum
                                                                        Number of Shares
                                                                        Offered</label>
                                                                    <input type="number" class="form-control"
                                                                        placeholder="Enter minimum shares" />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="maxSharesOffered"
                                                                        class="form-label">Maximum
                                                                        Number of Shares
                                                                        Offered</label>
                                                                    <input type="number" class="form-control"
                                                                        placeholder="Enter maximum shares" />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="offeringType"
                                                                        class="form-label">Offering
                                                                        Type</label>
                                                                    <select class="form-control" id="offeringType">
                                                                        <option value="---Select offering type---"
                                                                            selected disabled>--Select offering type--
                                                                        </option>
                                                                        <option value="public">Public</option>
                                                                        <option value="private">Private</option>
                                                                    </select>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="assetType" class="form-label">Asset
                                                                        Type</label>
                                                                    <select class="form-control" id="assetType">
                                                                        <option value="---Select asset type---" selected
                                                                            disabled>--Select asset type--</option>
                                                                        <option value="equity">Equity</option>
                                                                        <option value="debt">Debt</option>
                                                                        <option value="real estate">Real Estate</option>
                                                                    </select>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="sharesOffered" class="form-label">Shares
                                                                        Offered</label>
                                                                    <select class="form-control" id="sharesOffered">
                                                                        <option value="---Select shares offered---"
                                                                            selected disabled>--Select shares offered--
                                                                        </option>
                                                                        <option value="common">Common</option>
                                                                        <option value="preferred">Preferred</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                        </form>

                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary"
                                                            data-bs-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-primary">Save
                                                            changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Delete Modal -->
                                        <div class="modal fade" :id="'rowReject' + index" tabindex="-1"
                                            aria-labelledby="ModalLabelD" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5" id="ModalLabelD"><i
                                                                class="fas fa-x"></i> Reject</h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        Confirm to reject the creation of "{{ item.name }}" ?
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary"
                                                            data-bs-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-primary">Confirm</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="7">
                                        <div class="d-flex justify-content-end me-4">
                                            <button class="btn my-0 me-2" @click="goToPreviousPage2()"> <i
                                                    class="fas fa-chevron-left"></i> </button>
                                            <span
                                                class="pageNum border rounded d-flex align-items-center justify-content-center"
                                                style="min-width: 30px">{{ currentPage2 }}</span>
                                            <button class="btn my-0 ms-2" @click="goToNextPage2()"> <i
                                                    class="fas fa-chevron-right"></i> </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
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
