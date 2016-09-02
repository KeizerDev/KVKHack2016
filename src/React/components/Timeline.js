var React = require('react');
import HorizontalTimeline from 'react-horizontal-timeline';
import SwipeableViews from 'react-swipeable-views';

export default class Timeline extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      previous: 0,
      showConfigurator: false,

      // timelineConfig
      minEventPadding: 20,
      maxEventPadding: 120,
      linePadding: 100,
      labelWidth: 100,
      fillingMotionStiffness: 150,
      fillingMotionDamping: 25,
      slidingMotionStiffness: 150,
      slidingMotionDamping: 25,
      stylesBackground: '#f8f8f8',
      stylesForeground: '#7b9d6f',
      stylesOutline: '#dfdfdf',
      isTouchEnabled: true,
      isKeyboardEnabled: true
    };
  }


    componentWillMount() {
      this.dates = this.props.content.map((entry) => entry.date);
    }

    componentWillReceiveProps(nextProps) {
      this.dates = nextProps.content.map((entry) => entry.date);
    }


    render() {
        const state = this.state;

        const views = this.props.content.map((entry, index) => {
          return (
            <div className="container" key={index}>
              { entry.component }
            </div>
          );
        });


        return (<div>

          <HorizontalTimeline
            fillingMotion={{ stiffness: state.fillingMotionStiffness, damping: state.fillingMotionDamping }}
            index={this.state.value}
            indexClick={(index) => {
              this.setState({ value: index, previous: this.state.value });
            }}
            isKeyboardEnabled={state.isKeyboardEnabled}
            isTouchEnabled={state.isTouchEnabled}
            labelWidth={state.labelWidth}
            linePadding={state.linePadding}
            maxEventPadding={state.maxEventPadding}
            minEventPadding={state.minEventPadding}
            slidingMotion={{ stiffness: state.slidingMotionStiffness, damping: state.slidingMotionDamping }}
            values={ this.dates } />
            <SwipeableViews
              index={this.state.value}
              onChangeIndex={(value, previous) => {
                this.setState({ value: value, previous: previous });
              }}
              resistance>
              {views}
            </SwipeableViews>
        </div>
);
    }
}
