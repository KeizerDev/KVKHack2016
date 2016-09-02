var React = require('react');
var Fire = require('../../Mojs/Items/Fire.js');

class Timeline extends React.Component {
    super() {
        console.log(mojs)
    }

    componentDidMount() {
        // var scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
        var shape = new mojs.Shape({
          shape:        'circle',
          radius:       25,
          fill:         'white',
          stroke:       '#F64040',
          strokeWidth:  7,
          isShowStart:  true,
        });
    }

    render() {
        return (<div>
                <p>Home Page</p>
                <div ref="mojs" className="parent" id="js-parent"></div>
            </div>);
    }
}

module.exports = Timeline;
