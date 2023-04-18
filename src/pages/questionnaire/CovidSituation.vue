<template>
  <the-wrapper>
    <the-header page="2"></the-header>
    <section>
      <VueForm @submit="onSubmit" v-slot="{ meta, values }">
        <div class="flex justify-between">
          <div class="min-w-[35%] pt-[42px]">
            <h2 class="text-[22px] font-bold">Have you had Covid-19?*</h2>
            <div class="pl-5 flex items-center pb-[8px] pt-[11px]">
              <Field
                name="had_covid"
                type="radio"
                value="yes"
                rules="required"
                v-model="had_covid"
                class="accent-[#232323] w-[23px] h-[23px]"
              />
              <label class="text-[20px] pl-[19px]">Yes</label>
            </div>
            <div class="pl-5 flex items-center pb-[8px]">
              <Field
                name="had_covid"
                type="radio"
                value="no"
                v-model="had_covid"
                class="accent-[#232323] w-[23px] h-[23px]"
              />
              <label class="text-[20px] pl-[19px]">No</label>
            </div>
            <div class="pl-5 flex items-center pb-[8px]">
              <Field
                name="had_covid"
                type="radio"
                value="have_right_now"
                v-model="had_covid"
                class="accent-[#232323] w-[23px] h-[23px]"
              />
              <label class="text-[20px] pl-[19px]">I have it now</label>
            </div>
            <ErrorMessage
              name="had_covid"
              class="text-[#F15524] text-base pt-[5px] pl-5"
            />
            <div v-if="values.had_covid === 'yes'" class="pt-[46px]">
              <h2 class="text-[22px] font-bold">
                Have you had an antibody test?*
              </h2>
              <div class="pl-5 flex items-center pb-[8px] pt-[11px]">
                <Field
                  name="antibody_test"
                  type="radio"
                  value="true"
                  rules="required"
                  v-model="antibody_test"
                  class="accent-[#232323] w-[23px] h-[23px]"
                />
                <label class="text-[20px] pl-[19px]">Yes</label>
              </div>
              <div class="pl-5 flex items-center">
                <Field
                  name="antibody_test"
                  type="radio"
                  value="false"
                  v-model="antibody_test"
                  class="accent-[#232323] w-[23px] h-[23px]"
                />
                <label class="text-[20px] pl-[19px]">No</label>
              </div>
              <ErrorMessage
                name="antibody_test"
                class="text-[#F15524] text-base pt-[5px] pl-5"
              />
            </div>
            <div class="pt-[47px]">
              <div v-if="values.antibody_test === 'true'">
                <h2 class="text-[22px] font-bold max-w-[596px] pb-[29px]">
                  If you remember, please indicate the approximate date of the test and
                  number of antibodies*
                </h2>
                <div class="pl-5 flex flex-col pb-[47px]">
                  <Field
                    name="test_date"
                    type="text"
                    placeholder="date"
                    onfocus="(this.type='date')"
                    class="placeholder:text-[#232323] bg-transparent border-[0.8px] border-[#232323] px-5 py-[9px] text-lg max-w-[513px]"
                    v-model="test_date"
                  />
                </div>
                <div class="pl-5 flex flex-col pb-[47px]">
                  <Field
                    name="antibodies_number"
                    type="number"
                    placeholder="number of antibodies"
                    class="placeholder:text-[#232323] bg-transparent border-[0.8px] border-[#232323] px-5 py-[9px] text-lg max-w-[513px]"
                    v-model.number="antibodies_number"
                  />
                </div>
              </div>
              <div v-if="values.antibody_test === 'false'">
                <h2 class="text-[22px] font-bold max-w-[596px] pb-[29px]">
                  Indicate the approximate period (day/month/year) when you had 
                  Covid-19*
                </h2>
                <div class="pl-5 flex flex-col pb-[47px]">
                  <Field
                    name="covid_sickness_date"
                    type="text"
                    placeholder="dd/mm/yy"
                    onfocus="(this.type='date')"
                    rules="required"
                    class="placeholder:text-[#232323] bg-transparent border-[0.8px] border-[#232323] px-5 py-[9px] text-lg max-w-[513px]"
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
          <div class="hidden lg:relative lg:block">
            <img src="@/assets/images/vaccinate2.png" class="relative z-10 lg:w-[540px] 2xl:w-[797px]" />
            <svg
              width="229"
              height="229"
              viewBox="0 0 229 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="animate absolute w-[150px] top-[100px] left-[30px]  2xl:top-[210px] 2xl:left-[40px] 2xl:w-[229px]"

            >
              <circle cx="114.5" cy="114.5" r="114.5" fill="#DD3939" />
            </svg>
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
      if (this.had_covid === "yes") {
        this.$store.dispatch(
          "situationModule/hadAntibodyTest",
          this.antibody_test
        );
      }
      this.$store.dispatch("situationModule/testDate", this.test_date);
      this.$store.dispatch(
        "situationModule/antibodiesNumber",
        this.antibodies_number
      );
      if (this.antibody_test === "false") {
        this.$store.dispatch(
          "situationModule/covidSickness",
          new Date(this.covid_sickness_date).toLocaleDateString("en-GB")
        );
      }
    },
  },
};
</script>

<style scoped>
.animate {
  animation: in-out 0.8s backwards;
}

@keyframes in-out {
  0% {
    position: absolute;
    top: 200px;
    right: 40px;
  }

  100% {
    transform: translateX(0);
  }
}
</style>
