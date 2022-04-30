<template>
  <div class="flex h-full flex-col justify-start">
    <nav class="border-b-4 border-black p-4 hover:font-extrabold">
      <router-link class="font-mono text-2xl italic" to="/">Home</router-link>
    </nav>
    <router-view class="flex-grow p-4" />
  </div>
</template>
