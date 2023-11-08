<template>
  <div class="bg-neutral rounded-md shadow-sm">
    <div class="sm:flex block border-b border-base-200">
      <div class="flex-shrink border-r border-base-200 flex justify-center align-middle items-center">
        <div class="w-36 rounded-full outline-1 p-5">
          <img :src="profile.profilePicture" alt="profile-picture" class="shadow-md rounded-full" />
        </div>
      </div>
      <div class="flex-2 w-full p-5">
        <div class="flex justify-between items-center">
          <p class="text-lg">{{ `${profile.firstname} ${profile.middlename} ${profile.lastname}` }}</p>
          <icon icon="fa-solid fa-pencil" class="text-right w-4 h-4 mr-3 opacity-40" />
        </div>
        <p class="text-sm opacity-70 font-semibold my-3">{{ profile.professionalProfile.profession }}</p>
        <div class="flex items-center mt-2">
          <icon icon="fa-solid fa-graduation-cap" class="text-right w-4 h-4 mx-2 opacity-70" />
          <p class="text-sm opacity-70">{{ profile.professionalProfile.educationalAttainment }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 w-full">
          <div class="flex items-center mt-4">
            <icon icon="fa-solid fa-briefcase" class="text-right w-4 h-4 mx-2 opacity-70" />
            <p class="text-sm opacity-70">{{ profile.professionalProfile.numberOfExperience }} Years</p>
          </div>
          <div class="flex items-center mt-4">
            <icon icon="fa-regular fa-calendar-check" class="text-right w-4 h-4 mx-2 opacity-70" />
            <p class="text-sm opacity-70">{{ profile.professionalProfile.workStart }}</p>
          </div>
          <div class="flex items-center mt-4">
            <icon icon="fa-solid fa-circle-dollar-to-slot" class="text-right w-4 h-4 mx-2 opacity-70" />
            <p class="text-sm opacity-70 text-success">{{
              `Php ${new Intl.NumberFormat('en-IN', {
                maximumSignificantDigits: 3
              }).format(profile.professionalProfile.preferredSalary)}`
            }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="p-5 border-b border-base-200 py-10">
      <div class="flex justify-between items-center">
        <p class="mb-3 font-semibold text-lg">General Details</p>
        <icon icon="fa-solid fa-pencil" class="text-right w-4 h-4 mr-3 opacity-40" />
      </div>

      <div class="grid grid-cols-3 gap-7">

        <div class="text-xs opacity-70">Date of Birth</div>
        <div class="col-span-2 text-sm">{{ profile.generalDetails.birthday ?
          formatDateToCustomString(profile.generalDetails.birthday) : '-' }}</div>

        <div class="text-xs opacity-70">Gender</div>
        <div class="col-span-2 text-sm">{{ profile.generalDetails.gender || '-' }}</div>

        <div class="text-xs opacity-70">Civil Status</div>
        <div class="col-span-2 text-sm">{{ profile.generalDetails.civilStatus || '-' }}</div>

        <div class="text-xs opacity-70">Nationality</div>
        <div class="col-span-2 text-sm">{{ profile.generalDetails.nationality || '-' }}</div>
      </div>
    </div>
    <div class="p-5 border-b border-base-200 py-10">

      <div class="flex justify-between items-center">
        <p class="mb-3 font-semibold text-lg">Professional Status</p>
        <icon icon="fa-solid fa-pencil" class="text-right w-4 h-4 mr-3 opacity-40" />
      </div>


      <div class="grid grid-cols-3 gap-7">
        <div class="text-xs opacity-70">Recent Job Title</div>
        <div class="col-span-2 text-sm">{{ profile.professionalStatus.recentJobTitle || '-' }}</div>

        <div class="text-xs opacity-70">Interview Availability</div>
        <div class="col-span-2 text-sm">{{ profile.professionalStatus.interviewAvailability || '-' }}</div>

        <div class="text-xs opacity-70">Current Monthly Salary (Gross)</div>
        <div class="col-span-2 text-sm text-success" v-if="profile.professionalStatus.currentMonthlySalaryGross">
          {{ `Php ${new Intl.NumberFormat('en-IN', {
            maximumSignificantDigits: 3
          }).format(profile.professionalProfile.preferredSalary)}` }}
        </div>
        <div class="col-span-2 text-sm" v-else> - </div>

        <div class="text-xs opacity-70">Allowance (Non-Taxable)</div>
        <div class="col-span-2 text-sm">{{ profile.professionalStatus.allowanceNonTaxable || '-' }}</div>

        <div class="text-xs opacity-70">Pre-employment Leaves</div>
        <div class="col-span-2 text-sm">
          <div v-for="(value, index) in profile.professionalStatus.preEmploymentLeaves" :key="index">
            {{ value.message }} - <span class="opacity-70">{{ formatDateToCustomString(value.date) }}</span>
          </div>
        </div>

        <div class="text-xs opacity-70">Where can you work?</div>
        <div class="col-span-2 text-sm">
          <span
            v-if="profile.professionalStatus.whereCanYouWork.home && profile.professionalStatus.whereCanYouWork.office">
            Office and Home
          </span>
          <span v-else-if="profile.professionalStatus.whereCanYouWork.home">
            Home
          </span>
          <span
            v-else-if="profile.professionalStatus.whereCanYouWork.home && profile.professionalStatus.whereCanYouWork.office">
            Office
          </span>
          <span v-else> - </span>
        </div>



        <div class="text-xs opacity-70">Estimate Travel Time to Office</div>
        <div class="col-span-2 text-sm">{{ profile.professionalStatus.estimateTravelTimeToOffice || '-' }}</div>

        <div class="text-xs opacity-70">Connection Type</div>
        <div class="col-span-2 text-sm">{{ profile.professionalStatus.connectionType || '-' }}</div>

        <div class="text-xs opacity-70">Website / Portfolio</div>
        <div class="col-span-2 text-sm">{{ profile.professionalStatus.portfolio || '-' }}</div>

      </div>
    </div>
    <div class="p-5 border-b border-base-200 py-10">
      <div class="flex justify-between items-center">
        <p class="mb-3 font-semibold text-lg">Preferences</p>
        <icon icon="fa-solid fa-pencil" class="text-right w-4 h-4 mr-3 opacity-40" />
      </div>

      <div class="grid grid-cols-3 gap-7">

        <div class="text-xs opacity-70">Day Shift</div>
        <div class="col-span-2 text-sm">{{ profile.preferences.dayShift || '-' }}</div>

        <div class="text-xs opacity-70">Mid Shift</div>
        <div class="col-span-2 text-sm">{{ profile.preferences.midShift || '-' }}</div>

        <div class="text-xs opacity-70">Night Shift</div>
        <div class="col-span-2 text-sm">{{ profile.preferences.nightShift || '-' }}</div>

        <div class="text-xs opacity-70">Englosh Only Policy (EOP)</div>
        <div class="col-span-2 text-sm">{{ profile.preferences.englishOnlyPolicy || '-' }}</div>

        <div class="text-xs opacity-70">Where did you hear us?</div>
        <div class="col-span-2 text-sm">{{ profile.preferences.recommendation || '-' }}</div>

        <div class="text-xs opacity-70">Marketing Permission</div>
        <div class="col-span-2 text-sm">{{ profile.preferences.marketingPermission || '-' }}</div>

        <div class="text-xs opacity-70">Referral</div>
        <div class="col-span-2 text-sm">{{ profile.preferences.referral || '-' }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { profile } = useProfileStore()

function formatDateToCustomString(date: Date) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const day = date.getDate().toString().padStart(2, '0');
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day}, ${month} ${year}`;
}
</script>