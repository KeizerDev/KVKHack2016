var React = require('react')
var PresentAnim = require('./../components/PresentAnim');
import { browserHistory } from 'react-router';

var Present = React.createClass({

    getInitialState: function() {
        return {
            value: 0,
            previous: 0
        };
    },
    componentDidMount: function(){

        // componentDidMount is called by react when the component
        // has been rendered on the page. We can set the interval here:

        this.timer = setInterval(this.redirectToView, 15000);
    },

    redirectToView: function() {
        console.log(browserHistory);
        browserHistory.transitionTo('/users', { userId: user.id }, query);
    },

    render: function() {
        return (<div className="l-fullscreen">
                <div className="l-presentanim">
                    <div className="card"></div>
                    <PresentAnim/>
                </div>
            </div>);
    }
});

module.exports = Present;
