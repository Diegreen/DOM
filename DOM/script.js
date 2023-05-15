let main = document.getElementById('root');
main.innerText = 'repetir';

let span = document.createElement('span');
span.innerText = 'preciso repetir'

let ul = document.createElement('ul');

let li = document.createElement('li');
li.innerText = 'repetir cada vez mais'

ul.append(li)
main.append(span, ul)
console.log(main)
console.log(span)

