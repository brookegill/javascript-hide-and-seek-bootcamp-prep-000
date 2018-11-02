function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedLists = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n;
  }
}

function deepestChild() {
  const deepChild = document.querySelector('#grand-node div div div div');
  return deepChild;
}
