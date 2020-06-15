import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

class App extends Component {
    state = {
        showMe: true
    }
    operation() {
        this.setState({
            showMe: !this.state.showMe
        })
    }
    render() {
        return (
            <>
                <Container>
                    <Header/>
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {
                                this.state.showMe ? <RandomChar/> : null
                            }

                            <Button onClick={()=> this.operation()} color="primary">Toggle random character</Button>
                            <hr/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList/>
                        </Col>
                        <Col md='6'>
                            <CharDetails/>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
};

export default App;