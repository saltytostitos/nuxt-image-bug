<script setup lang="ts">
console.log('IMPORT META', import.meta)
</script>
<template>
  <UContainer class="mt-20 space-y-6">
    <ul>
      <li>Nuxt Build</li>
      <li>Prerender Routes ('/')</li>
      <li>SSR: on</li>
      <li>nuxt generate not used.</li>
      <li>No images generated on build, or failure when applying a provider.</li>
    </ul>
    <div>
      <h2>Original Image</h2>
      <img src="/pic.png" alt="Image Here" />
    </div>
    <div>
      <h2>NuxtPicture Image quality 1 size 250px</h2>
      <NuxtPicture src="/pic.png" alt="Image Here" quality="1" densities="x1" sizes="250px" />
    </div>
    <div>
      <h2>NuxtPicture added provider</h2>
      <NuxtPicture src="/pic.png" alt="Image Here" quality="1" densities="x1" sizes="250px" />
    </div>
  </UContainer>
</template>

<style>
h2 {
  font-size: 1.4em;
  font-weight: 800;
}

img {
  border: 1px solid var(--ui-primary);
  width: 1200px;
  height: 675px;
}
</style>