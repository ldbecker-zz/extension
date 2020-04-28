function youtubeSeen() {

}

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
    console.log("C: " + request);
    
    sendResponse(document.location.href);
});
