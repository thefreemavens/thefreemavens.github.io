<template>
  <div class="container mx-auto">
    <div class="mx-4">
      <div class="grid grid-cols-12 pt-4 --border-t">
        <!-- Startbar -->
        <nav class="hidden col-span-12 lg:block lg:col-span-2 overflow-y-scroll max-h-[calc(100dvh-80px)] sticky top-16">
          <ContentNavigation :navigation-tree="knowledge" />
          <ContentNavigation :navigation-tree="lessons" />
        </nav>

        <!-- Content -->
        <main class="col-span-12 lg:px-12 xl:px-24 lg:col-span-8 lg:col-start-3">
          <ContentDoc v-slot="{ doc }">
            <article>
              <div class="flex pt-2 w-full text-sm">
                <span class="flex-1 font-mono">P / {{ doc.index? doc.index : '--' }}</span>
                <span class="flex-1 rotate-180">---></span>
              </div>
              <!-- <span class="text-lg">->{{ doc.index }}</span> -->
              <h1>{{ doc.title }}</h1>
              <ContentRenderer :value="doc" />
            </article>
            <nav>
              <ContentPrevNext />
            </nav>
          </ContentDoc>
        </main>

        <!-- Endbar -->
        <div class="col-span-12 lg:col-span-2 lg:col-start-11">
          <ContentTable />
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

useHead({
  title: 'The Free Mavens',
  meta: [
    { name: 'title', content: 'The Free Mavens' },
    { name: 'description', content: 'DESCRIPTION' },
    { name: 'msapplication-TileColor', content: '#000000' },
    { name: 'theme-color', content: '#ffffff' },
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://tfm.github.io/togw/' },
    { property: 'og:title', content: 'The Free Mavens' },
    { property: 'og:description', content: 'DESCRIPTION' },
    { property: 'og:image', content: 'OG_IMAGE' },

    // Twitter
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: 'https://tfm.github.io/togw/' },
    { property: 'twitter:title', content: 'The Free Mavens' },
    { property: 'twitter:description', content: 'DESCRIPTION' },
    { property: 'twitter:image', content: 'OG_IMAGE' },
  ],
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: './apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: './favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16x', href: './favicon-16x16.png' },
    { rel: 'icon', href: './favicon.ico' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#000000' },
  ],
  //
  // Leave for syntex options example:
  bodyAttrs: {
    // used by Lenis plugin
    class: 'content'
  },
  // script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
</script>