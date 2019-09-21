function capitalizeFirstLetter(string, toCapital = true) {
  return toCapital
    ? string.charAt(0).toUpperCase() + string.slice(1)
    : string.charAt(0).toLowerCase() + string.slice(1);
}

export default capitalizeFirstLetter;
