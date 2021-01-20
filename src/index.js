import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component{
    constructor(props){
        super(props);
        this.state={lat: null};
        window.navigator.geolocation.getCurrentPosition(
            (position)=> 
            {
                this.setState=({lat: position.coords.latitude});
                console.log(position);
            },
            (err)=>console.log(err)  
        );
    }
    componentDidMount{
        
    }
    render()
    {
               
            return(
                 <div>Latitude: {this.state.lat} </div>
                 )


    }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);