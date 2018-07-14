<template>
    <div>
        <ul>
            <li>
                <a href="#" @click.prevent="activeView = 'app-home'">Home</a>
            </li>
            <li>
                <a href="#" @click.prevent="activeView = 'app-contact'">Contact</a>
            </li>
            <li>
                <a href="#" @click.prevent="activeView = 'HelloWorld'">Hello World</a>
            </li>
            <li>
                <a href="#" @click.prevent="activeView = 'app-article'">Article</a>
            </li>
        </ul>
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <component :is="activeView"></component>
                </div>
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
  },
  data() {
      return {
        activeView: 'app-contact'
      };
  }
};
</script>