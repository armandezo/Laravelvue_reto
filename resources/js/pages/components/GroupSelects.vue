<template>
    <div class="grid grid-cols-2 px-4 pt-6 mb-6">
        <div class="w-10/12 mb-4">
            <span>Jefe QR:</span>
            <Multiselect v-model="value1" :options="options1" mode="tags" />
        </div>
        <div class="w-10/12 mb-4">
            <span>Key Account Manager:</span>
            <Multiselect v-model="value2" :options="options2" mode="tags" />
        </div>
        <div class="w-10/12 mb-4">
            <span>Ejecutivas:</span>
            <Multiselect v-model="value3" :options="options3" mode="tags" />
        </div>
        <div class="w-10/12 ">
            <span>Contacto de emergencia:</span>
            <input type="text" class="text-gray-900 border text-sm rounded-md block w-full p-2 mr-4" />
        </div>
    </div>
</template>

<script>
import Multiselect from '@vueform/multiselect';
export default {
    name: "GroupSelects",
    components: {
        Multiselect,
    },
    data() {
        return {
            value1: null,
            value2: null,
            value3: null,
            options1: [
                'Ruben Llerena (RLC) 1',
                'Ruben Llerena (RLC) 2',
                'Ruben Llerena (RLC) 3'
            ],
            options2: [
                'Andrea Ferreyra (AFC) 1',
                'Andrea Ferreyra (AFC) 2',
                'Andrea Ferreyra (AFC) 3'
            ],
            options3: [
                'Vanesa García (VGG) 1',
                'Ruth Gonzales (RGC) 2',
                'Vanesa García (VGG) 3'
            ],
        }
    }
};
</script>
<style src="@vueform/multiselect/themes/default.css">
</style>
