
<template>
	<div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 md:m-8">
           
        <div class="image">
            <img src="/logo.png"/> 
        </div>

        </div>

        <div class="w-full md:w-1/2  md:mt-8">
            <slot/>
        </div>
    </div>
</template>

<script setup>

definePageMeta({ layoutTransition: 'true' })

</script>
<style lang="scss" scoped>

.img{

    @media  screen and ( min-width: 768px) {
        height:300px !important;
    }

    @media  screen and ( max-width: 768px) {
        height:220px !important;
    }
    
}

</style>
