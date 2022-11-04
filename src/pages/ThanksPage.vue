<template>
  <div class="h-[100vh] bg-[#232323] flex flex-col justify-center items-center">
    <div class="mr-56">
      <img class="animate" src="@/assets/images/star1.png" alt="big star" />
    </div>
    <h1 class="text-white text-[64px] font-bold my-6 relative">
      მ ა დ ლ ო ბ ა
    </h1>
    <div class="ml-56">
      <img class="animate" src="@/assets/images/star.png" alt="small star" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("userModule", ["firstName", "lastName", "emailAddress"]),
    ...mapGetters("situationModule", [
      "hadCovid",
      "hadAntibodyTest",
      "testDate",
      "antibodiesNumber",
      "covidSickness",
    ]),
    ...mapGetters("vaccineModule", ["hadVaccine", "vaccineStage", "waiting"]),
    ...mapGetters("policyModule", [
      "nonFormalMeetings",
      "officeDays",
      "liveMeetings",
      "userOpinion",
    ]),
  },
  mounted() {
    const data = {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.emailAddress,
      had_covid: this.hadCovid,
      had_antibody_test: this.hadAntibodyTest,
      covid_sickness_date: this.covidSickness,
      antibodies: {
        test_date: this.testDate,
        number: this.antibodiesNumber,
      },
      had_vaccine: this.hadVaccine,
      vaccination_stage: this.vaccineStage,
      i_am_waiting: this.waiting,
      non_formal_meetings: this.nonFormalMeetings,
      number_of_days_from_office: this.officeDays,
      what_about_meetings_in_live: this.liveMeetings,
      tell_us_your_opinion_about_us: this.userOpinion,
    };

    Object.keys(data).forEach(function (key) {
      if (
        typeof data[key] === "undefined" ||
        data[key] === null ||
        data[key] === ""
      ) {
        delete data[key];
      }
    });
    let newData = JSON.stringify(data);
    fetch(`https://covid19.devtest.ge/api/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: newData,
    })
      .then((response) =>
        response.ok
          ? console.log("success")
          : console.log("Failed to send request")
      )
      .catch((error) => console.log(error));

    localStorage.clear();
  },
};
</script>
<style scoped>
.animate {
  animation: fade 1s ease;
  animation-delay: 600ms;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
