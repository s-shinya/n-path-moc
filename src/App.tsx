import React, { useState } from 'react';
import './App.css';
// import { TestTimeLine2 } from './TestTimeLine2';
// import { TestTimeLine } from './TestTimeLine';
// import { TimeLinePage } from './TimeLinePage';
import { TimeLineLongTerm } from './TimeLine/TimeLineLongTerm';
import { TimeLineMonth } from './TimeLine/TimeLineMonth';
import { TimeLineWeek } from './TimeLine/TimeLineWeek';
// import { CalendarTimeLine } from './CalendarTimeLine';
// import CustomTimeline from './CustomTimeline';

function App() {
  const TAB_TYPE = {
    LONG_TERM : 0,
    MONTH : 1,
    WEEK : 2,
  };
  const [type, setType] = useState(TAB_TYPE.LONG_TERM);
  



  return (
    <div className="App">
      <div>
        <button type="button"
          onClick={()=>setType(TAB_TYPE.LONG_TERM)}
        >長期</button>
        <button type="button"
          onClick={()=>setType(TAB_TYPE.MONTH)}
        >月</button>
        <button type="button"
          onClick={()=>setType(TAB_TYPE.WEEK)}
        >週</button>
      </div>
      {/* <CalendarTimeLine/> */}
      {/* <CustomTimeline /> */}
      {/* <TestTimeLine /> */}
      {/* <TestTimeLine2 /> */}
      {/* <TimeLinePage /> */}

      {type === TAB_TYPE.LONG_TERM && 
        <TimeLineLongTerm />
      }
      {type === TAB_TYPE.MONTH && 
        <TimeLineMonth />
      }
      {type === TAB_TYPE.WEEK && 
        <TimeLineWeek />
      }
    </div>
  );
}

export default App;
