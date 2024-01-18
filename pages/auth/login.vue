<template>
   <div class=" m-8 grid  grid-cols-2 gap-4 ">
    <div class=" hidden md:block  w-1/2">

        <h1> IMAGE</h1>

    </div>
    <div class=" card flex justify-content-center  mt-4">
        <form @submit.prevent="loginUser" >
            <InputTextCustom :errors="errors" name="email" label="Email Address" placeholder="Secondary Contact Name"
                v-model="email" />

            <InputTextCustom :errors="errors" name="password" label="Password" placeholder="Secondary Contact Name"
                v-model="password" />

            <Button type="submit" severity="success" class=" px-5 py-2">SIGN IN</Button>
        </form>
        <Toast />
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