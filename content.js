chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.text === 'gecko655/remove-docbase-sidebar') {
    const targetElement = $('.main-layout__menu')
    targetElement.toggle();
    targetElement.css('width', (targetElement.is(":visible")? '230px': '0px'));
    window.dispatchEvent(new Event('resize'));
  }
});

