var React = require('react');
// var mojs = require('mo-js');
import Timeline from '../components/Timeline.js';

var DemoData = require('../Api/mock.js');

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0, previous: 0 };
    }

    componentDidMount() {
        // var scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
        // var shape = new mojs.Shape({
        //   shape:        'circle',
        //   radius:       25,
        //   fill:         'white',
        //   stroke:       '#F64040',
        //   strokeWidth:  7,
        //   isShowStart:  true,
        // });

    }

    componentWillMount() {
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
    }


    render() {
        return (<div>
                <p>Home Page</p>
                <div style={{ width: '60%', height: '100px', margin: '0 auto' }}>
                    <Timeline content={ this.data } />
                </div>
            </div>);
    }
}