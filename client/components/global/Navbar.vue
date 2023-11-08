<template>
  <nav class="navbar bg-neutral shadow-sm">
    <div class="navbar-start sm:flex hidden">
      <slot name="start" />
    </div>
    <div class="navbar-center hidden xl:flex w-full max-w-md">
      <slot name=" center" />
    </div>
    <div class="navbar-end md:w-1/2 xl:5/16 w-full">
      <div class=" block w-full lg:mr-10 mr-0 ">
        <slot name="center" />
      </div>
      <slot name="end" />
    </div>
  </nav>
</template>