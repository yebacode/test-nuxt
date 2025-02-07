<script setup>
useHead({
  title: "YÉBA_Portfolio", 
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap",
    },
  ],
});
</script>

<template>
  <div class="h-dvh px-3 pt-4">
    <p class="text-xs w-1/2 md:w-64"><span class="text-gray-600">ABOUT__</span>
        I am a frontend developer based in Paris, FR. Always using technology to create the bests interactive experiences on the web and
    </p>
    <div class="flex flex-col md:flex-row">
      <h1 class="leading-none text-[9rem] md:text-[25rem]">This</h1>
      <h1 class="leading-32 md:leading-none text-[9rem] md:text-[25rem]">__ Is My</h1>
    </div>
    <div>
      <h1 class="leading-none break-words text-[9rem] md:text-[25rem] md:text-center">Portfolio</h1>
      <div>
        <p class="text-xs text-right"><span class="text-gray-600">-YÉBA__</span>
          [verb in lingala]<br/> <span class="italic">Knowledge.</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style>
h1 {
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
}
</style>

