<template>
    <LayoutMain>
        <template v-slot:header>
            <div class="flex items-center justify-between pb-32">
                <div class="flex justify-end ml-5">
                    <Icon class="icon" height="50" width="50" icon="fluent:drawer-add-24-regular" />
                    <div class="sm:text-xl md:text-4xl mt-2 ml-5 font-medium">หน้าแรก</div>
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
                <MobileChart v-if="isMobile" />
                <TebletChart v-else />
            </div>
            <div class="flex justify-center mt-10">
                <Announce />
            </div>
        </template>
    </LayoutMain>
    <ButtonNav />
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { useDisplaySize } from '../composable/DisplaySize'
import LayoutMain from './LayoutMain.vue'
import ButtonNav from '../components/tablet/ButtonNav.vue'
import Announce from '../components/tablet/Announce.vue'
import TebletChart from '../components/tablet/ChartSales.vue'
import MobileChart from '../components/mobile/ChartSales.vue'
const { isMobile } = useDisplaySize()

</script>