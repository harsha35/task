import React from 'react';
import Header from './component/header';
import Footer from './component/footer';
import Content from './component/content';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
// import Shop from './com'

class App extends  React.Component{
  render(){
    return(
      <div>
        
    <Card>
      <CardContent>
        <BrowserRouter>
       <Header />
       </BrowserRouter>
       <Content />
       <Footer />
       </CardContent>
       </Card>
      </div>
      
    )
  }
}
export default App;