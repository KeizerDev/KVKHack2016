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
                      <div>
                        <div className="form-group row">
                          <label htmlFor="example-tel-input" className="col-xs-2 col-form-label">Telephone</label>
                          <div className="col-xs-10">
                            <input className="form-control" type="tel" defaultValue="1-(555)-555-5555" id="example-tel-input" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label htmlFor="example-password-input" className="col-xs-2 col-form-label">Password</label>
                          <div className="col-xs-10">
                            <input className="form-control" type="password" defaultValue="hunter2" id="example-password-input" />
                          </div>
                        </div>
                      </div>
            </div>);
    }
}