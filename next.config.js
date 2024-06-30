
  
  // module.exports = ({
  //   output : 'export',
  //   trailingSlash: true
  // });



// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA({
  // output : 'export',
  // trailingSlash: true
});
