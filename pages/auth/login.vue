<template>
<div class=" mx-6 mt-[10vh] ">
    <Toast/>
    <div>
    <Card >
    <template #title> WELCOME BACK !</template>
    <template #content>
        <form @submit.prevent="loginUser" >
            <div>
                <InputTextCustom :errors="errors" name="email" label="Email Address" placeholder="Secondary Contact Name"
                v-model="email" />
            </div>

            <div >
                <InputTextCustom :errors="errors" name="password" label="Password" placeholder="Secondary Contact Name"
                v-model="password" />
            </div>

            <Button type="submit" severity="success" class=" mt-5   w-full px-5 py-2"><span class="ml-[40%]">SIGN IN <i class=" ml-2 pi pi-lock"></i></span></Button>


        </form>
    </template>
</Card>
</div>
</div>
 
</template>

<script  setup>


import Button from 'primevue/button';
import { useForm } from 'vee-validate';
import { useToast } from "primevue/usetoast"


definePageMeta({ layout: 'auth'})

const Toast = useToast();


const validationRules = reactive({
    email: 'required',
    password: 'required',

})
const { defineField, handleSubmit, resetForm, errors, setErrors } = useForm({
    validationSchema: validationRules,
});


const [email] = defineField('email')
const [password] = defineField('password')

const loginUser = handleSubmit(async (values) => {
  const { data } = useMyFetch('/login', {
    body:{
        'email': email.value,
        'password': password.value
    }
  })
})

</script>

<style lang="scss" scoped>


.p-component, .p-component * {
    box-sizing: border-box;
}
.p-button {
    color: #ffffff;
    background: #10b981;
    border: 1px solid #10b981;
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    border-radius: 6px;
}
</style>