<template>
    <div class="font-sans antialiased h-screen">
        <Header></Header>
        <div id="main" class="pt-16">
            <Sidebar></Sidebar>
            <Home></Home>
        </div>
    </div>
</template>
<script>
import GlobalContainers from "../globalContainers";
export default {
  name: "App",
  components: {
    ...GlobalContainers,
  },
};
</script>
