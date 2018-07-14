<template>
    <div class="article">
        <h1>{{ title }}</h1>
        <p>Published on {{ published | moment }}</p>
        <p>Shares: {{ shares }}</p>
        <p class="lead">{{ content }}</p>
        <appAuthor :author="author"></appAuthor>
        <br><br>
        <app-social-sharing @articleWasShared="shared('Hello',$event)"></app-social-sharing>
    </div>
</template>

<script>
    import moment from 'moment';
    import Author from "./Author.vue";
    import Social from "./Social.vue";

    export default {
        data() {
            return {
                title: '10 Reasons why Vue.js is Awesome',
                published: new Date(),
                content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                author: {
                    firstName: 'Bo',
                    lastName: 'Andersen'
                },
                shares: 0
            };
        },
        methods: {
            shared: function(message, event) {
                this.shares++;
                console.log(message);
                console.log(event);
            }
        },
        filters: {
            moment: function(value) {
                return moment(value).format('MMMM Do')
            }
        },
        components: {
            appAuthor: Author,
            appSocialSharing: Social
        }
    };
</script>
