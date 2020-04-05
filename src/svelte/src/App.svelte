<script>
  import Section from "./components/Section.svelte";
  import Description from "./components/Description.svelte";
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500&display=swap");
  html,
  body {
    margin: 0;
    padding: 0;
  }
  main {
    font-family: "Work Sans", sans-serif;
    max-width: 320px;
  }
</style>

<main>
  <Section text="Sospendi su questo social" target="local" />
  <Section text="Sospendi su tutti i social" target="global" />
  <Description />
</main>
