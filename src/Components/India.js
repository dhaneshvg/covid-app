import React , {Component} from 'react';
import {Card} from 'react-bootstrap';
import Statedata from './Statedata';
import Axios from 'axios';

class India extends Component{

    constructor(){
        super();
        this.state = {
            data : {}
        }
    }
    componentDidMount(){
        Axios.get("https://corona.lmao.ninja/v2/countries/india").then(response=>{
            this.setState({data:response.data})

        });
    }

    render(){
        return(
            <div className='row'>
                <div className='col-md-12'>
                    <img src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" height="70px" width= "100px" alt="..."></img>
                    <h3>India</h3>
                </div>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-md-3'>
                        <Card className='badge badge-primary' style={{ width: '18rem' }}>
                            <Card.Body className='text-center'>
                            <Card.Title>Total Cases</Card.Title>
                            <h3>{this.state.data.cases}</h3>
                            <Card.Text>
                            [Today : {this.state.data.todayCases}]
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className='col-md-3'>
                        <Card className='badge badge-warning' style={{ width: '18rem' }}>
                            <Card.Body className='text-center'>
                            <Card.Title>Active Cases</Card.Title>
                            <h3>{this.state.data.active}</h3>
                            <Card.Text>
                            [Critical : {this.state.data.critical}]
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className='col-md-3'>
                        <Card className='badge badge-success' style={{ width: '18rem' }}>
                            <Card.Body className='text-center'>
                            <Card.Title>Recoverd</Card.Title>
                            <h3>{this.state.data.recovered}</h3>
                            <Card.Text>
                            [Today : {this.state.data.todayRecovered}]
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className='col-md-3'>
                        <Card className='badge badge-danger' style={{ width: '18rem' }}>
                            <Card.Body className='text-center'>
                            <Card.Title>Deaths</Card.Title>
                            <h3>{this.state.data.deaths}</h3>
                            <Card.Text>
                            [Today : {this.state.data.todayDeaths}]
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className='col-md-12'>
                            <Statedata/>
                        </div>

                    </div>
                </div>
                
            </div>
        )
    }
}

export default India;