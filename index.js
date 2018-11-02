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
  let searching = document.querySelector('#grand-node');
  let nextSearch = searching.children[0];

  while (nextSearch) {
    searching = nextSearch;
    nextSearch = searching.children[0];
  }

  return searching;
}
