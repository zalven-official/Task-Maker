<template>
  <NuxtLayout>
    <template #header>
      <ProfileNavbar />
    </template>
    <template #body>
      <ProfileMenubar />
      <div class="bg-base-100 lg:w-9/12 w-full lg:px-0 px-10">
        <div class="mb-48">
          <div class="w-full bg-neutral rounded-md shadow-sm">
            <ProfileHeader />
          </div>
          <div class="w-full block lg:flex mt-3">
            <div class=" rounded-md w-full lg:w-8/12">
              <ProfileDetails />
            </div>
            <div class="w-full lg:w-4/12 lg:ml-3 ml-0">
              <div class="bg-neutral rounded-md shadow-sm h-auto w-full lg:mt-0 mt-3">
                <ProfileVideoIntroduction />
              </div>
              <div class="bg-neutral rounded-md shadow-sm h-auto w-full mt-3">
                <ProfileCompletionMessage />
              </div>
              <div class="bg-neutral rounded-md shadow-sm h-auto w-full mt-3">
                <ProfileCompletion />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>