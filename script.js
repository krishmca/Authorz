// JavaScript Document
  function createNode(element) {
	  'use strict';
      return document.createElement(element);
  }

  function append(parent, el) {
	  'use strict';
    return parent.appendChild(el);
  }

  const ul = document.getElementById('authors');
  const url = 'https://randomuser.me/api/?results=20';
  fetch(url).then((resp) => resp.json()).then(function(data) {
	  'use strict';
    let authors = data.results;
	 console.log(authors);
    return authors.map(function(author) {
      let li = createNode('li'),
          img = createNode('img'),
          span = createNode('span');
      img.src = author.picture.medium;
      span.innerHTML = `${author.name.first} ${author.name.last}`;
      append(li, img);
      append(li, span);
      append(ul, li);
    });
  })
  .catch(function(error) {
	  'use strict';
    console.log(JSON.stringify(error));
  });
