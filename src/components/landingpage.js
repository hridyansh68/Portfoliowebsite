import React ,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import avatar from '../../src/resources/myAvatar.png';

class Landingpage extends Component{
    render(){
        return(
            <div style={{width:'100%',margin:'auto'}}>
            <Grid className='landing-grid'>
                  <Cell col={12}></Cell>
                  <img
                  src={avatar}
                  alt="avatar"
                  className="avatar-img"
                  />
            </Grid>
            </div>
        )
    }
}

export default Landingpage;