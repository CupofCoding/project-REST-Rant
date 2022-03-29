// Import React
const React = require('react')

// Create stub function that has a parameter called 'html'
function Def (html) {
  // HTML Skeleton that all pages will include.
    return (
      <html>
           <head>
              <title>Title</title>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
              <link rel="stylesheet" href="css/style.css"/>
          </head>
          <body>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/places">Places</a>
              </li>
              <li>
                <a href="/places/new">Add Place</a>
              </li>
            </ul>
          </nav>
            {html.children}
          </body>
      </html>
    );
};

// Export the Def()
module.exports = Default;