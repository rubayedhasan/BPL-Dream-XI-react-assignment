// address store containers

// function:: get the stored address from local storage
const getTheStoredAddress = () => {
  const storedStringAddress = window.localStorage.getItem("address");

  //   validation: checking if there in any address stored in the local storage
  if (storedStringAddress) {
    const storedAddress = JSON.parse(storedStringAddress);
    return storedAddress;
  }

  //   if: local storage return null or no things are store there
  return [];
};

// function:: pass the storedAddress to the local storage
const passTheAddressToLocalStorage = (address) => {
  const stringifyAddress = JSON.stringify(address);
  window.localStorage.setItem("address", stringifyAddress);
};

// function: store the email address to the local storage
const storeTheAddress = (fieldId) => {
  // call: access the stored address (array)
  const emails = getTheStoredAddress();

  // get the input field's value & store it in a container or array
  const theAddress = document.getElementById(fieldId).value;
  emails.push(theAddress);

  //   call: pass the address to local Storage
  passTheAddressToLocalStorage(emails);

  //   clear the input field
  document.getElementById(fieldId).value = "";
};

export { storeTheAddress };
