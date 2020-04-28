function getYoutubeSeen2() {
    chrome.history.search(
      {"text": "youtube.com/watch?v="}, function(items) {
        console.log(items);
        var seenIDs = [];
        for(var i = 0; i < items.length; i++) {
          var href = items[i].url
          var urlparts = href.split("v=");
          var id = urlparts[1].split("&")[0];
          seenIDs.push(seenIDs)
        }
        return seenIDs;
    });
  }
/*
chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
    console.log("B: " + request.message);
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        var ids = getYoutubeSeen2();
        chrome.tabs.sendMessage(activeTab.id, {"ids": ids}, function(resp) {
            console.log("bresp: " + resp);
            sendResponse(resp);
        });
    });
});
*/

chrome.runtime.onConnect.addListener(port => {
    port.onMessage.addListener(msg => {
      // Handle message however you want
      console.log(msg);
    }
  )});