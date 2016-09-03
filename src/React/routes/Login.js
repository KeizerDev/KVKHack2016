var React = require('react');
// var mojs = require('mo-js');
import { Link } from 'react-router'
import $ from 'jquery';

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

    _handleLogin() {
        var that = this;
        var username = $('input[name="username"]').val();
        var password = $('input[name="password"]').val();

        console.log(this)

        $.ajax({
            type: "POST",
            url: '/api/login',
            data: {
                username: username,
                password: password
            },
            success: function(result) {
                console.log(result)
            },
            error: function () {
                this.state.error = true;
            }
        })
    }

    render() {
        var message = '';

        if (this.state.error) {
            message = 'Er ging iets mis met inloggen. Probeer het nogmaals.'
        }
        return (<div>
                <h1 className="page-title">Inloggen</h1>
                      <form method="post" action="/api/login">
                        <div className="form-group row">
                          <label htmlFor="name-input" className="col-xs-3 col-form-label">Gebruikersnaam</label>
                          <div className="col-xs-9">
                            <input className="form-control" type="username" name="username" id="name-input" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label htmlFor="password-input" className="col-xs-3 col-form-label">Wachtwoord</label>
                          <div className="col-xs-9">
                            <input className="form-control" type="password" name="password" id="password-input" />
                          </div>
                        </div>
                        <a className="btn btn-primary" href="#" onClick={this._handleLogin}>Inloggen</a>
            <div className="message">{message}</div>
                      </form>
            </div>);
    }
}