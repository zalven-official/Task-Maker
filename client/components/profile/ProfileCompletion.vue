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
    <div class="collapse bg-neutral collapse-arrow">
      <input type="checkbox" name="my-accordion-1" checked />
      <div class="collapse-title m-0 text-xs opacity-70">
        Hide Recommendations
      </div>
      <div class="collapse-content">
        <p class="text-xs opacity-70">Fill-up the following items to strengthen your profile. This can help us matching
          your profile
          and increase
          your chances of landing into desired role</p>
        <ul class="list-disc text-xs opacity-70 mt-5 list-outside">
          <li class="flex items-center mt-2">
            <icon icon="fa-regular fa-circle" class="text-right w-3 h-3 mr-3" />
            <p>Share <span class="text-primary">Date of Birth</span></p>
          </li>
          <li class="flex items-center mt-2">
            <icon icon="fa-regular fa-circle" class="text-right w-3 h-3 mr-3" />
            <p>Specifiy <span class="text-primary">Current Monthly Salary</span></p>
          </li>
          <li class="flex items-center mt-2">
            <icon icon="fa-regular fa-circle" class="text-right w-3 h-3 mr-3" />
            <p>Add one (1) <span class="text-primary">Character Reference</span></p>
          </li>
          <li class="flex items-center mt-2">
            <icon icon="fa-regular fa-circle" class="text-right w-3 h-3 mr-3" />
            <p>Add <span class="text-primary">Current Address</span></p>
          </li>
          <li class="flex items-center mt-2">
            <icon icon="fa-regular fa-circle" class="text-right w-3 h-3 mr-3" />
            <p>Add atleast five (5) items in <span class="text-primary">Other Skills</span></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const { profile } = useProfileStore()
const progress = ref(computed(() => profile.profileStatus.professionalProfileCompletion))
</script>