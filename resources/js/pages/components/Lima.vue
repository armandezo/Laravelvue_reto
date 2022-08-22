<template>
<div class="max_box rounded-lg overflow-hidden shadow-lg">
        <div class=" py-6">
            <div class="bg-gray-300  mb-2 pl-5 py-2">Lima</div>
            <div class="grid grid-cols-2 px-4 pt-6 ">
                <div class="font-semibold">Transporte</div>
                <div class="left-card">
                    <span class="pl-2 text-red-700 font-semibold">
                        Editar
                    </span>
                    <img src="@images/boton-editar.png" width="25">
                </div>
            </div>
            <div class="grid grid-cols-2 px-4 pt-4">
                <div class="">
                    <span>¿Resaltar marca?</span>
                </div>
                <div class="left-card">
                    <span class="">
                        Si
                    </span>
                </div>
            </div>
            <div class="grid grid-cols-2 px-4 pt-4 mb-4">
                <div class="">
                    <span>Tipo de servicio</span>
                </div>
                <div class="left-card">
                    <span class="">
                        Transporte
                    </span>
                </div>
            </div>

            <div class="">
                <div class="bg-gray-700 grid grid-cols-2 px-4 pt-2 pb-2 mb-6">
                    <div class="text-white">Tipo de vehículo</div>
                    <div class="text-white left-card">Cantidad de pasajeros</div>
                </div>
                <div class="grid grid-cols-2 px-4 pb-2 mb-3">
                    <div class="text-black">Auto (TAUT)</div>
                    <div class="text-black left-card"># pasajeros</div>
                </div>
                <div class="grid grid-cols-2 px-4 pb-2 ">
                    <div class="text-black">Camioneta (TSUV)</div>
                    <div class="text-black left-card"># pasajeros</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Destinos"
}
</script>
