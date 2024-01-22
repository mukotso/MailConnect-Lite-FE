<template lang="">
    <div class="sidebar__wrap">
      <div >
        <img src='/logo.png' />
      </div>
      <ul class="mt-4">
        <li
          v-for="(item, index) in items"
          :key="index"
          :style="{
            color: getRouteTitle(item.title, index) ? item.activeColor : '#626262',
            background: getRouteTitle(item.title, index)
              ? getBgColor(item.activeColor)
              : 'transparent',
          }"
          @click.prevent="goToRoute(item.route)"
        >
          <img class="h-[24px] w-[24px]" :src="`/dashboard/${item.key.toLowerCase()}.svg`" /><span
            :style="{ color: getRouteTitle(item.title, index) ? item.activeColor : '#626262' }"
            >{{ item.title }}</span
          >
        </li>
      </ul>
      
    </div>
  </template>
  <script setup>
  const router = useRouter();
  const route = useRoute();
  const auth = useAuth();
  
  const path = ref("");
  const items = ref([
    {
      title: "Dashboard",
      route: "/",
      activeColor: "#1BD598",
      key: "insights",
    },
   
    {
      title: "Event Calendar",
      route: "/event-calendar",
      activeColor: "#F3654A",
      key: "event-calendar",
    },
    
   
 
  
  ]);
  
  
  const getRouteTitle = (title, index) => {
    if (title === "Insights" && !path.value.length && index === 0) {
      return true;
    }
    if (path.value.includes(title.toLowerCase())) {
      return true;
    }
    if (path.value.includes(items.value[index].key)) {
      return true;
    }
    return false;
  };
  
  
  const goToRoute = (route) => {
    router.push(route);
  };
  
  const getBgColor = (color) => {
    return color + 30;
  };
  
  
  
  
  onMounted(() => {
    path.value = route.fullPath.split("/")[1];
    // if (auth.data.value.showEmail) {
    items.value.push({
      title: "Email",
      activeColor: "#3494FF",
      key: "email",
      route: "/email",
    },)
  
    // }
  })
  
  
  watch(() => route.href, () => {
    path.value = route.fullPath.split("/")[1];
  })
  </script>
  <style scoped>
  .sidebar__wrap {
    background: #fff;
    display: grid;
    grid-template-rows: 80px 1fr 60px;
    padding: 1rem;
    max-height: 100vh;
    overflow: hidden;
  }
  
  .sidebar__wrap ul {
    max-height: calc(100vh - 140px);
    overflow: hidden;
    overflow-y: auto;
  }
  
  .sidebar__wrap ul li {
    list-style: none;
    padding: 1rem 0px;
    padding-left: 1rem;
    cursor: pointer;
    display: flex;
    column-gap: 0.8rem;
    align-items: center;
    border-radius: 16px;
  }
  
  .sidebar__wrap ul li span {
    color: #737477;
    font-weight: 500;
  }
  
  .sidebar__wrap .sidebar__powered {
    display: flex;
    align-items: center;
  }
  
  .dl__side_footer {
    display: flex;
    gap: 1rem;
    align-items: center;
    padding-bottom: 0;
  }
  
  .dl__side_footer .dl__side_footer_brand_wrap {
    flex: 1 1 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
  }
  
  .dl__side_footer div {
    flex: 1 1 20%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin: 4px;
  }
  </style>
  