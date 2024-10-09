chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "muteTab") {
      chrome.tabs.update(sender.tab.id, { muted: true });
    }
  });
  