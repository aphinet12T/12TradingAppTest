<template>
    <div>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" @click="connectToDevice">Connect to Bluetooth Device</button>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" @click="disconnectFromDevice" :disabled="!isConnected">Disconnect</button>
        <div v-if="isConnected">
            <p>Connected to: {{ deviceName }}</p>
        </div>
    </div>
</template>

<script setup>
import { useBluetoothStore } from '../stores'
import { computed } from 'vue'

const bluetoothStore = useBluetoothStore()

const connectToDevice = async () => {
    await bluetoothStore.connect()
}

const disconnectFromDevice = () => {
    bluetoothStore.disconnect()
}

const isConnected = computed(() => bluetoothStore.device !== null)
const deviceName = computed(() => bluetoothStore.device?.name || 'Unknown Device')
</script>