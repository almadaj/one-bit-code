const dayjs = require("dayjs");

function birthday(date) {
  const birthday = dayjs(date);
  const today = dayjs();

  const ageInYears = today.diff(birthday, "years");
  const nextBirthday = birthday.add(ageInYears + 1, "year");
  const daysToNextBday = nextBirthday.diff(today, "day");
  console.log(`Idade: ${ageInYears}`);
  console.log(`Aniversário: ${nextBirthday.format("DD/MM/YYYY")}`);
  console.log(`Dias para o próximo aniversário: ${daysToNextBday}`);
}

birthday("1997-08-04");
