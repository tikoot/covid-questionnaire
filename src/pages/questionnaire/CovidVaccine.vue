<template>
  <the-wrapper>
    <the-header page="2"></the-header>
    <section>
      <VueForm @submit="onSubmit" v-slot="{ meta, values }">
        <div class="flex justify-between">
          <div class="min-w-[35%] pt-[42px]">
            <h2 class="text-[22px] font-bold pb-[8px]">უკვე აცრილი ხარ?*</h2>
            <div class="pl-5">
              <Field
                name="had_vaccine"
                type="radio"
                value="true"
                rules="required"
                v-model="had_vaccine"
              />
              <label class="text-[20px] pl-[19px]">კი</label>
            </div>
            <div class="pl-5">
              <Field
                name="had_vaccine"
                type="radio"
                value="false"
                v-model="had_vaccine"
              />
              <label class="text-[20px] pl-[19px]">არა</label>
            </div>
            <ErrorMessage
              name="had_vaccine"
              class="text-[#F15524] text-base pt-[5px] pl-5"
            />
            <div v-if="values.had_vaccine === 'true'" class="pt-[46px]">
              <h2 class="text-[22px] font-bold pb-[8px]">
                აირჩიე რა ეტაპზე ხარ*
              </h2>
              <div class="pl-5 pb-[16px]">
                <Field
                  name="vaccine_stage"
                  type="radio"
                  value="first_dosage_and_registered_on_the_second"
                  rules="required"
                  v-model="vaccine_stage"
                />
                <label class="text-[20px] pl-[19px]"
                  >პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label
                >
              </div>
              <div class="pl-5 pb-[16px]">
                <Field
                  name="vaccine_stage"
                  type="radio"
                  value="fully_vaccinated"
                  v-model="vaccine_stage"
                />
                <label class="text-[20px] pl-[19px]">სრულად აცრილი ვარ</label>
              </div>
              <div class="pl-5">
                <Field
                  name="vaccine_stage"
                  type="radio"
                  value="first_dosage_and_not_registered_yet"
                  v-model="vaccine_stage"
                />
                <label class="text-[20px] pl-[19px]"
                  >პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</label
                >
              </div>
              <ErrorMessage
                name="vaccine_stage"
                class="text-[#F15524] text-base pt-[5px] pl-5"
              />
            </div>
            <div
              v-if="
                values.vaccine_stage === 'first_dosage_and_not_registered_yet'
              "
              class="pt-[39px] pl-[62px] text-xl"
            >
              <p>
                რომ არ გადადო, <br />
                ბარემ ახლავე დარეგისტრირდი <br />
                <a
                  href="https://booking.moh.gov.ge/"
                  target="_blank"
                  class="text-[#1289AE]"
                >
                  https://booking.moh.gov.ge/</a
                >
              </p>
            </div>
            <div v-if="values.had_vaccine === 'false'" class="pt-[46px]">
              <h2 class="text-[22px] font-bold pb-[8px]">რას ელოდები?*</h2>
              <div class="pl-5 pb-[16px]">
                <Field
                  name="i_am_waiting"
                  type="radio"
                  value="registered_and_waiting"
                  rules="required"
                  v-model="i_am_waiting"
                />
                <label class="text-[20px] pl-[19px]"
                  >დარეგისტრირებული ვარ და ველოდები რიცხვს</label
                >
              </div>
              <div class="pl-5 pb-[16px]">
                <Field
                  name="i_am_waiting"
                  type="radio"
                  value="not_planning"
                  v-model="i_am_waiting"
                />
                <label class="text-[20px] pl-[19px]">არ ვგეგმავ</label>
              </div>
              <div class="pl-5">
                <Field
                  name="i_am_waiting"
                  type="radio"
                  value="had_covid_and_planning_to_be_vaccinated"
                  v-model="i_am_waiting"
                />
                <label class="text-[20px] pl-[19px]"
                  >გადატანილი მაქვს და ვგეგმავ აცრას</label
                >
              </div>
              <ErrorMessage
                name="i_am_waiting"
                class="text-[#F15524] text-base pt-[5px] pl-5"
              />
            </div>
            <div
              v-if="
                values.i_am_waiting ===
                'had_covid_and_planning_to_be_vaccinated'
              "
              class="pt-[39px] pl-[62px] text-xl"
            >
              <p>
                ახალი პროტოკოლით კოვიდის გადატანიდან 1 <br />
                თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება. <br />
              </p>
              <p class="pt-5">
                👉 რეგისტრაციის ბმული <br />
                <a
                  href="https://booking.moh.gov.ge/"
                  target="_blank"
                  class="text-[#1289AE]"
                >
                  https://booking.moh.gov.ge/</a
                >
              </p>
            </div>
          </div>

          <div><img src="@/assets/images/doctor2.png" alt="" /></div>
        </div>
        <div class="flex items-center justify-between m-auto max-w-[145px]">
          <back-button to="/covid-situation"></back-button>
          <forward-button
            @click="onSubmit"
            v-if="meta.valid && meta.touched"
            active
            to="/covid-policy"
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
    if (localStorage.had_vaccine) {
      this.had_vaccine = localStorage.had_vaccine;
    }
    if (localStorage.vaccine_stage) {
      this.vaccine_stage = localStorage.vaccination_stage;
    }
    if (localStorage.i_am_waiting) {
      this.i_am_waiting = localStorage.i_am_waiting;
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("vaccineModule/hadVaccine", this.had_vaccine);
      this.$store.dispatch("vaccineModule/vaccineStage", this.vaccine_stage);
      this.$store.dispatch("vaccineModule/waiting", this.i_am_waiting);
    },
  },
};
</script>
