<template>
  <v-app>
    <Nav :items="componentList">
      <template #items>
        <v-list-item @click="onClick(component)" v-for="component in componentList" prepend-icon="mdi-code-equal"
          :title="component" :value="component"></v-list-item>
      </template>
      <template #content>
        <v-container fill-height fluid>
          <v-row justify="center" align="center ">
            <v-col cols="12" v-for="component in componentList" :key="component">
              <component :key="component.index" :is="getComponentName(component)"
                v-if="isShow && component === compNam" />

            </v-col>
          </v-row>
        </v-container>


      </template>
    </Nav>
    <!-- <v-row>
      <v-col cols="12">
        <div class="title">Select a component {{ compNam }}</div>
      </v-col>
      <v-col v-for="component in componentList" :key="component">
        <v-row justify="center">
          <v-col cols="12" class="component-button">
            <component :is="getComponentName(component)" v-if="isShow && component === compNam" />

          </v-col>
          <v-col cols="12">

            <v-btn color="primary" @click="onClick(component)">{{ isShow && component === compNam === true ? 'Hide' :
              'Show' }}</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row> -->
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
