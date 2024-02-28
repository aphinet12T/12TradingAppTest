<template>
    <LayoutMain>
        <template v-slot:header>
            <div class="flex items-center justify-between pb-32">
                <div class="flex justify-end ml-5">
                    <Icon class="icon" height="50" width="50" icon="fluent:drawer-add-24-regular" />
                    <div class=" text-4xl mt-2 ml-5 font-medium">หน้าแรก</div>
                </div>
                <div class="flex justify-end mr-2">
                </div>
            </div>
            <div class="flex items-center justify-between">
                <div class="flex justify-start">

                </div>
                <div class="flex justify-end">

                </div>
            </div>
        </template>
        <template v-slot:body>
            <div class="flex justify-center">
                <ChartSales />
            </div>
            <div class="flex justify-center mt-10">
                <Announce />
            </div>
        </template>
    
    </LayoutMain>
    <ButtonNav/>
</template>
    
<script>
import { Icon } from '@iconify/vue';
import { ref, onMounted, onUnmounted } from 'vue';
import LayoutMain from './LayoutMain.vue';
import ButtonNav from '../components/ButtonNav.vue'
import ChartSales from '../components/ChartSales.vue'
import Announce from '../components/Announce.vue'

export default {
    components: {
        Icon,
        LayoutMain,
        ChartSales,
        Announce,
        ButtonNav,
    },
    setup() {

    },
};
</script>
    