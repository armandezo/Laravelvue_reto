<template>
    <div class="w_85">
        <label for="clientes">Escoger Cliente</label>
        <Multiselect v-model="val" :options="options" placeholder="Nombre del cliente"
            class="text-gray-900 border text-sm rounded-md block w-1/3 p-2 mt-3 mr-4" />

    </div>
</template>

<script>
import Multiselect from '@vueform/multiselect';
export default {
    name: "SelectElement",
    components: {
        Multiselect,
    },
    data() {
        return {
            val: null,
            options: [
                'Ruben Llerena1',
                'Ruben Llerena2',
                'Ruben Llerena3'
            ],
        }
    }
};
</script>
<style src="@vueform/multiselect/themes/default.css">
</style>
