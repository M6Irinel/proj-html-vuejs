<template>
    <main>
        <main-header />
        <main-section-2 />
        <main-section-3 />
    </main>
</template>


<script>
import mainHeader from './c-app-main/main-header.vue';
import mainSection2 from './c-app-main/main-section-2.vue';
import mainSection3 from './c-app-main/main-section-3.vue';

export default {
    name: 'appMain',

    components: { mainHeader, mainSection2, mainSection3 },
}
</script>