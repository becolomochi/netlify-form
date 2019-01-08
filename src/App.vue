<template>
<div>
<form name="contact" method="POST" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>

<form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="#">
  <input type="hidden" name="form-name" value="contact">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button>Send</button>
  </p>
</form>
</div>
</template>
<script>
export default {
  name: "contact"
}
</script>