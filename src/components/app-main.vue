<template>
    <main>
        <main-header />
        <main-section-2 />
        <main-section-3 />
        <main-section-4 />
    </main>
</template>


<script>
import mainHeader from './c-app-main/main-header.vue';
import mainSection2 from './c-app-main/main-section-2.vue';
import mainSection3 from './c-app-main/main-section-3.vue';
import mainSection4 from './c-app-main/main-section-4.vue';

export default {
    name: 'appMain',

    components: { mainHeader, mainSection2, mainSection3, mainSection4 },
}
</script>