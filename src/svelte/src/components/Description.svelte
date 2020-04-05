<script>
  function handleCta() {
    window.open("https://www.google.com");
  }
</script>

<style>
  .description {
    font-size: 12px;
    background: #fff6e4;
    text-align: center;
  }

  .overlay {
    padding: 24px;
    background-image: url("https://i.ibb.co/XWPdMhN/BG-pallini.png");
    background-size: cover;
    background-position: center center;
  }

  .hashtag {
    color: rgb(232, 95, 50);
    font-weight: bold;
  }

  .cta-cont {
    margin-top: 24px;
  }

  .cta {
    background: #ffffff;
    border: 2px solid #423535;
    box-sizing: border-box;
    border-radius: 5px;
    color: #423535;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 16px;
    padding-bottom: 16px;
    font-size: 15px;
    width: 100%;
    height: 55px;
    transition: ease 0.2s;
    cursor: pointer;
    font-family: "Work Sans", sans-serif;
  }

  .cta:hover {
    background: #ff9061;
    color: #fff;
    border: 2px solid #ff9061;
  }
</style>

<div class="description">
  <div class="overlay">
    Stiamo vivendo un periodo difficile per tutti, per questo abbiamo chiesto a
    degli psicologi di raccogliere alcuni consigli per viverlo al meglio in
    serenità
    <span class="hashtag">#unitimadistanti</span>

    <div class="cta-cont">
      <button class="cta" on:click={handleCta}>Visita il sito</button>
    </div>
  </div>
</div>
