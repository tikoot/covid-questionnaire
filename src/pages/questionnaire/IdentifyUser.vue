<template>
  <the-wrapper>
    <the-header page="1"></the-header>
    <section>
      <VueForm @submit.prevent="onSubmit" v-slot="{ meta }">
        <div class="flex justify-between">
          <div class="min-w-[35%] pt-[42px]">
            <div class="flex flex-col pb-[47px]">
              <label for="username" class="text-[22px] font-bold pb-2 mb-[1px]"
                >Name*</label
              >
              <Field
                name="username"
                rules="required|min:2|max:255"
                class="bg-transparent border-[0.8px] border-[#232323] px-5 py-[9px] text-lg"
                v-model.trim="first_name"
              />
              <ErrorMessage
                name="username"
                class="text-[#F15524] text-base pt-[5px] pl-5"
              />
            </div>
            <div class="flex flex-col pb-[47px]">
              <label for="lastname" class="text-[22px] font-bold pb-2 mb-[1px]"
                >Lastname*</label
              >
              <Field
                name="lastname"
                type="lastname"
                rules="required|min:2|max:255"
                class="bg-transparent border-[0.8px] border-[#232323] px-5 py-[9px] text-lg"
                v-model.trim="last_name"
              />
              <ErrorMessage
                name="lastname"
                class="text-[#F15524] text-base pt-[5px] pl-5"
              />
            </div>

            <div class="flex flex-col pb-[47px]">
              <label for="email" class="text-[22px] font-bold pb-2 mb-[1px]"
                >Email*</label
              >
              <Field
                name="email"
                rules="required|email|redberry_email"
                class="bg-transparent border-[0.8px] border-[#232323] px-5 py-[9px] text-lg"
                v-model.trim="email"
              />
              <ErrorMessage
                name="email"
                class="text-[#F15524] text-base pt-[5px] pl-5"
              />
            </div>
            <div class="pt-16">
              <div
                class="border-t-[0.8px] border-[#000000] max-w-[237px] pb-5"
              ></div>
              <p class="text-[#626262] max-w-[365px]">
                Fields marked with * are mandatory
              </p>
            </div>
          </div>

          <div class="hidden lg:block lg:-mt-14 lg:relative ">
            <img src="@/assets/images/scan2.png" class="z-10 relative lg:w-[640px] 2xl:w-full" />
            <svg
              width="622"
              height="75"
              viewBox="0 0 622 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="animate absolute  lg:top-[150px] 2xl:top-[210px] w-[80%] left-[80px]"
            >
              <rect width="622" height="75" fill="#D6D16E"></rect>
            </svg>
          </div>
        </div>
        <div class="flex justify-center m-auto">
          <forward-button
            @click="onSubmit"
            v-if="meta.valid && meta.touched"
            active
            to="/covid-situation"
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
    if (localStorage.first_name) {
      this.first_name = localStorage.first_name;
    }
    if (localStorage.last_name) {
      this.last_name = localStorage.last_name;
    }
    if (localStorage.email) {
      this.email = localStorage.email;
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("userModule/firstName", this.first_name);
      this.$store.dispatch("userModule/lastName", this.last_name);
      this.$store.dispatch("userModule/email", this.email);
    },
  },
};
</script>

<style scoped>
.animate {
  animation: in-out 1s forwards;
}

@keyframes in-out {
  0% {
    transform: translateX(-10%);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
