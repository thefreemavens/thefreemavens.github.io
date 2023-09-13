<template>
  <main class="container mx-auto">

    <AppSection>
      <template #title>
        Lessons
      </template>
      <template #desc>
        As a whole, the body of knowledge presented here has the potential to save humanity from our
        current state of slavery. 
      </template>
    </AppSection>

    <section class="mx-4">
      <ul class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap:8 xl:gap-9">

      </ul>
    </section>
  </main>
</template>

<script setup>
// const baseUrl = './img/market/'
const lessons = ref([
  {
    id: 'TRNL-L00',
    title: 'Black Notebbok',
    slug: 'notebook',  
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

