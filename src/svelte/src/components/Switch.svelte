<script>
  import { onMount } from "svelte";

  export let target;
  export let disable;

  const validChannels = ["linkedin", "facebook"];

  const extractChannel = () => {
    switch (window.location.hostname) {
      case "www.facebook.com":
        return "facebook";
      case "www.linkedin.com":
        return "linkedin";
      default:
        return null;
    }
  };

  const channel = extractChannel();

  const handleSwitch = ({ target, disable }) => {
    let storageName = "";

    if (target === "local") {
      storageName = `disable-${channel}`;
    }

    if (target === "global") {
      storageName = "disable-global";
    }

    console.log({ storageName });

    try {
      chrome.storage.local.set(storageName, disable);
    } catch (_) {}
  };

  $: handleSwitch({ target, disable });

  onMount(async () => {
    if (validChannels.includes(channel)) {
      chrome.storage.local.get(`disable-${channel}`, data => {
        disable = data === "true";
      });
    }

    chrome.storage.local.get("disable-global", data => {
      disable = data === "true";
    });
  });
</script>

<style lang="scss">
  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 20px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.2s;
  }

  input:checked + .slider {
    background-color: rgb(232, 95, 50);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px rgb(232, 95, 50);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(12px);
    -ms-transform: translateX(12px);
    transform: translateX(12px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 30px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>

<label class="switch">
  <input type="checkbox" bind:checked={disable} />
  <span class="slider round" />
</label>
