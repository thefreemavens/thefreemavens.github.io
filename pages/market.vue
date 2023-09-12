<template>
  <main class="container mx-auto">

    <AppSection>
      <template #title>
        Marketspace
      </template>
      <template #desc>
        A space for products and services that help promotes the body of knowledge of Natural Law, objective morality, absolute freedom and selfless love.
        <!-- Your fruits of creativity and productivity shared with people that understand how true markets can and should be. -->
      </template>
    </AppSection>

    <section class="mx-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="(product, index) in products" :key="index" class="relative">
        <h2 class="font-mono text-xs tracking-wider absolute top-1 right-2">{{ product.id }}</h2>
        <img :src="baseUrl + product.url">
      </div>
    </section>
  </main>
</template>

<script setup>
const baseUrl = './img/market/'
const products = ref([
  {
    id: 'TRNL-P01B',
    title: '',
    slug: '',  
    url: 'tfm-notebook-angle-left-black.png.webp'
  },
  {
    id: 'TRNL-P01W',
    title: '',
    slug: '',  
    url: 'tfm-notebook-angle-left-white.png.webp'
  },
  {
    id: 'TRNL-P02B',
    title: '',
    slug: '',  
    url: 'tfm-mousepad-angle-black.png.webp'
  },
  {
    id: 'TRNL-P02W',
    title: '',
    slug: '',  
    url: 'tfm-mousepad-top-black.png.webp'
  },
  // {
  //   title: '',
  //   slug: '',  
  //   url: 'tfm-mousepad-angle-float-black.png.webp'
  // },
  {
    id: 'TRNL-P00B',
    title: '',
    slug: '',  
    url: 'tfm-wristband-double-black-white.png.webp'
  },
  {
    id: 'TRNL-P00W',
    title: '',
    slug: '',  
    url: 'tfm-wristband-trio-black-white-gray-float.png.webp'
  },
  {
    id: 'TRNL-P03B',
    title: 'Hoodie',
    slug: 'hoodie',
    url: 'tfm-hoodie-black-nl-new-black.png.webp'
  },
  {
    id: 'TRNL-P03W',
    title: '',
    slug: '',  
    url: 'tfm-hoodie-white-nl-new-black.png.webp'
  },
  {
    id: 'TRNL-P04B',
    title: '',
    slug: '',  
    url: 'tfm-tshirt-black-new-black.png.webp'
  },
  {
    id: 'TRNL-P04W',
    title: '',
    slug: '',  
    url: 'tfm-tshirt-white-new-black.png.webp'
  },
  // {
  //   title: '',
  //   slug: '',  
  //   url: 'tfm-wristband-mucho.png.webp'
  // },
  // {
  //   title: '',
  //   slug: '',  
  //   url: 'tfm-wristband-single-black-float.png.webp'
  // },
  // {
  //   title: '',
  //   slug: '',  
  //   url: 'tfm-wristband-single-black.png.webp'
  // },
  // {
  //   title: '',
  //   slug: '',  
  //   url: 'tfm-wristband-single-white-float.png.webp'
  // },
  // {
  //   title: '',
  //   slug: '',  
  //   url: 'tfm-wristband-trio-black-white-white.png.webp'
  // },
])
</script>

