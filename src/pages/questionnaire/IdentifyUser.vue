<template>
  <the-wrapper>
    <the-header page="1"></the-header>
    <section>
      <VueForm @submit.prevent="onSubmit" v-slot="{ meta }">
        <div class="flex justify-between">
          <div class="min-w-[35%] pt-[42px]">
            <div class="flex flex-col pb-[47px]">
              <label for="username" class="text-[22px] font-bold pb-2 mb-[1px]"
                >სახელი*</label
              >
              <Field
                name="username"
                rules="required|min_max_name:2,255"
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
                >გვარი*</label
              >
              <Field
                name="lastname"
                type="lastname"
                rules="required|min_max_lastname:2,255"
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
                >მეილი*</label
              >
              <Field
                name="email"
                rules="required|email"
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
                *-ით მონიშნული ველების შევსება სავალდებულოა
              </p>
            </div>
          </div>
          <div class="-m-12">
            <img src="@/assets/images/scan2.png" alt="" />
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
