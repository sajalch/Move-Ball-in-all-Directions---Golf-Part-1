import React, { useState, useEffect } from "react";
import '../styles/App.css';

const App=()=>{
    const [renderBall,setRenderBall]=useState(false);
    // const [posi,setPosi]=useState(0);
    const [ballPosition,setballPosition]=useState({ left:0, top:0 });
   
    useEffect(()=>{
        function keyD(event){
            switch(event.keyCode){
                case 39:{  //right
                    setballPosition({
                        left:ballPosition.left+5,
                        top:ballPosition.top,
                    });
                    break;
                }
                // case 40:{ //up
                //     setballPosition({
                //         left:ballPosition.left,
                //         top:ballPosition.top+5,
                //     });
                //     break;
                // }
                // case 37:{   //left
                //     setballPosition({
                //         left:ballPosition.left-5,
                //         top:ballPosition.top,
                //     });
                //     break;
                // }
                // case 38:{   //down
                //     setballPosition({
                //         left:ballPosition.left,
                //         top:ballPosition.top-5,
                //     });
                //     break;
                // }
                default: break;
            }
        }
        document.addEventListener("keydown",keyD);
        return ()=>document.removeEventListener("keydown",keyD);

    });

    const buttonClickHandler=()=> {
        setRenderBall(true);
    }
    const renderBallOrButton=()=> {
		if (renderBall) {
		    return <div className="ball"
             style={
                 {
                     left :ballPosition.left+"px",
                     top:ballPosition.top+"px",

                }}></div>
		} else {
		    return <button onClick={buttonClickHandler} >Click For One Ball</button>
		}
    }
    // const  componentDidMount=()=> {
      
    // }
    return (
        <div className="playground">
            {renderBallOrButton()}
        </div>
    );
    // };

// class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             renderBall: false,
//             posi : 0,
//             ballPosition: { left: "0px" }
//         };
//         this.renderChoice = this.renderBallOrButton.bind(this)
//         this.buttonClickHandler = this.buttonClickHandler.bind(this)
//     };

//     buttonClickHandler() {
   
//    }
//     renderBallOrButton() {
// 		if (this.state.renderBall) {
// 		    return <div className="ball" style={this.state.ballPosition}></div>
// 		} else {
// 		    return <button onClick={this.buttonClickHandler} >Click For One Ball</button>
// 		}
//     }

    // bind ArrowRight keydown event
    // componentDidMount() {
      
    // }

    // render() {
    //     return (
    //         <div className="playground">
    //             {this.renderBallOrButton()}
    //         </div>
    //     )
    // }
}


export default App;
