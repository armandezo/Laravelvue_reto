<template>
    <div class="grid grid-cols-2 px-4 pt-6 mb-6">

        <strong class="mt-6 mb-5">Pautas operativas existentes:</strong>
        <button class="inline-flex border   bg-lima-tours  border-red-700 pl-8 w-64 mt-6 py-2 rounded-lg ml-60 ">

            <svg xmlns="http://www.w3.org/2000/svg" class="mr-6 mt-1" width="18" viewBox="0 0 512 512" fill="#FFFFFF">
                <path
                    d="M464 96h-192l-64-64h-160C21.5 32 0 53.5 0 80v352C0 458.5 21.5 480 48 480h416c26.5 0 48-21.5 48-48v-288C512 117.5 490.5 96 464 96zM336 311.1h-56v56C279.1 381.3 269.3 392 256 392c-13.27 0-23.1-10.74-23.1-23.1V311.1H175.1C162.7 311.1 152 301.3 152 288c0-13.26 10.74-23.1 23.1-23.1h56V207.1C232 194.7 242.7 184 256 184s23.1 10.74 23.1 23.1V264h56C349.3 264 360 274.7 360 288S349.3 311.1 336 311.1z" />
            </svg>

            <span class="text-white font-bold">Crear nueva pauta</span>
        </button>
    </div>
</template>

<script>
export default {
    name: "PautasOperativas"
}
</script>
