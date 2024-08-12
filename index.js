let Header = document.querySelector('.header');

Header.addEventListener('click', (e) => {
  e.preventDefault();

  if (Header.classList.contains('header')) {
    Header.classList.remove('header');
    Header.classList.add('efect');
  } else if (Header.classList.contains('efect')) {
    Header.classList.remove('efect');
    Header.classList.add('header');
  }
});

let Textprinc = document.querySelector('.text');
let Text = document.createElement('h1');
Text.textContent = 'Produtos';
Text.classList.add('h1');
document.body.appendChild(Text);
Textprinc.appendChild(Text);

let Boxtext = document.createElement('div');
Boxtext.classList.add('boxext');
document.body.appendChild('Boxext');
Textprinc.appendChild(Boxtext);
