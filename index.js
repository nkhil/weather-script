'use strict';

const config = require('./src/config');
const app = require('./src');

app.listen(8080, () => {
  console.log(`Server running on port 8080`);
});
