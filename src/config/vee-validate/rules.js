import { defineRule } from "vee-validate";
import { required, max, min, email } from "@vee-validate/rules";

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule("max", max);

defineRule("redberry_email", (value) => {
  if (!value || !value.length) {
    return true;
  }
  if (!/^[a-z][a-z0-9_.]*@redberry.ge+$/.test(value)) {
    return false;
  }
  return true;
});
