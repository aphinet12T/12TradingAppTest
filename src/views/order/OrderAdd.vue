<template>
    <LayoutSub>
        <template v-slot>
            <div class="flex flex-col h-full">
                <div class="flex flex-row items-center">
                    <div class="mt-2">
                        <ButtonBack />
                    </div>
                    <div class="mt-2 ml-2 flex items-center">
                        <Icon icon="uil:cart" width="40" />
                        <span class="ml-2 text-3xl">สั่งซื้อสินค้า</span>
                    </div>
                </div>
                <div class="flex flex-col mt-4">
                    <div class="ml-12">
                        รหัส : {{ storeId }}
                    </div>
                    <div class="ml-12">
                        ชื่อ : {{ storeName }}
                    </div>
                </div>
                <div class="flex flex-row justify-center mt-3">
                    <div class="mx-10">
                        <Dropdown dropdownId="dropdown1" :dropdownItems="dropdownItem" />
                    </div>
                    <div class="mx-10">
                        <Dropdown dropdownId="dropdown2" :dropdownItems="dropdownItem" />
                    </div>
                </div>
                <div class="flex flex-row justify-center mt-3">
                    <div class="mx-10">
                        <Dropdown dropdownId="dropdown3" :dropdownItems="dropdownItem" />
                    </div>
                    <div class="mx-10">
                        <Dropdown dropdownId="dropdown4" :dropdownItems="dropdownItem" />
                    </div>
                </div>
            </div>
        </template>
    </LayoutSub>
</template>

<script>
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
import LayoutSub from '../LayoutSub.vue'
import ButtonBack from '../../components/IconBack.vue'
import Dropdown from '../../components/Dropdown.vue'
export default {
    components: {
        Icon,
        LayoutSub,
        ButtonBack,
        Dropdown,
    },
    setup() {
        const storeId = localStorage.getItem('routeStoreId')
        const storeName = localStorage.getItem('routeStoreName')

        const dropdownItem = computed(() => {
            return [
                { label: 'Dashboard', link: '#' },
                { label: 'Settings', link: '#' },
                { label: 'Earnings', link: '#' },
                { label: 'Sign out', link: '#' }
            ];
        });

        return {
            storeId,
            storeName,
            dropdownItem
        }
    }
}
</script>
