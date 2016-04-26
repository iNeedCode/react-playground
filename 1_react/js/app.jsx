//*****************************************
//-------------- GAME APP -----------------
//*****************************************
var StarsFrame = React.createClass({
    render: function () {
        var numberOfStars = Math.floor(Math.random() * 9) + 1;
        var stars = []
        for (var i = 0; i < numberOfStars; i++) {
            stars.push(
                <span className="glyphicon glyphicon-star"></span>
            )
        }
        return (
            <div id="stars-frame">
                <div className="well">
                    {stars}
                </div>
            </div>
        )
    }
});

var ButtonFrame = React.createClass({

    render: function () {
        return (
            <div id="button-frame">
                <button className="btn btn-primary">=</button>
            </div>
        )
    }
});

var AnswerFrame = React.createClass({

    render: function () {
        return (
            <div id="answer-frame">
                <div className="well">
                    ...
                </div>
            </div>
        )
    }
});

var NumbersFrame = React.createClass({

    render: function () {
        return (
            <div id="answer-frame">
                <div className="well">
                    ...
                </div>
            </div>
        )
    }
});
var GameExample = React.createClass({

    render: function () {
        return (
            <div id="game">
                <div className="clearfix">
                    <StarsFrame />
                    <ButtonFrame />
                    <AnswerFrame/>
                </div>
                <NumbersFrame />
            </div>
        )
    }
});
//05. The Numbers Frame.mp4
React.render(<GameExample />, document.getElementById("game"));

//*****************************************
//------------ EXAMPLE APP ----------------
//*****************************************
var ButtonExample = React.createClass({
    localIncrementClickHandler: function () {
        this.props.localIncrementClickHandler(this.props.increment)
    },
    render: function () {
        return (
            <button class="btn btn-primary" onClick={this.localIncrementClickHandler}>+{this.props.increment}</button>
        )
    }
});

var ResultExample = React.createClass({
    render: function () {
        return (
            <div>{this.props.localCounter}</div>
        )
    }
});

var MainExample = React.createClass({
    getInitialState: function () {
        return {counter: 0}
    },
    incrementCounter: function (increment) {
        this.setState({counter: this.state.counter + increment});
    },
    render: function () {
        return (
            <div>
                <ButtonExample localIncrementClickHandler={this.incrementCounter} increment={1}/>
                <ButtonExample localIncrementClickHandler={this.incrementCounter} increment={5}/>
                <ButtonExample localIncrementClickHandler={this.incrementCounter} increment={10}/>
                <ButtonExample localIncrementClickHandler={this.incrementCounter} increment={100}/>
                <ResultExample localCounter={this.state.counter}/>
            </div>
        )
    }
});
React.render(<MainExample />, document.getElementById("example"));

//*****************************************
//------------ GITHUB APP -----------------
//*****************************************
var Card = React.createClass({
    getInitialState: function () {
        return {
            //login:
        };
    },
    componentDidMount: function () {
        var component = this;
        $.get("https://api.github.com/users/" + this.props.login, function (data) {
            component.setState(data);
        })
    },
    render: function () {
        return (
            <div>
                <img src={this.state.avatar_url} width="50" className='img-circle pull-left'/>
                <h4 className='clearfix'>{this.state.name}</h4>
            </div>
        )
    }
});

var Form = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        var loginInput = React.findDOMNode(this.refs.login)
        this.props.addCard(loginInput.value);
        loginInput.value = ''
    },
    render: function () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="github user" ref='login'/>
                <button className="btn btn-success btn-xs">add</button>
            </form>
        )
    }
});

var GithubMain = React.createClass({
    getInitialState: function () {
        return {logins: []};
    },
    addCard: function (loginToAdd) {
        this.setState({logins: this.state.logins.concat(loginToAdd)});
    },
    render: function () {
        var cards = this.state.logins.map(function (login) {
            return ( <Card login={login}/>);
        });
        return (
            <div>
                <Form addCard={this.addCard}/>
                {cards}
            </div>
        )
    }
});
React.render(<GithubMain />, document.getElementById("github"));
