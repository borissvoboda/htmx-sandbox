const express = require('express');
const app = express();
const port = 3000;

app.use('/frontend', express.static('frontend'));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

app.get('/contact/1/edit', (req, res) => {
  res.send(`<form hx-put="/contact/1" hx-target="this" hx-swap="outerHTML">
  <div>
    <label>First Name</label>
    <input type="text" name="firstName" value="Joe">
  </div>
  <div class="form-group">
    <label>Last Name</label>
    <input type="text" name="lastName" value="Blow">
  </div>
  <div class="form-group">
    <label>Email Address</label>
    <input type="email" name="email" value="joe@blow.com">
  </div>
  <button class="btn">Submit</button>
  <button class="btn" hx-get="/contact/1">Cancel</button>
</form>`)
});

app.get('/warning/1/show', (req, res) => {
    res.send(`<div></div>`);
  });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});