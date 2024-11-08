chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "muteTab") {
    chrome.tabs.update(sender.tab.id, { muted: true });
  } else if (message.action === "unmuteTab") {
    chrome.tabs.update(sender.tab.id, { muted: false });
  }
});
