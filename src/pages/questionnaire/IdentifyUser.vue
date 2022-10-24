<template>
  <the-wrapper>
    <the-header page="1"></the-header>
    <section class="flex">
      <div class="w-2/4">
        <VueForm @submit="onSubmit">
          <div class="form-group">
            <label for="username">სახელი*</label>
            <Field
              name="username"
              type="username"
              rules="required|min_max_name:2,255|only_alphabet:სახელის"
            />
            <ErrorMessage name="username" />
          </div>

          <div class="form-group">
            <label for="lastname">გვარი*</label>
            <Field
              name="lastname"
              type="lastname"
              rules="required|min_max_lastname:2,255|only_alphabet:გვარის"
            />
            <ErrorMessage name="lastname" />
          </div>

          <div class="form-group">
            <label for="mail">მეილი*</label>
            <Field name="mail" type="email" rules="required|email" />
            <ErrorMessage name="email" />
          </div>

          <div class="form-group">
            <button>Sign up</button>
          </div>
        </VueForm>
      </div>
      <div>
        <img src="@/assets/images/scan2.png" alt="" />
      </div>
    </section>
  </the-wrapper>
</template>

<script>
import { Form as VueForm, Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    VueForm,
    Field,
    ErrorMessage,
  },
};
</script>
