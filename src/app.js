// console.log("app is running");


// // var template = <h1> Travellers Hub</h1>

// var app = { 
//     title : 'Travellers Hub',
//     subtitle : 'Platform for everyone'
// };

// var agency = {
//     name: 'XYZ Agency',
//     type: 'Land Route',
//     altType : 'Air Route'
// };

// var template = (
//     <div>
//         <h1>{app.title}</h1>
//         <p>{app.subtitle}</p>
//         <h3>{agency.name}</h3>
//         <p>{agency.type}</p>
//         <ol>
//             <li> Deal one </li>
//             <li> Deal two </li>
//         </ol> 
//     </div>
// );

// var appRoot = document.getElementById('app');



//   var appRoot = document.getElementById('app');

// ReactDOM.render(template,appRoot);

console.log('Project is running!');

var agency = {
    name: 'XYZ Agency',
    type: 'Land Route',
    altType : 'Air Route'
};

const app = {
  title: 'TravellersHub',
  subtitle: 'Platform for everyone',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{agency.name}</p>
      <p>{app.options.length > 0 ? 'Here are your deals' : 'No deals'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>Choose better deal?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Deals</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
