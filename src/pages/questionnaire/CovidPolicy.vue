<template>
  <the-wrapper>
    <the-header page="4"></the-header>
    <section>
      <VueForm @submit="submitForm">
        <div class="flex justify-between">
          <div class="w-[687px] pt-[42px] overflow-y-auto max-h-screen h-full">
            <div class="max-w-[622px] text-[22px] pb-[44px]">
              <p class="pb-5">
                რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია.
                გარემო, რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და
                ყოფილა წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი,
                ბევრისთვის კი — ჩვენთან გადმოსვლის.
              </p>
              <p>
                პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
                ყოველდღიური კომუნიკაციაც გაიშვიათდა.
              </p>
            </div>
            <h2 class="text-[22px] font-bold max-w-[622px]">
              რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ
              შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*
            </h2>
            <div class="pl-5 flex items-center pb-[8px] pt-[17px]">
              <Field
                name="non_formal_meetings"
                type="radio"
                value="twice_a_week"
                rules="required"
                v-model="non_formal_meetings"
                class="accent-[#232323] w-[23px] h-[23px]"
              />
              <label class="text-[20px] pl-[19px]">კვირაში ორჯერ</label>
            </div>
            <div class="pl-5 flex items-center pb-[8px] pt-[11px]">
              <Field
                name="non_formal_meetings"
                type="radio"
                value="once_a_week"
                v-model="non_formal_meetings"
                class="accent-[#232323] w-[23px] h-[23px]"
              />
              <label class="text-[20px] pl-[19px]">კვირაში ერთხელ</label>
            </div>
            <div class="pl-5 flex items-center pb-[8px] pt-[11px]">
              <Field
                name="non_formal_meetings"
                type="radio"
                value="once_in_a_two_weeks"
                v-model="non_formal_meetings"
                class="accent-[#232323] w-[23px] h-[23px]"
              />
              <label class="text-[20px] pl-[19px]">ორ კვირაში ერთხელ</label>
            </div>
            <div class="pl-5 flex items-center pb-[8px] pt-[11px]">
              <Field
                name="non_formal_meetings"
                type="radio"
                value="once_in_a_month"
                v-model="non_formal_meetings"
                class="accent-[#232323] w-[23px] h-[23px]"
              />
              <label class="text-[20px] pl-[19px]">თვეში ერთხელ</label>
            </div>
            <ErrorMessage
              name="non_formal_meetings"
              class="text-[#F15524] text-base pt-[5px] pl-5"
            />
            <h2 class="text-[22px] font-bold max-w-[615px] pt-[34px]">
              კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
            </h2>
            <div class="pl-5 flex items-center pb-[8px] pt-[11px]">
              <Field
                name="number_of_days_from_office"
                type="radio"
                value="0"
                rules="required"
                v-model="number_of_days_from_office"
                class="accent-[#232323] w-[23px] h-[23px]"
              />
              <label class="text-[20px] pl-[19px]">0</label>
            </div>
            <div class="pl-5 flex items-center pb-[8px] pt-[11px]">
              <Field
                name="number_of_days_from_office"
                type="radio"
                value="1"
                v-model="number_of_days_from_office"
                class="accent-[#232323] w-[23px] h-[23px]"
              />
              <label class="text-[20px] pl-[19px]">1</label>
            </div>
            <div class="pl-5 flex items-center pb-[8px] pt-[11px]">
              <Field
                name="number_of_days_from_office"
                type="radio"
                value="2"
                v-model="number_of_days_from_office"
                class="accent-[#232323] w-[23px] h-[23px]"
              />
              <label class="text-[20px] pl-[19px]">2</label>
            </div>
            <div class="pl-5 flex items-center pb-[8px] pt-[11px]">
              <Field
                name="number_of_days_from_office"
                type="radio"
                value="3"
                v-model="number_of_days_from_office"
                class="accent-[#232323] w-[23px] h-[23px]"
              />
              <label class="text-[20px] pl-[19px]">3</label>
            </div>
            <div class="pl-5 flex items-center pb-[8px] pt-[11px]">
              <Field
                name="number_of_days_from_office"
                type="radio"
                value="4"
                v-model="number_of_days_from_office"
                class="accent-[#232323] w-[23px] h-[23px]"
              />
              <label class="text-[20px] pl-[19px]">4</label>
            </div>
            <div class="pl-5 flex items-center pb-[8px] pt-[11px]">
              <Field
                name="number_of_days_from_office"
                type="radio"
                value="5"
                v-model="number_of_days_from_office"
                class="accent-[#232323] w-[23px] h-[23px]"
              />
              <label class="text-[20px] pl-[19px]">5</label>
            </div>
            <ErrorMessage
              name="number_of_days_from_office"
              class="text-[#F15524] text-base pt-[5px] pl-5"
            />
            <br />
            <label
              class="text-[22px] font-bold max-w-[615px] pt-[34px]"
              for="live_meetings"
            >
              რას ფიქრობ ფიზიკურ შეკრებებზე?
            </label>
            <div>
              <Field
                as="textarea"
                name="live_meetings"
                v-model="live_meetings"
                class="w-[622px] h-[182px] bg-transparent mt-[20px] mb-[47px] border-[#232323] border-[0.8px]"
              ></Field>
            </div>
            <label class="text-[22px] font-bold max-w-[615px]" for="opinion">
              რას ფიქრობ არსებულ გარემოზე: <br />
              რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?
            </label>
            <div>
              <Field
                as="textarea"
                name="opinion"
                v-model="opinion"
                class="w-[622px] h-[182px] bg-transparent mt-[20px] border-[#232323] border-[0.8px]"
              ></Field>
            </div>
            <div class="flex justify-end items-end pt-[54px] w-[622px]">
              <submit-button></submit-button>
            </div>

            <div class="flex pt-[91px] justify-end">
              <back-button to="/covid-vaccine"></back-button>
            </div>
          </div>

          <div class="relative">
            <img
              src="@/assets/images/bike2 1.png"
              class="relative z-10"
              alt=""
            />
            <svg
              width="196"
              height="173"
              viewBox="0 0 196 173"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="animate absolute top-[64px] left-[96px]"
            >
              <path
                d="M48.5005 12C75.7005 9.6 94.5005 28.3333 100.501 38C110.501 1.5 143.5 0.5 161.5 0.5C179.5 0.5 203.5 22 192.5 69C183.7 106.6 144.5 153.667 126 172.5C87.6668 153.5 9.30051 107.3 2.50051 74.5C-5.99949 33.5 14.5005 15 48.5005 12Z"
                fill="#F39494"
              />
            </svg>
          </div>
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
    if (localStorage.non_formal_meetings) {
      this.non_formal_meetings = localStorage.non_formal_meetings;
    }
    if (localStorage.number_of_days_from_office) {
      this.number_of_days_from_office = localStorage.number_of_days_from_office;
    }
    if (localStorage.what_about_meetings_in_live) {
      this.live_meetings = localStorage.what_about_meetings_in_live;
    }
    if (localStorage.tell_us_your_opinion_about_us) {
      this.opinion = localStorage.tell_us_your_opinion_about_us;
    }
  },
  methods: {
    submitForm() {
      this.$store.dispatch(
        "policyModule/nonFormalMeetings",
        this.non_formal_meetings
      );
      this.$store.dispatch(
        "policyModule/officeDays",
        this.number_of_days_from_office
      );
      this.$store.dispatch("policyModule/liveMeetings", this.live_meetings);
      this.$store.dispatch("policyModule/userOpinion", this.opinion);
      this.$router.push({ path: "/thanks" });
    },
  },
};
</script>

<style scoped>
.animate {
  animation: in-out 0.8s ease;
}

@keyframes in-out {
  0% {
    position: absolute;
    top: 26px;
    left: 32px;
  }

  100% {
    transform: translateX(0);
  }
}
</style>
