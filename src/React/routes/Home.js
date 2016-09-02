var React = require('react');
// var mojs = require('mo-js');
import ChallengeSmall from '../components/ChallengeSmall.js';

var DemoData = require('../Api/mock.js');

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0, previous: 0, results: [{id: 0, text: 'Naar de sportschool', dates: ['2-2-2014']}, {id: 1, text: 'Zwemmen', dates: ['2-2-2014']}] };
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


    render() {
        return (<div>
                <p>Home Page</p>
                <div>
                   {this.state.results.map(function(result) {
                      return <ChallengeSmall key={result.key} content={result}/>;
                    })}
                </div>
            </div>);
    }
}