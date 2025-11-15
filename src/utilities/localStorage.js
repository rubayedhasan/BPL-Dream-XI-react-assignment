// address store container
const arrAddress = [];

// function: store the email address to the local storage
const storeTheAddress = (fieldId) => {
  // get the input field's value
  const address = document.getElementById(fieldId).value;

  //   set or pass the address to the container
  arrAddress.push(address);

  const stringifyAddress = JSON.stringify(arrAddress);

  window.localStorage.setItem("address", stringifyAddress);
};

export { storeTheAddress };
