<template>
  <div class="p-5">
    <div class="flex justify-between">
      <p class="font-semibold opacity-70">Profile Completion</p>
      <p class="text-xs" :class="{
        'text-warning': progress >= 0.50 && progress < .99,
        'text-error': progress < 0.50,
        'text-success': progress >= 0.99
      }"> {{ progress * 100 }}%</p>
    </div>
    <progress class="progress w-full h-2 bg-base-200" :value="progress" :max="1" :class="{
      'progress-warning': progress >= 0.50 && progress < 0.99,
      'progress-error': progress < 0.50,
      'progress-success': progress >= 0.99
    }"></progress>

    <p :class="{
      'text-warning': progress >= 0.50 && progress < .99,
      'text-error': progress < 0.50,
      'text-success': progress >= 0.99
    }" class="w-full text-center font-bold p-3">
      {{ progress > 0.50 && progress < 0.99 ? `Almost Done ${profile.firstname}!` : progress <= 0.50 ? `Complete your
        profile ${profile.firstname}!` : `Well done, ${profile.firstname}!` }} </p>
        <div class="w-full flex justify-center">
          <div class="w-24 rounded-full p-2">
            <img src="/images/badge-logo.png" alt="logo" />
          </div>
        </div>
        <p class="text-xs opacity-70">
          You have one of the strongest professional profile in our talent pool. Expect progress on your application at
          any
          time soon.
        </p>
  </div>
</template>

<script setup lang="ts">
const { profile } = useProfileStore()
const progress = ref(computed(() => profile.profileStatus.profileCompletion))
</script>