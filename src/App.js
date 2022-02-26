
import './App.css';
import React from 'react';

import './App.css';

// import Address from './Component/address';
// import FullName from './Component/fullName';
// import ProfilePhoto from './Component/profilePhoto';
import Address from './component/address'
import FullName from './component/fullName'
import ProfilePhoto from './component/profilePhoto';

class App extends React.Component{
  state ={
    fullName:"wael",
    bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequatur totam perspiciatis. Distinctio maiores id reiciendis, iusto qui exercitationem quasi perferendis! Quibusdam perspiciatis quos quas ullam. Laudantium aliquam corporis iusto.",
    imgSrc:"",
    profession:"emploi",
    show:'profileA'
  };

  handleClick =() =>{ if (this.state.show=== 'profileA')
                        this.setState({show:'profileDisplay'})
                      else this.setState({show:'profileA'})
  }
  render() {
    return(
      <>
        <h1>Profile</h1>
        <button  type='button' onClick={this.handleClick}>show profile</button>
        <div className={this.state.show}>
          <h1>show:</h1>
                  
            <div className='main'>
              
              <div>
                <ProfilePhoto/>
              </div>
              <div>
                <FullName/>
                <Address/>
              </div>
              
            </div>
        </div>
     </>
      )
  }
}
export default App;