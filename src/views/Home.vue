<template>
  <h1 class="header">Vom Bootcamp Europe zum Projekt Langstrumpf</h1>
  <div class="item-world">
    <flip-card
      class="items color1"
      front="Get in IT🔑"
      back="Auf zweitem Bildungsweg zunächst Bwl studiert, aktuell Teilnehmer am Coding Bootcamp Europe"
      ><img src="@/assets/logo.png"
    /></flip-card>
    <flip-card
      class="items color3"
      front="Analytische Fähigkeiten...📉📊📈"
      back="aus meiner Zeit als ♠️♥️Pokerspieler♦️♣️ helfen dabei, die Skills auch anzuwenden"
    ></flip-card>
    <flip-card
      class="items color2 span2"
      front=""
      back="In 13 Wochen wurden die Grundlagen modernen Frontend-Programmierens gelehrt, html, css und Javascript standen auf der Tagesordnung. #Teamwork war selbstverständlich, aber auch genug Freiraum, sich auszuprobieren"
      ><img width="200" src="@/assets/BCE2.png"
    /></flip-card>
    <flip-card class="items color2" front="die letzten 2 Wochen" back=""
      ><img width="100" src="@/assets/logo.png"
    /></flip-card>
    <flip-card
      class="items color1"
      front="Darüber hinaus..."
      back="Einblicke in Versionierung, NodeJS, E2E-Testing, Rest, APIs, Accessibility, Agilität... "
    ></flip-card>
    <flip-card
      class="items color1"
      front="Ehrgeiz"
      back="hat mich in meinem Leben stets begleitet und auch meine junge Karriere als Entwickler geprägt"
    ></flip-card>
    <flip-card
      class="items color2"
      front="Nachhaltigkeit 💚"
      back="Ist mir ein wichtiges Anliegen - auch deswegen ist mir euer Projekt so sehr aufgefallen"
    ></flip-card>

    <flip-card
      class="items color2"
      front="Ehrenamt"
      back="Eine Selbstverständlichkeit - aktuell in der VSG Mannheim🏐🥇"
    ></flip-card>
    <div class="interest">
      <h2>Hört sich interessant an?</h2>
      <p>
        Ja, mich hat die Anzeige angesprochen und ich denke, ich kann euch schon
        jetzt weiter helfen. Fehlende Erfahrung eines Quereinsteigers mache ich
        mit Ehrgeiz und den Vorerfahrungen aus der Selbständigkeit wett. Ich
        habe großes Interesse, euch beim Welt verbessern zu helfen.
      </p>
    </div>
    <flip-card
      class="items color1"
      front="💻📧📲"
      back="https://github.com/glissario/"
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
.header {
  padding: 5rem 2rem;
  margin: 2rem;
  margin-bottom: 0;
  color: #e07a5f;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}
.item-world {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  min-width: 300px;
  margin: 0rem 2rem;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
}
.items {
  box-sizing: border-box;
  height: 18rem;
  width: 100%;
  padding: 1rem;
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
  color: black;
}
.color3 {
  background-color: #81b29a;
}

.interest {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  background-color: #81b29a;
  color: black;
  font-weight: 750;
  grid-column-start: span 2;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
}

.interest:hover {
  box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px,
    rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px,
    rgb(255, 85, 85) 0px 0px 0px 15px;
  transform: scale(1.2);
  z-index: 100;
  transform: translateY(-15px);
}

@media screen and (max-width: 1024px) {
  .item-world {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (max-width: 768px) {
  .item-world {
    grid-template-columns: 1fr 1fr;
  }
  .interest {
    grid-column-start: span 1;
    grid-row-start: span 2;
  }
}
@media screen and (max-width: 425px) {
  .item-world {
    display: flex;
    flex-direction: column;
  }
}
</style>
