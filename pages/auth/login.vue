<template>
    <div class="card flex justify-content-center mt-4">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <span class="p-float-label">
                <InputText id="value" v-model="email" type="text" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" />
                <label for="value">Name - Surname</label>
            </span>

            <span class="p-float-label">
    <InputText id="username" v-model="value" />
    <label for="username">Username</label>
</span>

            <!-- <small class="p-error" id="text-error">{{ errorMessage || '&nbsp;' }}</small> -->
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>

<script  setup>
// import Button from "primevue/button"
// import InputText from "primevue/inputtext";
// import { useToast } from "primevue/usetoast"

// const Toast = useToast();
const email = ref("")
const errorMessage = reactive({

})
const  onSubmit =  ()=> {

}
</script>

<style lang="scss" scoped>

</style>