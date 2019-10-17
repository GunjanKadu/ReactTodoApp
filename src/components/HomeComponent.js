import React, { Component } from 'react';
import { Loading } from './LoadingComponent';
import { Container, Button, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            person: null,
            loading: true
        }
    }
    async componentDidMount() {
        try {
            const url = 'https://randomuser.me/api/';
            const response = await fetch(url);
            const data = await response.json();
            console.log(data.results[0]);
            this.setState({ person: data.results[0] })
        }
        catch (error) {
            console.log(error)
        };

    }


    render() {
        if (this.state.person == null) {
            return (
                <Container className='col-md-1'><Loading /></Container>
            )
        }

        return (
            <React.Fragment>
                <div className="center">
                    <div className="card">
                        <div className="additional">
                            <div className="user-card">
                                <div className="points center">
                                    {this.state.person.name.first} {this.state.person.name.last}                            </div>
                            </div>
                            <div className="more-info">
                                <h1>{this.state.person.name.first} {this.state.person.name.last}</h1>

                            </div>
                        </div>
                        <div className="general">
                            <h1>Welcome</h1>
                            <p><b>First Name :</b> {this.state.person.name.first}</p>
                            <p><b>Last Name :</b> {this.state.person.name.last}</p>
                            <p><b>Email :</b> {this.state.person.email}</p>
                            <p><b>Phone :</b> {this.state.person.phone}</p>
                            <span className="more">Mouse over the card for more info</span>
                        </div>
                    </div>
                    <Container>
                        <Row className='goahead text-center'>
                            <Link to='/manage'><Button className="btn btn-success" ><span className="fa fa-sign-in fa-lg"></span> Manage Tasks</Button></Link>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>

        );

    }
}

export default Home;
