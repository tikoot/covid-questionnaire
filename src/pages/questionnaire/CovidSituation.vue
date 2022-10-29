<template>
  <the-wrapper>
    <the-header page="2"></the-header>
    <section>
      <VueForm @submit="onSubmit" v-slot="{ meta, values }">
        <div class="flex justify-between">
          <div class="min-w-[35%] pt-[42px]">
            <h2 class="text-[22px] font-bold">გაქვს გადატანილი Covid-19?*</h2>
            <div class="pl-5">
              <Field
                name="had_covid"
                type="radio"
                value="yes"
                rules="required"
                v-model="had_covid"
              />
              <label class="text-[20px] pl-[19px]">კი</label>
            </div>
            <div class="pl-5">
              <Field
                name="had_covid"
                type="radio"
                value="no"
                v-model="had_covid"
              />
              <label class="text-[20px] pl-[19px]">არა</label>
            </div>
            <div class="pl-5">
              <Field
                name="had_covid"
                type="radio"
                value="have_right_now"
                v-model="had_covid"
              />
              <label class="text-[20px] pl-[19px]">ახლა მაქვს</label>
            </div>
            <ErrorMessage
              name="had_covid"
              class="text-[#F15524] text-base pt-[5px] pl-5"
            />
            <div v-if="values.had_covid === 'yes'" class="pt-[46px]">
              <h2 class="text-[22px] font-bold">
                ანტისხეულების ტესტი გაქვს გაკეთებული?*
              </h2>
              <div class="pl-5">
                <Field
                  name="antibody_test"
                  type="radio"
                  value="yes"
                  rules="required"
                  v-model="antibody_test"
                />
                <label class="text-[20px] pl-[19px]">კი</label>
              </div>
              <div class="pl-5">
                <Field
                  name="antibody_test"
                  type="radio"
                  value="no"
                  v-model="antibody_test"
                />
                <label class="text-[20px] pl-[19px]">არა</label>
              </div>
              <ErrorMessage
                name="antibody_test"
                class="text-[#F15524] text-base pt-[5px] pl-5"
              />
            </div>
          </div>

          <div>
            <img src="@/assets/images/vaccinate2.png" alt="" />
          </div>
        </div>
        <div class="flex items-center justify-between m-auto max-w-[145px]">
          <back-button to="/identify"></back-button>
          <forward-button
            @click="onSubmit"
            v-if="meta.valid && meta.touched"
            active
            to="/covid-vaccine"
          ></forward-button>
          <forward-button v-else></forward-button>
        </div>
      </VueForm>
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
  mounted() {
    if (localStorage.had_covid) {
      this.had_covid = localStorage.had_covid;
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("situationModule/hadCovid", this.had_covid);
    },
  },
};
</script>
