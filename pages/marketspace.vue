<template>
  <main class="container mx-auto">

    <AppSection>
      <template #title>
        Marketspace
      </template>
      <template #desc>
        A space for us all to buy, sell, trade and offer products and services that help promotes the body of knowledge of Natural Law, 
        objective morality, absolute freedom and selfless love.
        <!-- Your fruits of creativity and productivity shared with people that understand how true markets can and should be. -->
      </template>
    </AppSection>

    <section class="mx-4">
      <ul class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap:8 xl:gap-9">
        <li class="lg:col-start-2 font-mono text-xs px-4 py-2 border">
          NOTE: All products listed are mockups for products which may or may not go into production.
        </li>
        <li v-for="(product, index) in products" :key="index" class="relative overflow-hidden cursor-pointer">
          <h2 class="font-mono text-xs tracking-wider absolute z-10 top-1 right-2">{{ product.id }}</h2>
          <img :src="baseUrl + product.url" class="hover:scale-105 transition-all duration-200 ease-in-out">
          <!-- <span
            class="hover:scale-105 transition-all duration-200 ease-in-out bg-cover"
            :style="{backgroundImage: `url(${baseUrl + product.url})`}"
            /> -->
          </li>
      </ul>
    </section>
  </main>
</template>

<script setup>
const baseUrl = './img/market/'
const products = ref([
  {
    id: 'TRNL-P01B',
    title: 'Black Notebbok',
    slug: 'notebook',  
    url: 'tfm-notebook-angle-left-black.webp'
  },
  {
    id: 'TRNL-P01W',
    title: '',
    slug: '',  
    url: 'tfm-notebook-angle-left-white.webp'
  },
  {
    id: 'TRNL-P02B',
    title: '',
    slug: '',  
    url: 'tfm-mousepad-angle-black.webp'
  },
  {
    id: 'TRNL-P02W',
    title: '',
    slug: '',  
    url: 'tfm-mousepad-top-white.webp'
  },
  // {
  //   title: '',
  //   slug: '',  
  //   url: 'tfm-mousepad-angle-float-black.webp'
  // },
  {
    id: 'TRNL-P00B',
    title: '',
    slug: '',  
    url: 'tfm-wristband-double-black-white.webp'
  },
  {
    id: 'TRNL-P00W',
    title: '',
    slug: '',  
    url: 'tfm-wristband-trio-black-white-gray-float.webp'
  },
  {
    id: 'TRNL-P03B',
    title: 'Hoodie',
    slug: 'hoodie',
    url: 'tfm-hoodie-black-nl-new-black.webp'
  },
  {
    id: 'TRNL-P03W',
    title: '',
    slug: '',  
    url: 'tfm-hoodie-white-nl-new-black.webp'
  },
  {
    id: 'TRNL-P04B',
    title: '',
    slug: '',  
    url: 'tfm-tshirt-black-new-black.webp'
  },
  {
    id: 'TRNL-P04W',
    title: '',
    slug: '',  
    url: 'tfm-tshirt-white-new-black.webp'
  },
  // {
  //   title: '',
  //   slug: '',  
  //   url: 'tfm-wristband-mucho.webp'
  // },
  // {
  //   title: '',
  //   slug: '',  
  //   url: 'tfm-wristband-single-black-float.webp'
  // },
  // {
  //   title: '',
  //   slug: '',  
  //   url: 'tfm-wristband-single-black.webp'
  // },
  // {
  //   title: '',
  //   slug: '',  
  //   url: 'tfm-wristband-single-white-float.webp'
  // },
  // {
  //   title: '',
  //   slug: '',  
  //   url: 'tfm-wristband-trio-black-white-white.webp'
  // },
])
</script>

