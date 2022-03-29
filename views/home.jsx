const React = require('react');
const Default = require('./default');

function home() {
    return (
    <Default>
        <main>
        <h1>REST-Rant</h1>
            <div>
                <img src="https://images.unsplash.com/photo-1504855328839-2f4baf9e0fd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=754&q=80" alt="Strawberry Fruit Shake" style={{width: 800}}/>
                <div>
                    Photo by <a href="https://unsplash.com/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brenda Godinez</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </div>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>
        </main>
    </Default>
    );
};

module.exports = home;