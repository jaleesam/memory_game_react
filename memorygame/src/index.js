import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

/* Memory Game Homework Psudo-code:
Gameboard loads with 12 different game squares
In each game square is assigned a unique number (0-11) and shows a unique picture.
When game first loads the squares are in random order.
Each game square has the ability to be clicked. 
Allow each game square to be clicked once (changing being clicked from true to false) 

when unclicked square gets click 
    - score (point) count goes uo by one
    - top score gets updated if top score is less than current top score
    -the squares rotate places on gameboard in another random order without reload

the game ends in one of two ways:

1) Another (unclicked) square can and should be clicked in order for the came to continue
When a already clicked square is clicked again:
        -player loses round -display message
        -point count goes down to zero
        - all clicked game squares go from clicked to unclicked 
        -gameboard rotate  game squares once again 

2) If all unclicked the squares get clicked once then:
        -player wins round  -display message
        -point count goes down to zero
        -all clicked game suqares go from clicked to unclicked  
        -gameboard rotates game square once again
        */

