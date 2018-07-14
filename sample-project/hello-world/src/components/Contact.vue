<template>
    <div>
        <h2>Contact Us</h2>
        <form>
            <div class="form-group">
                <label for="yourName">Your name</label>
                <input type="text" class="form-contrl" id="yourName" placeholder="Enter your name">
            </div>

            <div class="form-group">
                <label for="emailAddress">E-mail address</label>
                <input type="email" class="form-contrl" id="emailAddresss" placeholder="Enter your email">
            </div>

            
            <div class="form-group">
                <label for="message">E-mail address</label>
                <textarea id="message" class="form-control" placeholder="Enter your message"></textarea>
            </div>

            <slot></slot>
            <button type="submit" class="btn btn-primary">Send</button>
        </form>
    </div>
</template>

<script>
    export default {
        
    }
</script>