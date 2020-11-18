import React from 'react';
import './content.css';
import ShareIcon from '@material-ui/icons/Share';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import logo from './pest.jpg';
import logos1 from './solar.jpg';
import logos2 from './house.jpg';
import logos3 from './carp.jpg';
import logos4 from './plumb.jpg';
import logo1 from './bikes.jpg';
import logo12 from './car.jpg';
import logo13 from './rental.jpg';
import logo14 from './air.jpg';
import logoo2 from './solt.jpg';
import logoo21 from './sudoku.jpg';
import logoo22 from './candy.jpg';
import logoo23 from './solta.jpg';
import logoo24 from './bubble.jpg';



class Content extends React.Component {
    render() {
        return (
            <div className="colors">

                <Card className="cards">
                    <CardContent className="hello">

                        <div><h1 className="headingss1">Services</h1></div>
                        <Grid item xs={12} className="fixes">

                            <Grid container>



                                <Grid item xs={2}>
                                    <div><h2 className="heading1">Home Services</h2></div>
                                </Grid>

                                <Grid item xs={7}>
                                    <hr className="line" />
                                </Grid>

                                <Grid item xs={3}>
                                    <nav className="navbar">
                                        <ul className="oops">
                                            <li className="items1"><ArrowBackIosIcon /></li>
                                            <li className="items2"><ArrowForwardIosIcon /></li>
                                            <li className="items3">VIEW ALL</li>
                                        </ul>
                                    </nav>
                                </Grid>
                            </Grid>

                        </Grid>


                        <Grid item xs={12} className="fixes">

                            <Grid container>

                                <Grid item xs={2}>
                                    <Card className="root">
                                        <div><img className="shifts1" src={logo}></img>

                                        </div>
                                        <CardContent>
                                            <div className="fixeds1">Pest Control Services<span className="icons1"><ShareIcon /></span></div>

                                            <div>
                                                <div className="contents1">Mon - Fri 9AM to 9PM</div>
                                                <div className="contents1">+91 12345 67890</div>
                                                <div className="contents1">54D+ Experts<span className="get">GET QUOTE</span></div>

                                            </div>
                                        </CardContent>

                                    </Card>


                                </Grid>
                                <Card className="root1">
                                    <div><img className="shifts1" src={logos1}></img>

                                    </div>
                                    <CardContent>
                                        <div className="fixeds1">Solar Product Dealers<span className="icons2"><ShareIcon /></span></div>

                                        <div>
                                            <div className="contents1">Mon - Fri 9AM to 9PM</div>
                                            <div className="contents1">+91 12345 67890</div>
                                            <div className="contents1">54D+ Experts<span className="get">GET QUOTE</span></div>

                                        </div>
                                    </CardContent>

                                </Card>

                                <Grid item xs={2}>
                                    <Card className="root2">
                                        <div><img className="shifts1" src={logos2}></img>

                                        </div>
                                        <CardContent>
                                            <div className="fixeds1">Interior Designers<span className="icons3"><ShareIcon /></span></div>

                                            <div>
                                                <div className="contents1">Mon - Fri 9AM to 9PM</div>
                                                <div className="contents1">+91 12345 67890</div>
                                                <div className="contents1">54D+ Experts<span className="get">GET QUOTE</span></div>

                                            </div>
                                        </CardContent>

                                    </Card>

                                </Grid>

                                <Grid item xs={2}>
                                    <Card className="root3">
                                        <div><img className="shifts1" src={logos3}></img>

                                        </div>
                                        <CardContent>
                                            <div className="fixeds1">Carpenters<span className="icons4"><ShareIcon /></span></div>

                                            <div>
                                                <div className="contents1">Mon - Fri 9AM to 9PM</div>
                                                <div className="contents1">+91 12345 67890</div>
                                                <div className="contents1">54D+ Experts<span className="get">GET QUOTE</span></div>

                                            </div>
                                        </CardContent>

                                    </Card>
                                </Grid>


                                <Grid item xs={2}>
                                    <Card className="root4">
                                        <div><img className="shifts1" src={logos4}></img>

                                        </div>
                                        <CardContent>
                                            <div className="fixeds1">Plumbing Contractors<span className="icons5"><ShareIcon /></span></div>

                                            <div>
                                                <div className="contents1">Mon - Fri 9AM to 9PM</div>
                                                <div className="contents1">+91 12345 67890</div>
                                                <div className="contents1">54D+ Experts<span className="get">GET QUOTE</span></div>

                                            </div>
                                        </CardContent>

                                    </Card>
                                </Grid>



                            </Grid>

                        </Grid>
                        </CardContent></Card>





                        





                {/* rental */}

                <Card className="cards1">
                    <CardContent className="hello1">

                        <Grid item xs={12} className="fixes">

                            <Grid container>



                                <Grid item xs={2}>
                                    <div><h2 className="heading1">Rental Services</h2></div>
                                </Grid>

                                <Grid item xs={7}>
                                    <hr className="line" />
                                </Grid>

                                <Grid item xs={3}>
                                    <nav className="navbar">
                                        <ul className="oops">
                                            <li className="items1"><ArrowBackIosIcon /></li>
                                            <li className="items2"><ArrowForwardIosIcon /></li>
                                            <li className="items3">VIEW ALL</li>
                                        </ul>
                                    </nav>
                                </Grid>
                            </Grid>

                        </Grid>


                        <Grid item xs={12} className="fixes1">

                            <Grid container>

                                <Grid item xs={3}>
                                    <Card className="roots1">
                                        <ShareIcon className="share"/>
                                        <div><img className="shiftss1" src={logo1}></img>
                                        </div>

                                        <div>
                                            <div><hr className="divide1" /></div>
                                            <div className="rentals1">Bike</div>
                                        </div>
                                    </Card>
                                </Grid>

                                <Grid item xs={3}>
                                    <Card className="roots1">
                                    <ShareIcon className="share"/>
                                        <div><img className="shiftss2" src={logo12}></img>
                                        </div>

                                        <div>
                                            <div><hr className="divide3" /></div>
                                            <div className="rentals1">Car</div>
                                        </div>
                                    </Card>


                                </Grid>

                                <Grid item xs={3}>
                                    <Card className="roots1">
                                    <ShareIcon className="share"/>
                                        <div><img className="shiftss3" src={logo13}></img>
                                        </div>

                                        <div>
                                            <div><hr className="divide1" /></div>
                                            <div className="rentals1">Refrigerator</div>
                                        </div>
                                    </Card>


                                </Grid>

                                <Grid item xs={3}>
                                    <Card className="roots1">
                                    <ShareIcon className="share"/>
                                        <div><img className="shiftss4" src={logo14}></img>
                                        </div>

                                        <div>
                                            <div><hr className="divide2" /></div>
                                            <div className="rentals1">Air-Conditioner</div>
                                        </div>
                                    </Card>


                                </Grid>



                            </Grid>
                        </Grid>
                    </CardContent></Card>




                



{/* // Games */}


<Card className="cards1">
                    <CardContent className="hello1">

                        
                        <Grid item xs={12} className="fixes">

                            <Grid container>



                                <Grid item xs={2}>
                                    <div><h2 className="heading1">Games</h2></div>
                                </Grid>

                                <Grid item xs={7}>
                                    <hr className="line5" />
                                </Grid>

                                <Grid item xs={3}>
                                    <nav className="navbar">
                                        <ul className="oops">
                                            <li className="items1"><ArrowBackIosIcon /></li>
                                            <li className="items2"><ArrowForwardIosIcon /></li>
                                            <li className="items3">VIEW ALL</li>
                                        </ul>
                                    </nav>
                                </Grid>
                            </Grid>

                        </Grid>


                        <Grid item xs={12} className="fixes1">

                            <Grid container>

                                <Grid item xs={2}>
                                    <Card className="roots2">
                                        <div><img className="shiftss21" src={logoo2}></img>
                                        
                                        </div>
                                        {/* <div className="textimage">Bubble</div> */}

                                    </Card>
                                </Grid>

                                <Grid item xs={2}>
                                    <Card className="roots3">
                                        
                                        <div><img className="shiftss21" src={logoo21}></img>
                                        
                                        </div>

                                    </Card>


                                </Grid>

                                <Grid item xs={2}>
                                    <Card className="roots4">
                                        <div><img className="shiftss21" src={logoo22}></img>
                                        </div>
                                    </Card>


                                </Grid>

                                <Grid item xs={2}>
                                    <Card className="roots5">
                                        <div><img className="shiftss21" src={logoo23}></img>
                                        </div>

                                    </Card>


                                </Grid>

                                <Grid item xs={2}>
                                    <Card className="roots6">
                                        <div><img className="shiftss21" src={logoo24}></img>
                                        </div>

                             </Card>


                                </Grid>



                            </Grid>
                        </Grid>


                        </CardContent>
                        </Card>

                        </div>


        )
    }
}
export default Content;