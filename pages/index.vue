<template>
  <v-app>
  <!-- <Nav>
  </Nav> -->
    <v-row>
      <v-col cols="12">
        <div class="title">Select a component {{ compNam }}</div>
      </v-col>
      <v-col v-for="component in componentList" :key="component">
        <v-row>
          <v-col class="component-button">
            <div class="title">{{ component }}</div>
            <component :is="getComponentName(component)" v-if="isShow && component === compNam" />
            <v-btn color="primary" @click="onClick(component)">{{ isShow && component === compNam === true ? 'Hide' :
              'Show' }}</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-app>
</template>

<script setup>
import { defineAsyncComponent, defineComponent, ref, computed } from "vue"

const isShow = ref(false);
const compNam = ref('')

const getComponentName = (component) => {
  return isShow.value ? defineAsyncComponent(() => import(`../components/${component}.vue`)) : null;
}

function onClick(component) {

  if (isShow.value && component === compNam.value) {
    isShow.value = false;
  } else {
    isShow.value = true;
    compNam.value = component;
  }
}

const componentList = ['Counter', 'LoginForm', 'TodoList', 'ModalView'];
</script>
