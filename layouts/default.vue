
<template>
	<div class="main__wrap">
		<NuxtLoadingIndicator/>
		<Sidebar />
		<div class=" flex flex-column">
			<!-- <div class="content__topBar">
				<TopBar :tabs="tabs" />
			</div> -->
			<div class=" flex-1 container content__overflow_wrapper">
				<slot/>
			</div>
		</div>
	</div>
</template>

<script setup>

definePageMeta({ layoutTransition: 'true' })

const route = useRoute();

const tabs = computed(() => {
	if (route.matched[0].name.startsWith('resources')) {
		return [{ name: 'Resources', route: '/resources/customer', matched: 'resources-customer-id' }, { name: 'Faqs', route: '/resources/faqs', matched: 'resources-faqs' }]
	} else {
		return []
	}
})



</script>
<style>
.main__wrap {
	display: grid;
	grid-template-columns: 15rem 1fr;
	width: 100%;
	height: 100vh;
}

.content__overflow_wrapper {
	overflow-y: auto;
	max-height: calc(100vh - 55px);
	background: #f4f5f6;
}

.content__topBar {
	position: sticky;
	min-height: 55px;
	max-height: 55px;
	top: 0;
}
</style>
