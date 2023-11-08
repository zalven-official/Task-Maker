<template>
  <div class="grid grid-cols-1 divide-y">
    <div class="p-3">
      <div class="flex justify-end align-middle sm:h-0 h-4">
        <input type="checkbox" class="checkbox checkbox-xs rounded-sm mx-3" />
        <span class="label-text text-xs opacity-70">Don't remind me again</span>
        <icon icon="fa-solid fa-xmark" class="text-right w-4 h-4 text-error mx-3" />
      </div>
      <h1 class="text-xl">Welcome, {{ profile.firstname }}!</h1>
      <p class="text-xs font-semibold mt-3">
        <span class="text-success"> You are almost done!</span>
        <span class="opacity-50"> To further strengthen your profile, it is highly recommended for you to complete 4
          sections of your application.</span>
      </p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-1 py-5 gap-0 w-full">
      <ProfileHeaderProgressItem icon="fa-regular fa-user" :progress="profile.profileStatus.applicationProfile"
        text="Applicant Profile" />
      <ProfileHeaderProgressItem icon="fa-regular fa-file-lines" :progress="profile.profileStatus.resume"
        text="Resume / CV" />
      <ProfileHeaderProgressItem icon="fa-solid fa-chart-column" :progress="profile.profileStatus.assessmentScore"
        text="Assessment Score" />
      <ProfileHeaderProgressItem icon="fa-solid fa-display" :progress="profile.profileStatus.videoIntroduction"
        text="Video Introduction" />
    </div>

  </div>
</template>

<script setup lang="ts">
const { profile } = useProfileStore()
</script>