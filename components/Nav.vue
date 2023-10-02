<script setup>

const props = defineProps({
  items: Array
})

</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer>
        <v-list>
          <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" title="Jay Renegade"
            subtitle="Web developer"></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
        <slot name="items"/>
          <!-- <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item> -->
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 100vh">
        <slot name="content"/>

      </v-main>
    </v-layout>
  </v-card>
</template>