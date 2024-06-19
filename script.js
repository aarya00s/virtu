'use strict';

function openArticle(element) {
  let blogCard = element.closest('.blog-card');
  blogCard.classList.toggle('-is-opened');
}
