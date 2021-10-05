
const NewDate = () => {
  const year = new Date().getFullYear();
  const month = `0${(new Date().getMonth() + 1)}`;
  const day = new Date().getDate();
  const date = `${year}-${month}-${day}`

  return date;
}

export default NewDate;