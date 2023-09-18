<template>
  <main class="container mx-auto">

    <AppSection>
      <template #title>
        Freemavenry
      </template>
      <template #desc>
        Discover your true power and learn how to use it
      </template>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap:8 xl:gap-9">
        <div class="w-full h-full">
          <svg
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 546 546"
            class="
              w-40 h-40 md:w-56 md:h-56 xl:w-72 xl:h-72 mb-8
              stroke-[10] fill-none
            stroke-black dark:stroke-white
            ">
            <!-- text-black/100 dark: text-black/100 -->
            <ellipse class="sol-ment oval oval-sm fill-none" rx="128" ry="128" cx="273" cy="273"/>
            <ellipse class="sol-corr oval oval-sm fill-none" rx="128" ry="128" cx="273" cy="145"/>
            <ellipse class="sol-vibr oval oval-sm fill-none" rx="128" ry="128" cx="384" cy="209"/>
            <ellipse class="sol-pola oval oval-sm fill-none" rx="128" ry="128" cx="384" cy="337"/>
            <ellipse class="sol-rhyt oval oval-sm fill-none" rx="128" ry="128" cx="273" cy="401"/>
            <ellipse class="sol-caus oval oval-sm fill-none" rx="128" ry="128" cx="162" cy="337"/>
            <ellipse class="sol-gend oval oval-sm fill-none" rx="128" ry="128" cx="162" cy="209"/>
            <ellipse class="sol-care oval oval-lg fill-none" rx="256" ry="256" cx="273" cy="273"/>

          </svg>
        </div>

        <div>
          <p class="mb-6 leading-relaxed">
            <span class="font-bold pe-1">The Free Mavens</span> promotes the great body of knwoledge of Natural Law, so that
            people all over the world can gain a better understanding of the causal factors and the real issues we are faced in the world today
            in effort to feed a desire to help and to create a reality that is based in truth, morality, love and freedom;
            <span class="line-through">Not lies, immorality, fear and slavery.</span>
          </p>

          <p class="mb-4 leading-relaxed">
            <span class="font-bold pe-1">Freemavenry</span> is a voluntary, non-religious, non-political, fraternal and benevolent collective 
            of creators, not workers. Our roots lie in the search for eternal truth and the spread of knowledge in the areas of metaphysics, occultism, 
            spirituality, symbology and human consciousness. 
          </p>
        </div>
        
        <hr class="col-span-1 lg:col-span-2 my-8">
        
        <h4 class="mb-6 font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl tracking-tight">Definitions</h4>

        <div class="">
          <p class="mb-4">
            <b class="me-1 block text-xl md:text-2xl pb-3 tracking-tight">Free</b> The word Free means not under the control or in the power of another; able to act or be done as one wishes. 
          </p>
          <p class="mb-4 mt-8">
            <b class="me-1 block text-xl md:text-2xl pb-3 tracking-tight">Maven</b> The word Maven derives from the Yiddish word Meyvn, meaning "one who understands." To be a Maven you have to be more than just understand a topic, you have to know its ins and outs. Often Mavens are the people that you turn to as experts in a field. You don't become a Maven overnight. That kind of expertise and understanding comes with an accumulation of knowledge over the years. 
          </p>
        </div>
        
        <hr class="col-span-1 lg:col-span-2 my-8">
        <h4 class="mb-6 font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl tracking-tight">Principles</h4>
        <div class="">
          <p class="mb-4">
            <b class="me-1 block text-xl md:text-2xl pb-3 tracking-tight">Truth</b> 
            Freemavenry strives for the singular and objective truth and requires high moral standards of all our members and friends. 
          </p>
          <p class="mb-4 mt-8">
            <b class="me-1 block text-xl md:text-2xl pb-3 tracking-tight">Love</b> 
            The Selfless kind. Every member will show tolerance and respect for the opinions of others and behave 
            with kindness and understanding to his fellow beings.  
          </p>
          <p class="mb-4 mt-8">
            <b class="me-1 block text-xl md:text-2xl pb-3 tracking-tight">Relief</b> 
            Freemavens are taught to practice charity, and to care, not only for their own members, but for the community as a whole, 
            by charitable giving, voluntary effort and taking actions.  
          </p>
        </div>

        <hr class="col-span-1 lg:col-span-2 my-8">
        <h4 class="mb-6 font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl tracking-tight">Be a Maven</h4>
        <div class="">
          <p class="mb-4">
            <b class="me-1 block text-xl md:text-2xl pb-8 tracking-tight">Your lifetime journey starts here.</b> 
            Becoming a Free Maven is like going on a journey. It requires will, dedication and courage. From joining as an Entered Maven, it typically takes 
            a few months to become a Master Maven, with each of the three stages marked by a special acknowledgment.
          </p>
          <p class="mb-4 mt-8">
            <!-- <b class="me-1 block text-xl md:text-2xl pb-3 tracking-tight">Love</b>  -->
            The essential qualifications for admission are abiding by our collective principles, understanding the real Law of Attraction and 
            applying it in real life.
          </p>
          <p class="mt-10 mb-8 text-xs font-mono px-4 py-2 border">
            <!-- <b class="me-1 block text-xl md:text-2xl pb-3 tracking-tight">Relief</b>  -->
            Membership is open to all men and women of integrity who can fulfill these essential qualifications.   
          </p>

          <button
            @click="$router.push('/profile')"
            type="button"
            class="
              w-full
              text-center
              mt-2
              bg-grey-975
              dark:bg-white
              text-white
              dark:text-grey-975
              py-2.5 px-4
              --rounded
              font-bold
              uppercase
              text-sm lg:text-base
            ">
            Become a founding member
          </button>
        </div>
        
      
      <!-- End Grid -->
      </div>
    </AppSection>

    <section class="mx-4">
      <ul class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap:8 xl:gap-9">

      </ul>
    </section>
  </main>
</template>

<script setup>
// const route = useRoute()
// const baseUrl = './img/market/'
</script>

