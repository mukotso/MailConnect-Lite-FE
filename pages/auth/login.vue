<template>
<div class=" mt-[10vh]  md:flex md:justify-content-center">
    <Toast/>
    <div class=" w-full md:w-1/2 ">
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

            <Button type="submit" severity="success" class=" px-5 py-2">SIGN IN</Button>
        </form>
    </template>
</Card>
</div>
</div>
 
</template>

<script  setup>
import { useForm } from 'vee-validate';
import { useToast } from "primevue/usetoast"

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

<style lang="scss" scoped></style>