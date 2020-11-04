const checkbox_disable_all_websites = document.getElementById(
  "checkbox_disable_all_websites"
);

checkbox_disable_all_websites.addEventListener("change", function () {
  chrome.storage.sync.set({ disableAllWebsites: this.checked });

  setTimeout(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, "reload");
    });
  }, 300);
});

chrome.storage.sync.get("disableAllWebsites", (bool) => {
  checkbox_disable_all_websites.checked = bool.disableAllWebsites;
});

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const currentUrl = tabs[0].url;
  const url = new URL(currentUrl);
  const host = url.hostname;
  const social = (host)=> {
    if(host === "www.linkedin.com"){
      return "linkedin"
    }else if(host === "www.facebook.com"){
      return "facebook"
    }else if(host === "www.twitter.com" || host === "twitter.com"){
      return "twitter"
    }else{
      return "linkedin"
    }
  };

  console.log(social(host));
  const checkbox_disable_website = document.getElementById(
    "checkbox_disable_website"
  );

  checkbox_disable_website.addEventListener("change", function () {
    chrome.storage.sync.set({ [`disable_${social(host)}`]: this.checked });
    checkbox_disable_website.checked = this.checked;

    setTimeout(() => {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, "reload");
      });
    }, 300);
  });

  chrome.storage.sync.get(`disable_${social(host)}`, (bool) => {
    checkbox_disable_website.checked = bool[`disable_${social(host)}`];
  });
});
