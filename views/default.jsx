// Import React
const React = require('react')

// Create stub function that has a parameter called 'html'
function Def (html) {
  // HTML Skeleton that all pages will include.
    return (
      <html>
          <head>
              <title>Title</title>
          </head>
          <body>
              {html.children}
          </body>
      </html>
    );
};

// Export the Def()
module.exports = Default;