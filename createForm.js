import getWeather from "./apiCall";

export default(parent) => {
  const formContainer = document.createElement('form');
  const locationLabel = document.createElement('label');
  const locationInput = document.createElement('input');
  const submitButton = document.createElement('input');

  submitButton.type = 'button';
  submitButton.value = 'Request Weather';
  submitButton.addEventListener('click', () => {
    getWeather(locationInput.value);
  })
  locationInput.type = 'text';
  locationLabel.innerText = 'Location: ';
  locationLabel.appendChild(locationInput);
  formContainer.appendChild(locationLabel);
  formContainer.appendChild(submitButton);
  parent.appendChild(formContainer);
}