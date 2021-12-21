import React, {  } from 'react';
// import '@fullcalendar/common/main.css'
import './App.css';
import './Style.scss'
// import './TimeLine/fullcalenndar.css'

// import '../public/css/fullcalenndar.css'
// import '../public/css/timeline.scss'


// import { PersonalCalendar } from './TimeLine/PersonalCalendar';
// import { TestTimeLine2 } from './TestTimeLine2';
// import { TestTimeLine } from './TestTimeLine';
// import { TimeLinePage } from './TimeLinePage';
// import { TimeLineLongTerm } from './TimeLine/TimeLineLongTerm';
// import { TimeLineMonth } from './TimeLine/TimeLineMonth';
// import { TimeLineWeek } from './TimeLine/TimeLineWeek';
// import { CalendarTimeLine } from './CalendarTimeLine';
// import CustomTimeline from './CustomTimeline';

// import {
//   Box,
//   Stack,
//   Heading,
//   Flex,
//   Text,
//   Button,
//   useDisclosure
// } from "@chakra-ui/react";
// import MainTemplate from './components/templates/MainTemplate';
// import PeriodTab from './components/organisms/Tabs/PeriodTab';
import PlanPagePage  from './components/pages/PlanPagePage';



function App() {
  // const TAB_TYPE = {
  //   LONG_TERM : 0,
  //   MONTH : 1,
  //   WEEK : 2,
  //   PERSONAL : 3,
  // };
  // const [type, setType] = useState(TAB_TYPE.LONG_TERM);
  

  return (
    <div className="App">
      <PlanPagePage />

      {/* <Header/>
        <MainTemplate>
        <PeriodTab /> */}
            {/* <div>
              <button type="button"
                onClick={()=>setType(TAB_TYPE.LONG_TERM)}
              >長期</button>
              <button type="button"
                onClick={()=>setType(TAB_TYPE.MONTH)}
              >月</button>
              <button type="button"
                onClick={()=>setType(TAB_TYPE.WEEK)}
              >週</button>
              <button type="button"
                onClick={()=>setType(TAB_TYPE.PERSONAL)}
              >個人</button>
            </div>


            {type === TAB_TYPE.LONG_TERM && 
              <TimeLineLongTerm />
            }
            {type === TAB_TYPE.MONTH && 
              <TimeLineMonth />
            }
            {type === TAB_TYPE.WEEK && 
              <TimeLineWeek />
            }
            {type === TAB_TYPE.PERSONAL && 
              <div style={{width:"70%", margin: "1em auto"}}>webの時横幅調整 
                  <PersonalCalendar />
              </div>
            } */}
        {/* </MainTemplate> */}
    </div>



            // {/* <CalendarTimeLine/> */}
            // {/* <CustomTimeline /> */}
            // {/* <TestTimeLine /> */}
            // {/* <TestTimeLine2 /> */}
            // {/* <TimeLinePage /> */}
  );
}

export default App;
