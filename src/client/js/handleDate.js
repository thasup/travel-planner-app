export function handleDate () {
  // Create a new date instance dynamically with JS
  const localDate = new Date();
  const years = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const dd = localDate.getDate();
  const mm = localDate.getMonth();
  const yy = localDate.getFullYear();
  const today = `${yy}-${mm + 1}-${dd}`;
  const todayNameMonth = `${dd} ${years[mm]} ${yy}`;

  // Prevent date input to be able to select previous date
  let DD = localDate.getDate();
  let MM = localDate.getMonth() + 1;

  if (DD < 10) {
    DD = `0${DD}`;
  };

  if (MM < 10) {
    MM = `0${MM}`;
  };

  const minDay = `${yy}-${MM}-${DD}`;

  // Debug
  console.log({ today, todayNameMonth, minDay });

  document.getElementById('start-date').setAttribute('min', minDay);
  document.getElementById('end-date').setAttribute('min', minDay);

  return today, todayNameMonth, minDay;
};
