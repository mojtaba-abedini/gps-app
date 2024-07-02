
  
  // module.exports = ({
  //   // output : 'export',
  //   // trailingSlash: true
  // });



  const withPWA = require('next-pwa')({
    dest: 'public'
  })
  
  module.exports = withPWA({
    // output : 'export',
    trailingSlash: true
  })



