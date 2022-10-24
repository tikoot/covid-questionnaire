import { defineRule } from "vee-validate";

defineRule("required", (value) => {
  if (!value || !value.length) {
    return "ეს ველი სავალდებულოა";
  }
});

defineRule("only_alphabet", (value, [name]) => {
  if (!value || !value.length) {
    return true;
  }
  const regex = /^[A-Za-z]+$/;
  if (!regex.test(value)) {
    return `${name} ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს`;
  }
  return true;
});

defineRule("min_max_name", (value, [min, max]) => {
  if (!value || !value.length) {
    return true;
  }
  const numericValue = Number(value);
  if (numericValue < min) {
    return `სახელის ველი უნდა შედგებოდეს მინიმუმ ${min} სიმბოლოსგან`;
  }

  if (numericValue > max) {
    return `სახელის ველი უნდა შედგებოდეს მაქსიმუმ ${max} სიმბოლოსგან`;
  }

  return true;
});

defineRule("min_max_lastname", (value, [min, max]) => {
  if (!value || !value.length) {
    return true;
  }
  const numericValue = Number(value);
  if (numericValue < min) {
    return `გვარის ველი უნდა შედგებოდეს მინიმუმ ${min} სიმბოლოსგან`;
  }

  if (numericValue > max) {
    return `გვარის ველი უნდა შედგებოდეს მაქსიმუმ ${max} სიმბოლოსგან`;
  }

  return true;
});
