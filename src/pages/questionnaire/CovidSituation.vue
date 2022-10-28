<template>
  <the-wrapper>
    <the-header page="2"></the-header>
    <section>
      <VueForm @submit.prevent="onSubmit">
        <div class="flex justify-between">
          <div class="min-w-[35%] pt-[42px]">form</div>
          <div>
            <img src="@/assets/images/vaccinate2.png" alt="" />
          </div>
        </div>
        <div class="flex items-center justify-between m-auto max-w-[145px]">
          <back-button to="/identify"></back-button>
          <forward-button></forward-button>
        </div>
      </VueForm>
    </section>
  </the-wrapper>
</template>

<script>
export default {};
</script>
