<template>
  <the-wrapper>
    <the-header page="2"></the-header>
    <section>
      <VueForm @submit="onSubmit" v-slot="{ meta }">
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
          <forward-button></forward-button>
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
  mounted() {},
  methods: {
    onSubmit() {},
  },
};
</script>
