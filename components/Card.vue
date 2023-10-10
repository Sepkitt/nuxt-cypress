<template>
  <v-row>
    <v-col
    data-cy="CARD_GRID"

      v-for="n in 9"
      :key="n"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img
      data-cy="CARD_IMG"
        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        aspect-ratio="1"
        cover
        class="bg-grey-lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
          data-cy="CARD_placeholder"

            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
            data-cy="CARD_PROGRESS"

              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>