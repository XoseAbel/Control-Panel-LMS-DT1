let name, rate, textComment, origin;

function changeComment(name, rate, textComment, iDiv) {
  // Then append the whole thing onto the body
  let user = document.getElementsByClassName('userName');
  let rated = document.getElementsByClassName('rated');
  let commented = document.getElementsByClassName('commented');
  document.getElementById('commentArea').appendChild(iDiv);
  user[user.length - 1].innerHTML = name.value; //change in new comment user per user input
  rated[rated.length - 1].innerHTML = rate.value; //change in new comment rate per rate input
  commented[commented.length - 1].innerHTML = textComment.value; //change in new comment text commented per text commented input
  //Change starts imagen
  let imgStarts = document.getElementsByClassName('img-starts');
  switch (rate.value) {
    case '1':
      $(imgStarts[imgStarts.length - 1]).attr('src', 'images/1starts.jpg');
      break;
    case '2':
      $(imgStarts[imgStarts.length - 1]).attr('src', 'images/2starts.jpg');
      break;
    case '3':
      $(imgStarts[imgStarts.length - 1]).attr('src', 'images/3starts.jpg');
      break;
    case '4':
      $(imgStarts[imgStarts.length - 1]).attr('src', 'images/4starts.jpg');
      break;
    case '5':
      $(imgStarts[imgStarts.length - 1]).attr('src', 'images/5starts.jpg');
      break;
    default:
      console.log('error');
  }
}

function addComment() {
  //copy .example content
  var origin = document.querySelector('#example');
  //duplicate the example comment into div
  let iDiv = document.createElement('div');
  iDiv.className = 'newComment';
  // iDiv = origin; // disappear origina div
  iDiv = origin.cloneNode(true);
  changeComment(name, rate, textComment, iDiv);
}
let createArrayRate = () => {
  rateArray = document.getElementsByClassName('rated');
  let average = 0;
  for (var i = 0; i < rateArray.length; i++) {
    let newValue = rateArray[i].innerText;
    newValue = +newValue;
    average = average + newValue;
  }
  average = average / rateArray.length;
  average = Math.round(average * 10) / 10;
  document.getElementById('result').innerHTML = Intl.NumberFormat(
    'de-DE'
  ).format(average);
  average = Math.round(average);
  //Change starts imagen result
  let imgResult = document.getElementById('img-result');
  switch (average) {
    case 1:
      $(imgResult).attr('src', 'images/1starts.jpg');
      break;
    case 2:
      $(imgResult).attr('src', 'images/2starts.jpg');
      break;
    case 3:
      $(imgResult).attr('src', 'images/3starts.jpg');
      break;
    case 4:
      $(imgResult).attr('src', 'images/4starts.jpg');
      break;
    case 5:
      $(imgResult).attr('src', 'images/5starts.jpg');
      break;
    default:
      console.log('error');
  }
};

function comment() {
  name = document.getElementById('nameUser');
  rate = document.getElementById('rating');
  textComment = document.getElementById('FormControlTextarea1');
  name.value !== '' && rate.value >= 1 && textComment.value !== ''
    ? addComment(name, rate, textComment)
    : $('.toast').toast('show');
  $('#addComments')[0].reset();
  createArrayRate();
}
