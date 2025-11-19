function addGuest() {
  const nameInput = document.getElementById('guest-name');
  const name = nameInput.value.trim();
  const message = document.getElementById('guest-message');
  const list = document.getElementById('guest-list');

  message.style.color = '';

  if (!name) {
    message.textContent = 'Please enter a guest name!';
    message.style.color = 'red';
    return;
  }

  const newItem = document.createElement('li');
  newItem.textContent = name;
  list.appendChild(newItem);

  message.textContent = `${name} was added to the guest list!`;
  message.style.color = 'green';

  nameInput.value = '';
  nameInput.focus();
}
