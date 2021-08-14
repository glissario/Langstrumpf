<template>
  <h1>Projekt Langstrumpf</h1>
  <div class="app">
    <flip-card class="items span2 color1" front="" back="✅✅✅" image="!"
      ><img src="@/assets/logo.png"
    /></flip-card>
    <flip-card
      class="items color2"
      front="#teamwork"
      back="team"
      image=""
    ></flip-card>
    <flip-card
      class="items color1"
      front="Ergebnis"
      back="orientiert"
      image=""
    ></flip-card>
    <flip-card
      class="items color3"
      front="Projekte"
      back="Pages"
      image=""
    ></flip-card>
    <flip-card
      class="items color2"
      front="🌻"
      back="Werte"
      image=""
    ></flip-card>
    <flip-card
      class="items color1"
      front="Hierarchie"
      back="flach"
      image=""
    ></flip-card>
    <flip-card
      class="items color2"
      front="Wertschätzung"
      back="Offenheit"
      image=""
    ></flip-card>
  </div>
</template>

<script>
// @ is an alias to /src

import FlipCard from "@/components/FlipCard.vue";
export default {
  components: {
    FlipCard,
  },
};
</script>

<style lang="scss" scoped>
.app {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
}
.items {
  width: 100%;
  height: 20rem;
  box-shadow: rgba(215, 215, 223, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
.span2 {
  grid-column-start: span 2;
}
.color1 {
  background-color: #e07a5f;
}
.color2 {
  background-color: #f2cc8f;
}
.color3 {
  background-color: #81b29a;
}
</style>
