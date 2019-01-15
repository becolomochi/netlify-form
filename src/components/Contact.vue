<template>
<div>
  <form name="contact" action="https://google.com" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
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
  name: 'Contact'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
