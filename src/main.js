const keywords = ["coronavirus", "covid-19", "covid"];

const extractChannel = () => {
  switch (window.location.host) {
    case "facebook.com":
    case "www.facebook.com":
      return "facebook";
    case "linkedin.com":
    case "www.linkedin.com":
      return "linkedin";
    default:
      return null;
  }
};

const computeFacebookQuery = (target) => {
  switch (target) {
    case "post":
      return "div[role='article']";
    case "link":
      return "[role='link']";
    default:
      return "";
  }
};

const computeLinkedinQuery = (target) => {
  switch (target) {
    case "feed":
      return "feed-shared-update-v2";
    case "news":
      return "feed-shared-news-module__storyline";
    default:
      return "";
  }
};

const removeFacebookItem = (item, target) => {
  switch (target) {
    case "post":
      item.remove();
      break;
    case "link":
      item.parentElement.parentElement.parentElement.remove();
      break;
    default:
      break;
  }
};

const removeLinkedinItem = (item, target) => {
  switch (target) {
    case "feed":
    case "news":
      item.remove();
      break;
    default:
      break;
  }
};

const removePosts = (channel, target) => {
  let items;
  let query;

  switch (channel) {
    case "facebook":
      query = computeFacebookQuery(target);
      items = document.querySelectorAll(query);
      break;
    case "linkedin":
      query = computeLinkedinQuery(target);
      items = document.getElementsByClassName(query);
      break;
    default:
      break;
  }

  for (const item of items) {
    const content = item.innerText.toLowerCase();

    for (keyword of keywords) {
      if (content.includes(keyword)) {
        switch (channel) {
          case "facebook":
            removeFacebookItem(item, target);
            break;
          case "linkedin":
            removeLinkedinItem(item, target);
            break;
          default:
            break;
        }
        console.log(`[${+new Date()}] Removed an item about Covid-19`);
      }
    }
  }
};

async function disableCorona() {
  // Extract the current channel from the window location
  const currentChannel = extractChannel();

  // Execute the blocker only when on a specific channel
  if (!currentChannel) return;

  switch (currentChannel) {
    case "facebook":
      removePosts(currentChannel, "post");
      removePosts(currentChannel, "link");
      break;
    case "linkedin":
      removePosts(currentChannel, "feed");
      removePosts(currentChannel, "news");
      break;
    default:
      break;
  }
}

document.addEventListener("load", disableCorona);
document.addEventListener("DOMNodeInserted", disableCorona);
