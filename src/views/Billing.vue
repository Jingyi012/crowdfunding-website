<script setup>
import ProgressBar from "./components/ProgressBar.vue";
import DonatorList from "./components/DonatorList.vue";
</script>
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-8">
        <div class="col-md-12 mb-4">
          <div class="row mb-4">
            <ProgressBar />
          </div>
          <div class="row mb-4">
            <DonatorList />
          </div>
        </div>
      </div>
      <div class="col-lg-4">

        <div class="col-md-12 mb-4">
          <div class="card mt-4">
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
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

  </div>
</template>./components/ProgressBar.vue
