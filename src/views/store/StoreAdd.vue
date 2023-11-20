<template>
    <LayoutSub>
        <template v-slot>
            <div class="flex flex-row items-center">
                <div class="mt-2">
                    <ButtonBack />
                </div>
                <div class="mt-2 ml-2 flex items-center">
                    <Icon icon="tdesign:store" width="40" />
                    <span class="ml-2">เพิ่มร้านค้า</span>
                </div>
            </div>
            <div class="flex flex-row items-center justify-between mt-3">
                <div class="mt-2 ml-2 flex items-center">
                    <Icon icon="tdesign:store" width="20" />
                    <span class="ml-2">ข้อมูลร้านค้า</span>
                </div>
                <div class="mt-2">
                    <p class=" text-gray-500">*ข้อมูลบังคับ</p>
                </div>
            </div>
            <div class="flex justify-center">
                <div class="bg-white h-64 w-card shadow-md rounded-lg">
                    
                </div>
            </div>
        </template>
    </LayoutSub>
</template>

<script>
import { Icon } from '@iconify/vue';
import LayoutSub from '../LayoutSub.vue';
import ButtonBack from '../../components/IconBack.vue';
export default {
    components: {
        Icon,
        LayoutSub,
        ButtonBack,
    },
}
</script>
