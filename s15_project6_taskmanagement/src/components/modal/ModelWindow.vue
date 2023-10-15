<script setup>
import ModalCloseButton from "./ModalCloseButton.vue"
import {useModalStore} from '@/stores/modalStore.js'
const modalStore = useModalStore();

</script>
<template>
  <div class="modal-wrapper" aria-modal="true" role="dialog" tabindex="-1">
      <div id="inner">
        <ModalCloseButton @click="modalStore.closeModal()"/>

        <!-- 槽位，接受父亲传来的 template -->
        <!-- 这样的话， 你就可以复用 ModelWindow这个 component 了 -->
        <slot></slot>

      </div>
  </div>
</template>


<!-- 这里不能使用 scoped， 因为.form 是定义在了 App.vue里面了 -->
<style lang="scss">
.modal-wrapper {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 500;
    background-color: rgba(0, 0, 0, .2);
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;

    #inner {
      background-color: #fff !important;
      padding: 30px;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      position: relative;
      max-width: 600px;
      width: 90%;

      .close-btn {
        position: absolute;
        top: 5px;
        right: 8px;
        cursor: pointer;
        background-color: #fff;
      }


      .form {
        display: flex;
        flex-direction: column;
        max-width: 100%;

        h3 {
          font-size: 20px;
          font-weight: 700;
          line-height: 21px;
          margin-bottom: 20px;
          color: pink;
        }

        label {
          font-size: 12px;
          font-weight: 500;
          line-height: 16px;
          letter-spacing: 0em;
          text-align: left;
        }

        input,
        select,
        textarea {
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
          letter-spacing: 0em;
          text-align: left;
          border: 1px solid #C2C2C2;
          border-radius: 4px;
          padding: 8px 12px;
          margin-top: 5px;

          &::placeholder {
            color: #A6A6A6;
          }
        }



        .btn {
          width: fit-content;
          padding-inline: 23px;
        }
      }
    }
  }
</style>