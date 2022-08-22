<template>
    <div class="max_box  rounded-lg overflow-hidden shadow-lg">
        <div class=" py-6">
            <div class="bg-gray-300  mb-2 pl-5 py-2">Todas las sedes</div>
            <div class="grid grid-cols-2 px-4 pt-6 mb-6">
                <div class="font-semibold">Guías</div>
                <div class="left-card">
                    <span class="pl-2 text-red-700 font-semibold">
                        Editar
                    </span>
                    <img src="@images/boton-editar.png" width="25">
                </div>
            </div>
            <div class="grid grid-cols-2 px-4">
                <div class="">Idiomas</div>
                <div class="left-card">
                    <span class="rounded-md idioma_bg p-1 text-white">
                        Alemán
                    </span>
                    <span class="rounded-md idioma_bg p-1 mr-3 text-white">
                        Ingles
                    </span>
                </div>
            </div>
            <div class="grid grid-cols-2 px-4 pt-4">
                <div class="">
                    <span>¿Es guía de planta?</span><br>
                    <small class="ajust_small">Se considera guía de planta para mayor rentablidad</small>
                </div>
                <div class="left-card">
                    <span class="">
                        Si
                    </span>
                </div>
            </div>
            <div class="grid grid-cols-2 px-4 pt-4 mb-4">
                <div class="">
                    <span>Lujo</span><br>
                    <small>Descripción del item</small>
                </div>
                <div class="left-card">
                    <span class="">
                        Si
                    </span>
                </div>
            </div>

            <div class="">
                <div class="bg-gray-700 grid grid-cols-2 px-4 pt-2 pb-2 mb-6">
                    <div class="text-white">Rango</div>
                    <div class="text-white left-card">Cantidad de guías</div>
                </div>
                <div class="grid grid-cols-2 px-4 pb-2 mb-3">
                    <div class="text-black">A partir de 5 pax</div>
                    <div class="text-black left-card">2 guías</div>
                </div>
                <div class="grid grid-cols-2 px-4 pb-2 ">
                    <div class="text-black">A partir de 8 pax</div>
                    <div class="text-black left-card">2 guías</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Sedes"
}
</script>
