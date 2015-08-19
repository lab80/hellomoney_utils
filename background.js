chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, { file: "jquery-1.11.3.min.js" }, function() {
    chrome.tabs.executeScript(null, { file: "content.js" });
  });
});
