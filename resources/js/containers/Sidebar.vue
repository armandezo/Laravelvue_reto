<template>
    <div class="bg-sidebar-grey relative h-full min-h-screen">
        <ItemList></ItemList>
    </div>
    </template>
<script>
import GlobalComponents from "../globalComponents";
export default {
    name: "Sidebar",
     components: {
         ...GlobalComponents,
    },

};
</script>
