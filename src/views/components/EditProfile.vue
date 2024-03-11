<script setup>
import ArgonInput from "@/components/ArgonInput.vue";
import { ref } from "vue";
const editProfile = ref(false);

const toggleEditProfile = () => {
    editProfile.value = !editProfile.value;
};


</script>
<template>

    <div class="row">
        <div class="col-md-4 d-flex justify-content-center align-items-center"
            style="background-color:#2DCE89;border-radius: 1rem 0  0 1rem ;">
            <div class="container d-flex justify-content-center">
                <div class=" image d-flex flex-column justify-content-center align-items-center">
                    <div class="justify-content-center align-items-center d-flex mb-4"
                        style="background-color:white;border-radius:50%;height:150px;width:150px; ">
                        <img src="https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp"
                            style="background-color:white;border-radius:50%;height:150px;width:150px; " />
                    </div>
                    <div class=" d-flex flex-row justify-content-center align-items-center gap-2  mt-4">
                        <div class=" d-flex"> <!-- HTML !-->
                            <button class="button-17" role="button" @click="toggleEditProfile">Edit Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="editProfile" class="col-md-8">
            <div class="card" style="border-radius:0 1rem 1rem 0;">
                <div class="card-header pb-0">
                    <div class="d-flex align-items-center">

                    </div>
                </div>
                <div class="card-body">
                    <p class="text-uppercase text-sm">User Information</p>
                    <div class="row">
                        <div class="col-md-6">
                            <label for="example-text-input" class="form-control-label">Username</label>
                            <argon-input type="text" value="lucky.jesse" />
                        </div>
                        <div class="col-md-6">
                            <label for="example-text-input" class="form-control-label">Citizenship</label>
                            <argon-input type="email" value="jesse@example.com" />
                        </div>
                        <div class="col-md-6">
                            <label for="example-text-input" class="form-control-label">First name</label>
                            <input class="form-control" type="text" value="Jesse" />
                        </div>
                        <div class="col-md-6">
                            <label for="example-text-input" class="form-control-label">Last name</label>
                            <argon-input type="text" value="Lucky" />
                        </div>
                    </div>
                    <hr class="horizontal dark" />
                    <p class="text-uppercase text-sm">Contact Information</p>
                    <div class="row">
                        <div class="col-md-12">
                            <label for="example-text-input" class="form-control-label">Wallet Address</label>
                            <argon-input type="text" value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" />
                        </div>
                        <div class="col-md-4">
                            <label for="example-text-input" class="form-control-label">Phone Number</label>
                            <argon-input type="text" value="New York" />
                        </div>
                        <div class="col-md-8">
                            <label for="example-text-input" class="form-control-label">Email Address</label>
                            <argon-input type="text" value="United States" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <div v-else class="col-md-8 ">
            <div class="card" style="border-radius:0 1rem 1rem 0;">
                <div class="card-header pb-0">
                    <div class="d-flex align-items-center">
                    </div>
                </div>
                <div class="card-body">
                    <p class="text-uppercase text-sm">User Information</p>
                    <div class="row">
                        <div class="col-md-6">
                            <label for="example-text-input" class="form-control-label">Username</label>
                            <p class="formans">Jesse</p>
                        </div>
                        <div class="col-md-6">
                            <label for="example-text-input" class="form-control-label">Citizenship</label>
                            <p class="formans">Malaysian</p>
                            
                        </div>
                        <div class="col-md-6">
                            <label for="example-text-input" class="form-control-label">First name</label>
                            <p class="formans">Wong</p>
                            
                        </div>
                        <div class="col-md-6">
                            <label for="example-text-input" class="form-control-label">Last name</label>
                            <p class="formans">Yu Hui</p>
                          
                        </div>
                    </div>
                    <hr />
                    <p class="text-uppercase text-sm">Contact Information</p>
                    <div class="row">
                        <div class="col-md-12">
                            <label for="example-text-input" class="form-control-label">Wallet Address</label>
                            <p class="formans">4338984023898404</p>
                           
                        </div>
                        <div class="col-md-4">
                            <label for="example-text-input" class="form-control-label">Phone Number</label>
                            <p class="formans">5858475</p>
                            
                        </div>
                        <div class="col-md-8">
                            <label for="example-text-input" class="form-control-label">Email Address</label>
                            <p class="formans">hello@gmail.com</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>



</template>

<style scoped>
col-md-8 {
    padding-left: 0 !important;
}

@media (min-width: 768px) {
    .col-md-8 {
        flex: 0 0 auto;
        width: 66.66666667%;
        padding-left: 0 !important;
    }
}


.button-17 {
    align-items: center;
    appearance: none;
    background-color: #fff;
    border-radius: 24px;
    border-style: none;
    box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0;
    box-sizing: border-box;
    color: #3c4043;
    cursor: pointer;
    display: inline-flex;
    fill: currentcolor;
    font-family: "Google Sans", Roboto, Arial, sans-serif;
    font-size: 14px;
    font-weight: 500;
    height: 48px;
    justify-content: center;
    letter-spacing: .25px;
    line-height: normal;
    max-width: 100%;
    overflow: visible;
    padding: 2px 24px;
    position: relative;
    text-align: center;
    text-transform: none;
    transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1), opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: auto;
    will-change: transform, opacity;
    z-index: 0;
}

.button-17:hover {
    background: #F6F9FE;
    color: #174ea6;
}

.button-17:active {
    box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
    outline: none;
}

.button-17:focus {
    outline: none;
    border: 2px solid #4285f4;
}

.button-17:not(:disabled) {
    box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

.button-17:not(:disabled):hover {
    box-shadow: rgba(60, 64, 67, .3) 0 2px 3px 0, rgba(60, 64, 67, .15) 0 6px 10px 4px;
}

.button-17:not(:disabled):focus {
    box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

.button-17:not(:disabled):active {
    box-shadow: rgba(60, 64, 67, .3) 0 4px 4px 0, rgba(60, 64, 67, .15) 0 8px 12px 6px;
}

.button-17:disabled {
    box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}


.formans{
    padding-left:5px;
}
</style>
