<template>
  <div>
    <div class="w-full flex justify-center mt-10 mb-24">
      <div class="w-full max-w-7xl flex mt-16">
        <div class="bg-base-100 px-10 w-full">
          <slot name="body" />
        </div>
      </div>
    </div>
    <div class="absolute top-0 left-0 w-full">
      <slot name="header" />
    </div>
  </div>
</template>
