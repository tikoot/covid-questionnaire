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
                  value="true"
                  rules="required"
                  v-model="antibody_test"
                />
                <label class="text-[20px] pl-[19px]">კი</label>
              </div>
              <div class="pl-5">
                <Field
                  name="antibody_test"
                  type="radio"
                  value="false"
                  v-model="antibody_test"
                />
                <label class="text-[20px] pl-[19px]">არა</label>
              </div>
              <ErrorMessage
                name="antibody_test"
                class="text-[#F15524] text-base pt-[5px] pl-5"
              />
            </div>
            <div class="pt-[47px]">
              <div v-if="values.antibody_test === 'true'">
                <h2 class="text-[22px] font-bold max-w-[596px] pb-[29px]">
                  თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და
                  ანტისხეულების რაოდენობა*
                </h2>
                <div class="pl-5 flex flex-col pb-[47px]">
                  <Field
                    name="test_date"
                    type="text"
                    placeholder="რიცხვი"
                    class="placeholder:text-[#232323] bg-transparent border-[0.8px] border-[#232323] px-5 py-[9px] text-lg max-w-[513px]"
                    v-model="test_date"
                  />
                </div>
                <div class="pl-5 flex flex-col pb-[47px]">
                  <Field
                    name="antibodies_number"
                    type="number"
                    placeholder="ანტისხეულების რაოდენობა"
                    class="placeholder:text-[#232323] bg-transparent border-[0.8px] border-[#232323] px-5 py-[9px] text-lg max-w-[513px]"
                    v-model.number="antibodies_number"
                  />
                </div>
              </div>
              <div v-if="values.antibody_test === 'false'">
                <h2 class="text-[22px] font-bold max-w-[596px] pb-[29px]">
                  მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა
                  Covid-19*
                </h2>
                <div class="pl-5 flex flex-col pb-[47px]">
                  <Field
                    name="covid_sickness_date"
                    type="date"
                    rules="required"
                    class="bg-transparent border-[0.8px] border-[#232323] px-5 py-[9px] text-lg max-w-[513px]"
                    v-model="covid_sickness_date"
                  />
                  <ErrorMessage
                    name="covid_sickness_date"
                    class="text-[#F15524] text-base pt-[5px] pl-5"
                  />
                </div>
              </div>
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
    if (localStorage.had_antibody_test) {
      this.antibody_test = localStorage.had_antibody_test;
    }
    if (localStorage.test_date) {
      this.test_date = localStorage.test_date;
    }
    if (localStorage.antibodies_number) {
      this.antibodies_number = localStorage.antibodies_number;
    }
    if (localStorage.covid_sickness_date) {
      this.covid_sickness_date = localStorage.covid_sickness_date;
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("situationModule/hadCovid", this.had_covid);
      this.$store.dispatch(
        "situationModule/hadAntibodyTest",
        this.antibody_test
      );
      this.$store.dispatch("situationModule/testDate", this.test_date);
      this.$store.dispatch(
        "situationModule/antibodiesNumber",
        this.antibodies_number
      );
      this.$store.dispatch(
        "situationModule/covidSickness",
        this.covid_sickness_date
      );
    },
  },
};
</script>
