var React = require('react');
// var mojs = require('mo-js');

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0};
    }

    componentDidMount() {
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
                <div><h2>Login</h2></div>
            </div>);
    }
}