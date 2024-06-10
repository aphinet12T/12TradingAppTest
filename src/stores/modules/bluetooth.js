import { defineStore } from 'pinia'

export const useBluetoothStore = defineStore('bluetooth', {
    state: () => ({
        device: null,
        server: null,
        characteristic: null,
    }),
    actions: {
        async connect() {
            try {
              const device = await navigator.bluetooth.requestDevice({
                acceptAllDevices: true,
                optionalServices: ['battery_service','device_information'],
              });
              this.device = device;
      
              const server = await device.gatt.connect();
              this.server = server;
      
              const service = await server.getPrimaryService('battery_service');
              const characteristic = await service.getCharacteristic('battery_level');
              this.characteristic = characteristic;
            } catch (error) {
              console.error('Failed to connect to device:', error);
            }
          },
        async disconnect() {
            if (this.device) {
                this.device.gatt.disconnect();
                this.device = null;
                this.server = null;
                this.characteristic = null;
            }
        },
    },
});
