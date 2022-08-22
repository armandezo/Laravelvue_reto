<template>
    <header class="fixed z-50 h-16 w-full bg-grey-darker shadow flex items-center justify-between bg-lima-tours">
        <Logo></Logo>
        <Account></Account>
    </header>
</template>
<script>
import GlobalComponents from "../globalComponents";
export default {
  name: "Header",
  components: {
    ...GlobalComponents,
  },
};
</script>
