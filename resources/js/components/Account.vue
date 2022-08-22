<template>
    <div class="flex items-center h-full text-sm">
            <div class="flex items-center h-full">
                 <div class="group relative h-full pr-3">
                    <select class="text-gray-900 text-sm rounded-md block w-full p-2 mt-3 mr-4  bg-white ">
                        <option value="en">En</option>
                        <option value="es">Es</option>
                    </select>
                 </div>
               <div class="group relative h-full">
                    <a href="#" class="text-white flex items-center h-full bg-grey-darkest px-4">
                        <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar">
                        <span class="px-2">Admin</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                            class="h-6 w-6 text-grey-darker fill-current ml-1">
                            <path class="heroicon-ui" d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z" />
                        </svg>
                    </a>
                    <div class="hidden group-hover:block absolute pin-r top-full w-48 bg-sidebar-grey">
                        <a href="#" class="block text-left py-3 px-3 text-white hover:text-blue-dark text-xs">
                            Mi Cuenta
                        </a>
                        <a href="#" class="block text-left py-3 px-3 text-white hover:text-blue-dark text-xs">
                            Editar Cuenta
                        </a>
                        <a href="#" class="block text-left py-3 px-3 text-white hover:text-blue-dark text-xs">
                            Logout
                        </a>
                    </div>
                </div>
                <div class="group relative h-full">
                    <img class="w-10 h-10 mt-3 mr-4 rounded-full" src="@images/shutdown.png" alt="">
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: "Account",
};
</script>
