<template>
<div>
<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact">
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
    <label>Message<textarea name="message"></textarea></label>
  <p>
    <button>Send</button>
  </p>
</form>
</div>
</template>
<script>
export default {
  name: 'contact'
}
</script>
