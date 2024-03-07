const warning = document.getElementById('warning');
const messageContainer = document.getElementById('messageContainer');
const message = document.getElementById('message');

warning.style.display = 'flex';
messageContainer.style.display = 'none';
message.style.display = 'none';

function encryptHandler(event) {
  event.preventDefault();

  const text = document.getElementById('textarea').value;

  const regex = /[áéíóúÁÉÍÓÚA-Z]/;

  if (text) {
    if (regex.test(text)) {
      showWarning();
      alert('Solo letras minúsculas y sin acentos');
    } else {
      showMessage(encrypt(text));
      document.getElementById('textarea').value = '';
    }
  } else {
    showWarning();
  }
}

function decryptHandler(event) {
  event.preventDefault();
  const text = document.getElementById('textarea').value;

  const regex = /[áéíóúÁÉÍÓÚA-Z]/;

  if (text) {
    if (regex.test(text)) {
      showWarning();
      alert('Solo letras minúsculas y sin acentos');
    } else {
      showMessage(decrypt(text));
      document.getElementById('textarea').value = '';
    }
  } else {
    showWarning();
  }
}

function copyHandler() {
  console.log('Copiado');
  const text = document.getElementById('message').innerText;

  navigator.clipboard
    .writeText(text)
    .then(() => console.log('Texto copiado'))
    .catch(() => console.log('Error al copiar el texto'));
}

function showMessage(text) {
  warning.style.display = 'none';
  message.style.display = 'block';
  messageContainer.style.display = 'flex';
  message.textContent = text;
}

function showWarning() {
  warning.style.display = 'flex';
  message.style.display = 'none';
  messageContainer.style.display = 'none';
}

function encrypt(text) {
  let temp = '';
  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case 'a':
        temp += 'ai';
        break;
      case 'e':
        temp += 'enter';
        break;
      case 'i':
        temp += 'imes';
        break;
      case 'o':
        temp += 'ober';
        break;
      case 'u':
        temp += 'ufat';
        break;
      default:
        temp += text[i];
        break;
    }
  }
  return temp;
}

function decrypt(text) {
  let temp = '';
  let i = 0;
  while (i < text.length) {
    switch (text.substring(i, i + 5)) {
      case 'enter':
        temp += 'e';
        i += 5;
        break;
      default:
        switch (text.substring(i, i + 4)) {
          case 'enter':
            temp += 'e';
            i += 4;
            break;
          case 'imes':
            temp += 'i';
            i += 4;
            break;
          case 'ober':
            temp += 'o';
            i += 4;
            break;
          case 'ufat':
            temp += 'u';
            i += 4;
            break;
          default:
            switch (text.substring(i, i + 2)) {
              case 'ai':
                temp += 'a';
                i += 2;
                break;
              default:
                temp += text[i];
                i++;
                break;
            }
            break;
        }
        break;
    }
  }
  return temp;
}
