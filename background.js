chrome.runtime.onInstalled.addListener(function(){
  chrome.contextMenus.create({
    id: "remove-docbase-sidebar",
    title: "左側のサイドバーを消す",
    documentUrlPatterns: [ "https://*.docbase.io/*" ]
  });
});
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  chrome.tabs.sendMessage(tab.id, {text: 'gecko655/remove-docbase-sidebar'});
});
