import React ,{Component} from 'react';
import {Tabs,Tab,Grid,Cell,Card,CardTitle,CardText,CardActions,Button,CardMenu,IconButton} from 'react-mdl';

class Project extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab:0};
    }

    toggleCategories(){
        if(this.state.activeTab===0){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minwidth:'450',margin:'auto'}}>
                   <CardTitle style={{color: '#fff', height: '176px',background:'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center/cover'}}>React Project 1</CardTitle>
                   <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</CardText>
                   <CardActions border>
                      <Button colored>Github</Button>
                      <Button colored>Github</Button>
                   </CardActions>
                   <CardMenu style={{color:'#fff'}}>
                   <IconButton name="share" />
                   </CardMenu>.
                </Card>
                <Card shadow={5} style={{minwidth:'450',margin:'auto'}}>
                   <CardTitle style={{color: '#fff', height: '176px',background:'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center/cover'}}>React Project 2</CardTitle>
                   <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</CardText>
                   <CardActions border>
                      <Button colored>Github</Button>
                      <Button colored>Github</Button>
                   </CardActions>
                   <CardMenu style={{color:'#fff'}}>
                   <IconButton name="share" />
                   </CardMenu>.
                </Card>
                <Card shadow={5} style={{minwidth:'450',margin:'auto'}}>
                   <CardTitle style={{color: '#fff', height: '176px',background:'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center/cover'}}>React Project 3</CardTitle>
                   <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</CardText>
                   <CardActions border>
                      <Button colored>Github</Button>
                      <Button colored>Github</Button>
                   </CardActions>
                   <CardMenu style={{color:'#fff'}}>
                   <IconButton name="share" />
                   </CardMenu>.
                </Card>
                </div>
            )
        }
        else if(this.state.activeTab===1){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minwidth:'450',margin:'auto'}}>
                   <CardTitle style={{color: '#fff', height: '176px',background:'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center/cover'}}>React Project 1</CardTitle>
                   <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</CardText>
                   <CardActions border>
                      <Button colored>Github</Button>
                      <Button colored>Github</Button>
                   </CardActions>
                   <CardMenu style={{color:'#fff'}}>
                   <IconButton name="share" />
                   </CardMenu>.
                </Card>
                <Card shadow={5} style={{minwidth:'450',margin:'auto'}}>
                   <CardTitle style={{color: '#fff', height: '176px',background:'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center/cover'}}>React Project 2</CardTitle>
                   <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</CardText>
                   <CardActions border>
                      <Button colored>Github</Button>
                      <Button colored>Github</Button>
                   </CardActions>
                   <CardMenu style={{color:'#fff'}}>
                   <IconButton name="share" />
                   </CardMenu>.
                </Card>
                <Card shadow={5} style={{minwidth:'450',margin:'auto'}}>
                   <CardTitle style={{color: '#fff', height: '176px',background:'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center/cover'}}>React Project 3</CardTitle>
                   <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</CardText>
                   <CardActions border>
                      <Button colored>Github</Button>
                      <Button colored>Github</Button>
                   </CardActions>
                   <CardMenu style={{color:'#fff'}}>
                   <IconButton name="share" />
                   </CardMenu>.
                </Card>
                </div>
            )
        }
        else if(this.state.activeTab===2){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minwidth:'450',margin:'auto'}}>
                   <CardTitle style={{color: '#fff', height: '176px',background:'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center/cover'}}>React Project 1</CardTitle>
                   <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</CardText>
                   <CardActions border>
                      <Button colored>Github</Button>
                      <Button colored>Github</Button>
                   </CardActions>
                   <CardMenu style={{color:'#fff'}}>
                   <IconButton name="share" />
                   </CardMenu>.
                </Card>
                <Card shadow={5} style={{minwidth:'450',margin:'auto'}}>
                   <CardTitle style={{color: '#fff', height: '176px',background:'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center/cover'}}>React Project 3</CardTitle>
                   <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</CardText>
                   <CardActions border>
                      <Button colored>Github</Button>
                      <Button colored>Github</Button>
                   </CardActions>
                   <CardMenu style={{color:'#fff'}}>
                   <IconButton name="share" />
                   </CardMenu>.
                </Card>
                </div>
            )
        }
    
    }
    render(){
        return(
           <div className="category-tabs">
              <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                 <Tab>React</Tab>
                 <Tab>ML</Tab>
                 <Tab>Misc</Tab>
              </Tabs>
              
              <Grid >
              <Cell col={12}>
              <div className="content">
              {this.toggleCategories()} 
              </div>
              </Cell>
              </Grid>
                  
           </div>
        )
    }
}

export default Project;