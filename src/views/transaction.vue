<script setup>




const TransactionList = [
    {
        hash: "0x3142Osdad1231nwe12414312",
        sender: "0x2256dfq424efrt382341",
        receiver: "0x2221erwer4efrt382341",
        timestamp: "56 seconds ago",
        amount: 78
    },
    {
        hash: "0x3142Osdad1231nwe12414312",
        sender: "0x2256dfq424efrt382341",
        receiver: "0x2221erwer4efrt382341",
        timestamp: "56 seconds ago",
        amount: 78
    },
    {
        hash: "0x3142O2132we333312414312",
        sender: "0x2256dfq424efrt382341",
        receiver: "0x2221123123efrt382341",
        timestamp: "57 seconds ago",
        amount: 123
    },
    {
        hash: "0x311231232333nwe12414312",
        sender: "0x2256dfq424e565656341",
        receiver: "0x2221er12333332311341",
        timestamp: "59 seconds ago",
        amount: 344
    },
    {
        hash: "0x3142Osdad1231nwe12414312",
        sender: "0x2256dfq424efrt382341",
        receiver: "0x2221erwer4efrt382341",
        timestamp: "89 seconds ago",
        amount: 71
    },
    {
        hash: "0x3142Osdad1231nwe12414312",
        sender: "0x2256dfq424efrt382341",
        receiver: "0x2221erwer4efrt382341",
        timestamp: "56 seconds ago",
        amount: 78
    },
    {
        hash: "0x3142Osdad1231nwe12414312",
        sender: "0x2256dfq424efrt382341",
        receiver: "0x2221erwer4efrt382341",
        timestamp: "56 seconds ago",
        amount: 78
    }]
</script>
<template>
  
    <main class="mt-0 main-content">
        <section>

            <div class="px-6 container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card mb-4">
                            <div class="card-header pb-0">
                                <h3>Donation</h3>
                            </div>
                            <div class="card-body px-0 pt-0 pb-2">
                                <div class="table-responsive p-0">
                                    <table class="table align-items-center justify-content-center mb-0">
                                        <thead>
                                            <tr>
                                                <th
                                                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                    Transaction ID
                                                </th>
                                                <th
                                                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                    Sender
                                                </th>
                                                <th
                                                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                    Receiver
                                                </th>
                                                <th
                                                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                    Amount
                                                </th>
                                                <th
                                                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                    Time
                                                </th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item, index) in TransactionList" :key="index">
                                                <td>
                                                    <div class="d-flex px-1 py-1">
                                                        <div
                                                            class="d-flex px-2 align-items-center justify-content-center">
                                                            <i class="rounded-circle me-2 ni ni-sound-wave"
                                                                alt="hash"></i>
                                                        </div>
                                                        <div class="my-auto">
                                                            <h6 class="mb-0 text-sm">{{ item.hash }}</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p class="text-sm font-weight-bold mb-0">{{ item.sender }}</p>
                                                </td>
                                                <td>
                                                    <p class="text-sm font-weight-bold">{{ item.receiver }}</p>
                                                </td>

                                                <td>
                                                    <h6 class="text-sm font-weight-bold">${{ item.amount }}</h6>
                                                </td>
                                                <td>
                                                    <span class="text-xs font-weight-bold">{{ item.timestamp
                                                        }}</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <app-footer />
</template>
