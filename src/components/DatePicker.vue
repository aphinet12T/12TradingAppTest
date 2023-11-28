<template>
    <div class="relative max-w-sm">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Icon class="icon w-4 h-4 text-gray-500" height="30" width="30" icon="solar:calendar-bold" />
        </div>
        <input datepicker datepicker-buttons type="text" id="datepickerId"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5  "
            placeholder="เลือกวันที่">
    </div>
</template>

<script setup>
// import Datepicker from 'flowbite-datepicker/Datepicker';
import { Icon } from '@iconify/vue';


// const datepickerEl = document.getElementById('datepickerId');
// new Datepicker(datepickerEl, {
//     // options
// }); 
</script>
