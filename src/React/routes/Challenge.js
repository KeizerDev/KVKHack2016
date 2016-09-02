var React = require('react')
import Timeline from '../components/Timeline.js';

var DemoData = require('../Api/mock.js');

var Challenge = React.createClass({

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
        return (<div className="container-fluid">
                  <div>
                        <p>Home Page</p>
                        <div style={{ width: '60%', height: '100px', margin: '0 auto' }}>
                            <Timeline content={ this.data } />
                        </div>
                    </div>
                </div>);
    }
});

module.exports = Challenge;
