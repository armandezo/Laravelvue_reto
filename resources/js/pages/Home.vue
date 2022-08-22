<template>
    <div class="bg-gray-200 h-full ">
        <Breadcrumb/>
        <div class="grid grid-cols-1 px-4 pt-6 ">
            <div class="container bg-gray-50 shadow-2xl rounded-lg p-4">
                <TitlePautas/>
                <div class="grid grid-cols-1 px-4 pt-6 ">
                    <span class="mb-12 bg-gray-200 w-full h-10 pt-2 pl-2 rounded-lg">Complete los siguientes campos para realizar la búsqueda</span>

                    <RadioElements/>

                    <div class="grid grid-cols-2 px-4 pt-6 mb-6">
                        <SelectElement/>
                        <ButtonSearch/>
                    </div>
                    <hr class="pt-1 bg-red-600">

                    <strong class="mt-6 mb-5"><span class="text-red-600">[Codigo Cliente]</span>

                    nombre del cliente</strong>
                    <GroupSelects/>

                    <PautasOperativas/>

                    <div class="grid grid-cols-2 px-4 pt-6 mb-6">
                        <Sedes />
                        <!-- ?? estos componentes se pueden optimizar para usar 1 -->
                        <Cusco />
                        <Lima />
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import GlobalComponents from "../globalComponents";
export default {
    name: "Home",
    components: {
        ...GlobalComponents,
    },

};
</script>
