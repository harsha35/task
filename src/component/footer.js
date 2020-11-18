import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { faYoutube,faFacebook,faTwitter,faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import logo from './image.jpg';

const useStyles = makeStyles(theme => ({
    fix: {
        position: 'sticky',
        display: 'flex',
        marginTop: '80px',
        paddingBottom: '5px'
    },

    fixed: {
        color: '#000066',
        display: 'flex',
        marginTop: '5px',
        fontSize: '15px',
        marginLeft: '470px',
    },
    
    fixed1: {
        color: '#000066',
        display: 'flex',
        marginTop: '5px',
        fontSize: '15px',
        marginLeft: '150px'

    },
    head: {
        color: '#000066',
        marginTop: '20px',
        marginBottom: '20px',
        marginLeft: '470px',
        fontSize: '20px',
        fontWeight: 'bold'

    },
    heads: {
        color: '#000066',
        marginTop: '20px',
        marginBottom: '20px',
        fontSize: '20px',
        fontWeight: 'bold',
        marginLeft: '150px',

    },

    head1: {
        display: 'flex'
    },

    vl: {
        borderLeft: '3px solid #000066',
        height: '262px',
        position: 'absolute',
        left: '55%',
        marginLeft: '-3px',
        top: '30px',
    },

    heading: {
        
    },
    social:{
        // textAlign:'center',
        marginTop: '20px',
        fontSize: '22px',
        color:'#000066',
        marginLeft:'710px'
    },
    op:{
        paddingRight:'20px'
    }, 
    shift2:{
        width:'50px',
        height:'50px',
        marginLeft:'550px',
        marginTop:'40px'
    },
    fixed3:{
        fontWeight:'bold',
        fontSize:'35px',
        marginRight:'200px',
        color:'#000066',
        marginTop:'45px'

    }
    
    
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div>
             <Grid item xs={12} className={classes.fixes}>
                <Container>
                    <Grid container>

                        <Grid item xs={6}>
                        <div className={classes.shift1}>
                <img className={classes.shift2} src={logo}></img></div>

                        </Grid>

                       

                        <Grid item xs={6}>
                        <div className={classes.fixed3}>SuperNebr</div>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            
           
            <div className={classes.social}>
                <span className={classes.op}><FontAwesomeIcon icon={faInstagram} /></span>
                <span className={classes.op}><FontAwesomeIcon icon={faFacebook} /></span>
                <span className={classes.op}><FontAwesomeIcon icon={faTwitter} /></span>
                <span className={classes.op}><FontAwesomeIcon icon={faLinkedin} /></span>
                <span className={classes.op}><FontAwesomeIcon icon={faYoutube} /></span>
            </div>



            <Grid item xs={12} className={classes.fix}>
                <Container>
                    <Grid container>

                        <Grid item xs={6}>
                            <Typography variant='h4' className={classes.head}>Our Company</Typography>
                            <div className={classes.fixed}>About Us</div>
                            <div className={classes.fixed}>Career</div>
                            <div className={classes.fixed}>Investor</div>
                        </Grid>

                        <div className={classes.vl}></div>

                        <Grid item xs={6}>
                            <Typography variant='h4' className={classes.heads}>Legal</Typography>
                            <div className={classes.fixed1}>Terms And Condition</div>
                            <div className={classes.fixed1}>Privacy Policy</div>
                            <div className={classes.fixed1}>License Agreement</div>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </div>

    );
}
export default Footer;