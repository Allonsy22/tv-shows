<template>
  <v-card
    elevation="5"
    width="150"
    height="200"
  >
  <v-img
    :src="img"
    height="inherit"
    class="img"
  >
    <p class="name">{{actor}} <br> as <i>{{character}}</i></p>
  </v-img>
  </v-card>
</template>

<script>
export default {
  name: 'ActorCard',
  props: {
    img: String,
    actor: String,
    character: String
  }

}
</script>

<style scoped>
.img {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

.name {
  color: #fff;
  background-color: #000;
  text-align: center;
  font-size: 10px;
  margin: 0;
}
</style>
