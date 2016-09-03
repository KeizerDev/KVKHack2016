var React = require('react')

var PresentCheck = React.createClass({

    getInitialState: function() {
        return {
            value: 0,
            previous: 0
        };
    },

    componentWillMount: function() {
        this.data = DemoData.map((game, index) => {
          return ({
            date: game.date,
            component: (
              <div className='container' key={index}>
                <h1>{ `The Elder Scrolls ${index + 1}:`}</h1>
                <h2>{ game.subtitle }</h2>
                <hr />
                <p>{ game.content}</p>
                <hr />
              </div>
            )
          });
        });
      },

    render: function() {
        return (<div>hallo</div>);
    }
});

module.exports = PresentCheck;
