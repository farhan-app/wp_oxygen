// based on https://github.com/zenorocha/clipboard.js/tree/gh-pages/assets/scripts

var snippets = document.querySelectorAll("pre");

[].forEach.call(snippets, function (snippet) {
  snippet.firstChild.insertAdjacentHTML(
    "beforebegin",
    '<button class="btn" data-clipboard-snippet><svg class="clippy" width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.66667 16H8V17.3333H2.66667V16ZM9.33333 8H2.66667V9.33333H9.33333V8ZM12 12V9.33333L8 13.3333L12 17.3333V14.6667H18.6667V12H12ZM6 10.6667H2.66667V12H6V10.6667ZM2.66667 14.6667H6V13.3333H2.66667V14.6667ZM14.6667 16H16V18.6667C15.9792 19.0417 15.8542 19.3542 15.6042 19.6042C15.3542 19.8542 15.0417 19.9792 14.6667 20H1.33333C0.604167 20 0 19.3958 0 18.6667V4C0 3.27083 0.604167 2.66667 1.33333 2.66667H5.33333C5.33333 1.1875 6.52083 0 8 0C9.47917 0 10.6667 1.1875 10.6667 2.66667H14.6667C15.3958 2.66667 16 3.27083 16 4V10.6667H14.6667V6.66667H1.33333V18.6667H14.6667V16ZM2.66667 5.33333H13.3333C13.3333 4.60417 12.7292 4 12 4H10.6667C9.9375 4 9.33333 3.39583 9.33333 2.66667C9.33333 1.9375 8.72917 1.33333 8 1.33333C7.27083 1.33333 6.66667 1.9375 6.66667 2.66667C6.66667 3.39583 6.0625 4 5.33333 4H4C3.27083 4 2.66667 4.60417 2.66667 5.33333Z" fill="white"/></svg></button>'
  );
});

var clipboardSnippets = new ClipboardJS("[data-clipboard-snippet]", {
  target: function (trigger) {
    return trigger.nextElementSibling;
  },
});

clipboardSnippets.on("success", function (e) {
  e.clearSelection();

  showTooltip(e.trigger, "Copied!");
});

clipboardSnippets.on("error", function (e) {
  showTooltip(e.trigger, fallbackMessage(e.action));
});

// tooltips.js
var btns = document.querySelectorAll(".btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("mouseleave", clearTooltip);
  btns[i].addEventListener("blur", clearTooltip);
}

function clearTooltip(e) {
  e.currentTarget.setAttribute("class", "btn");
  e.currentTarget.removeAttribute("aria-label");
}

function showTooltip(elem, msg) {
  elem.setAttribute("class", "btn tooltipped tooltipped-w");
  elem.setAttribute("aria-label", msg);
}

// Simplistic detection, do not use it in production
function fallbackMessage(action) {
  var actionMsg = "";
  var actionKey = action === "cut" ? "X" : "C";

  if (/iPhone|iPad/i.test(navigator.userAgent)) {
    actionMsg = "No support :(";
  } else if (/Mac/i.test(navigator.userAgent)) {
    actionMsg = "Press ⌘-" + actionKey + " to " + action;
  } else {
    actionMsg = "Press Ctrl-" + actionKey + " to " + action;
  }

  return actionMsg;
}
