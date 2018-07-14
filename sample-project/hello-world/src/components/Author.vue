<template>
    <small>Written by {{ author.firstName }} {{ author.lastName }}</small>
</template>

<script>
    import { eventBus } from './../main';

    export default {
        props: ['author'],
        created() {
            eventBus.$on('articleWasShared', (data) => {
                alert("Some shared on article on" + data.media + "!");
            });
        }
    }
</script>