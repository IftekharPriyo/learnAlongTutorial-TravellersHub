'use strict';

console.log("app is running");

// var template = <h1> Travellers Hub</h1>

var app = {
    title: 'Travellers Hub',
    subtitle: 'Platform for everyone'
};

var agency = {
    name: 'XYZ Agency',
    type: 'Land Route',
    altType: 'Air Route'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'h3',
        null,
        agency.name
    ),
    React.createElement(
        'p',
        null,
        agency.type
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            ' Deal one '
        ),
        React.createElement(
            'li',
            null,
            ' Deal two '
        )
    )
);

var appRoot = document.getElementById('app');

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
