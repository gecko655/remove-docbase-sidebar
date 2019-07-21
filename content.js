chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  console.log(msg);
  if (msg.text === 'gecko655/remove-docbase-sidebar') {
    $('.js-main-menu').remove();
    window.dispatchEvent(new Event('resize'));
  }
});

