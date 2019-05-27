import React ,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import avatar from '../../src/resources/myAvatar.png';

class Landingpage extends Component{
    render(){
        return(
            <div style={{width:'100%',margin:'auto'}}>
            <Grid className='landing-grid'>
                  <Cell col={12}>
                  <img
                  src={avatar}
                  alt="avatar"
                  className="avatar-img"
                  />
                  <div className="banner-text">
                     <h1>Programmer,Developer and Applied ML enthusiast</h1>
                     <hr/>
                     <p>C/C++ | Python | Machine Learning | Deep Learning | React | React Native</p>
                     <div className="social-links">
                       <a href="https://www.linkedin.com/in/hridyansh-sahu-386660146/" rel="noopener noreferrer" target="_blank">
                       <i class="fa fa-linkedin" aria-hidden="true"></i>
                       </a>
                       <a href="https://github.com/hridyansh68" rel="noopener noreferrer" target="_blank">
                       <i className="fa fa-github-square"  aria-hidden="true" ></i>
                       </a>
                       <a href="https://twitter.com/HridyanshSahu" rel="noopener noreferrer" target="_blank">
                       <i class="fa fa-twitter-square" aria-hidden="true"></i>
                       </a>
                     </div>
                  </div>
                  
                  </Cell>
            </Grid>
            </div>
        )
    }
}

export default Landingpage;