const allowedCredentials = {
    users: [
      { email: 'ladyday9@gmail.com', TiD: '644097048B' },
      { email: 'Testo@gmail.com', TiD: '644097048B' },
      { email: 'NewCL@gmail.com', TiD: '644097048B' },
    ],
  };
  
  const emailInput = document.getElementById('UsernameID');
  const trackID = document.getElementById('PasswordID');
  const formiD = document.getElementById('formiD');
  
  formiD.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInput.value.trim();
    const idNumber = trackID.value.trim();
  
    if (email !== '' && idNumber !== '') {
      login(email, idNumber);
    } else {
      console.log('Please fill in all fields');
    }
  });
  
  function login(email, idNumber) {
    const user = allowedCredentials.users.find((user) => {
      return user.email === email && user.TiD === idNumber;
    });
  
    if (user) {
      const successPopup = document.createElement('div');
      successPopup.textContent = 'Login Successful';
      successPopup.classList.add('PopupStyle');
      document.getElementById('EverythingContainer').appendChild(successPopup);
      setTimeout(() => {
        successPopup.remove();
      }, 4000);
      window.location.href = './ticketView/ticket.html';
      console.log('Login successful');
    } else {
      const successPopup = document.createElement('div');
      successPopup.textContent = 'Invalid Email or Tracking ID';
      successPopup.classList.add('PopupStyleRed');
      document.getElementById('EverythingContainer').appendChild(successPopup);
      setTimeout(() => {
        successPopup.remove();
      }, 4000);
      console.log('Invalid details');
    }
  }