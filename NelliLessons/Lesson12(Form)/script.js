const userForm = document.querySelector('.user_form');

userForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // const data = new FormData(userForm);
  // const form = Object.fromEntries(data);
  // console.log(form);
  // console.log(event.target.lastname.value);

  const { supply, price, country } = event.target;

  const objSuply = {
    id: Date.now(),
    supply: supply.value,
    price: +price.value,
    country: country.value,
  };
  console.log(objSuply);
});
