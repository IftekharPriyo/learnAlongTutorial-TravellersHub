console.log("app is running");


// var template = <h1> Travellers Hub</h1>

var app = { 
    title : 'Travellers Hub',
    subtitle : 'Platform for everyone'
};

var agency = {
    name: 'XYZ Agency',
    type: 'Land Route',
    altType : 'Air Route'
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <h3>{agency.name}</h3>
        <p>{agency.type}</p>
        <ol>
            <li> Deal one </li>
            <li> Deal two </li>
        </ol> 
    </div>
);

var appRoot = document.getElementById('app');



  var appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot);