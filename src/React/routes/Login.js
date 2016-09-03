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
                      <form method="post" action="/api/login">
                        <div className="form-group row">
                          <label htmlFor="name-input" className="col-xs-3 col-form-label">Username</label>
                          <div className="col-xs-9">
                            <input className="form-control" type="username" name="username" defaultValue="1-(555)-555-5555" id="name-input" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label htmlFor="password-input" className="col-xs-3 col-form-label">Password</label>
                          <div className="col-xs-9">
                            <input className="form-control" type="password" name="password" defaultValue="hunter2" id="password-input" />
                          </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                      </form>
            </div>);
    }
}