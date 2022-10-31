import { defineRule } from "vee-validate";

defineRule("required", (value) => {
  if (!value || !value.length) {
    return "ეს ველი სავალდებულოა";
  }
  return true;
});

defineRule("min_max_name", (value, [min, max]) => {
  if (!value || !value.length) {
    return true;
  }

  if (value.length < min) {
    return `სახელის ველი უნდა შედგებოდეს მინიმუმ ${min} სიმბოლოსგან`;
  }

  if (value.length > max) {
    return `სახელის ველი უნდა შედგებოდეს მაქსიმუმ ${max} სიმბოლოსგან`;
  }

  return true;
});

defineRule("min_max_lastname", (value, [min, max]) => {
  if (!value || !value.length) {
    return true;
  }

  if (value.length < min) {
    return `გვარის ველი უნდა შედგებოდეს მინიმუმ ${min} სიმბოლოსგან`;
  }

  if (value.length > max) {
    return `გვარის ველი უნდა შედგებოდეს მაქსიმუმ ${max} სიმბოლოსგან`;
  }

  return true;
});

defineRule("email", (value) => {
  if (!value || !value.length) {
    return true;
  }

  if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
    return "ეს ველი უნდა იყოს მეილის ფორმატში";
  }

  if (!/^[a-z][a-z0-9_.]*@redberry.ge+$/.test(value)) {
    return "ეს ველი უნდა იყოს redberry- მეილის ფორმატში";
  }
  return true;
});
