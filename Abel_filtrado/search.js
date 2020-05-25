function myFunction() {
  var input, filter, cards, cardContainer, title;
  input = document.getElementById('myFilter');
  filter = input.value.toUpperCase(); //pasar a mayusculas
  cardContainer = document.getElementById('myItems');
  cards = cardContainer.getElementsByClassName('mix');
  let counter = cards.length;
  for (var i = 0; i < cards.length; i++) {
    title = cards[i].querySelector('.card-title');
    //console.log(title.innerText);
    //console.log(cards.length);
    if (title.innerText.toUpperCase().includes(filter)) {
      //includes normalmente para string en arrays usar indexOf
      cards[i].style.display = '';
    } else {
      cards[i].style.display = 'none';
      counter = counter - 1;
    }
  }
  const message = cardContainer.getElementsByClassName('notFound');
  console.log(counter);
  console.log(message);
  if (counter <= 0) {
    message[0].style.display = '';
  } else {
    message[0].style.display = 'none';
  }
}
