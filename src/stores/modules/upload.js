// imageUploadStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useUploadStore = defineStore('upload', {
  state: () => ({
    selectedImage: null,
  }),
  actions: {
    setSelectedImage(image) {
      this.selectedImage = image;
    },
    async uploadResizedImage() {
      try {
        const resizedImage = await this.resizeImage(this.selectedImage);

        const formData = new FormData();
        formData.append('image', resizedImage);

        const response = await axios.post('', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })

        if (response.status === 200) {
          console.log('อัปโหลดรูปภาพสำเร็จ');
        } else {
          console.error('มีปัญหาในการอัปโหลดรูปภาพ');
        }
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการอัปโหลด', error);
      }
    },
    async resizeImage(image) {
      return new Promise((resolve) => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        const maxResolution = 800

        const img = new Image();
        img.onload = () => {
          let width = img.width
          let height = img.height

          if (width > height) {
            if (width > maxResolution) {
              height *= maxResolution / width
              width = maxResolution
            }
          } else {
            if (height > maxResolution) {
              width *= maxResolution / height
              height = maxResolution
            }
          }
          canvas.width = width
          canvas.height = height

          ctx.drawImage(img, 0, 0, width, height)
          canvas.toBlob((blob) => {
            resolve(blob)
          }, 'image/jpeg', 0.9)
        };

        img.src = URL.createObjectURL(image)
      })
    },
  },
});
