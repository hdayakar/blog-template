<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <announcement></announcement>
                <appArticle></appArticle>
                <appContact>
                    <p>Some content</p>
                    <p slot="top">Contact us and one of our representatives will get back to you as soon as possible.</p>
                    <p slot="bottom">Do not submit any sensitive information.</p>
                </appContact>
            </div>
        </div>
    </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Announcement from "./components/Announcements.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    Announcement,
  }
};
</script>