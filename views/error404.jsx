const React = require('react');
const Default = require('./default')

function error404 () {
    return( 
        <Default>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>The Page you are looking for doesn't exist or another error occured. If you believe this to be an error, please try refreshing the page or going back.</p>
            </main>
        </Default>
    );
};

module.exports = error404;