<template>
  <div class="container mx-auto">
    <div class="mx-4">
      <div class="grid grid-cols-10 gap-8">
        <!-- Startbar -->
        <nav class="col-span-10 lg:col-span-2 overflow-y-scroll max-h-[calc(100dvh-50px)] sticky top-[50px]">
          <ContentNavigation :navigation-tree="knowledge" />
          <ContentNavigation :navigation-tree="lessons" />
        </nav>

        <!-- Content -->
        <main class="col-span-10 lg:col-span-6 lg:col-start-3">
          <ContentDoc />
        </main>

        <!-- Endbar -->
        <div class="col-span-10 lg:col-span-2 lg:col-start-9">
          hi
          <!-- <ContentTable /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const queryKnowledge = queryContent({ where: { _path: { $contains: 'kb' }}})
const queryLessons = queryContent({ where: { _path: { $contains: 'lessons' }}})

const { data: knowledge } = await useAsyncData('knowledge', () => fetchContentNavigation(queryKnowledge))
const { data: lessons } = await useAsyncData('lessons', () => fetchContentNavigation(queryLessons))

</script>