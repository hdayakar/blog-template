<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <announcement></announcement>
                <h1>test</h1>
            </div>
        </div>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Announcement from './components/Announcements.vue';

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>