<template>
  <div class="container mx-auto">
    <div class="mx-4">
      <div class="grid grid-cols-12 gap-8">
        <!-- Startbar -->
        <nav class="col-span-12 lg:col-span-3">
          <ContentNavigation :navigation-tree="navigation" />
        </nav>

        <!-- Content -->
        <main class="col-span-12 lg:col-span-7">
          <ContentDoc />
        </main>

        <!-- Endbar -->
        <div class="col-span-12 lg:col-span-1 lg:col-start-12">
          <!-- <ContentTable /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const query = queryContent({
  where: {
    _path: { $contains: 'kb' }
  }
})

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

</script>