import React, { useState, VFC } from 'react';
// import '../organisms/TimeLine/Style.scss'
// import '../organisms/TimeLine/fullcalenndar.css'
// import '../../Style.scss'
// import '@fullcalendar/common/main.css'
// import './TimeLine/fullcalenndar.css'
// import '../../TimeLine/fullcalenndar.css'

// import { PersonalCalendar } from './TimeLine/PersonalCalendar';
// import { TimeLineLongTerm } from './TimeLine/TimeLineLongTerm';
// import { TimeLineMonth } from './TimeLine/TimeLineMonth';
// import { TimeLineWeek } from './TimeLine/TimeLineWeek';
// import {
//     Box,
//     Stack,
//     Heading,
//     Flex,
//     Text,
//     Button,
//     useDisclosure
// } from "@chakra-ui/react";

import {
    Tabs,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
    Flex,
    Button
} from "@chakra-ui/react";
import MainTemplate from '../templates/MainTemplate';
import TimeLineLongTerm  from '../organisms/TimeLine/TimeLineLongTerm';
import TimeLineMonth  from '../organisms/TimeLine/TimeLineMonth';
import TimeLineWeek  from '../organisms/TimeLine/TimeLineWeek';
import PersonalCalendar  from '../organisms/TimeLine/PersonalCalendar';
import { CALENDAR_PERIOD } from '../../constants/const';
import CButton from '../Atoms/CButton';



const PlanPage:VFC = () => {
    const [tabIndex, setTabIndex] = useState(CALENDAR_PERIOD.LONG_TERM);

    return (
        <>
            <MainTemplate>
                <Tabs index={tabIndex} onChange={(index) => setTabIndex(index)}>
                    <TabList 
                        display="flex" 
                        justifyContent="space-between"
                        alignItems="center"
                        position="fixed" 
                        zIndex={100000}  
                        w="100%" 
                        h={10} 
                        bg="white"
                    >
                        <Flex>
                            <Tab _focus={{focus:"none"}}>長期</Tab>
                            <Tab _focus={{focus:"none"}}>月</Tab>
                            <Tab _focus={{focus:"none"}}>週</Tab>
                            <Tab _focus={{focus:"none"}}>日</Tab>
                            <Tab _focus={{focus:"none"}}>個人</Tab>
                        </Flex>
                        <Flex mr={4}>
                            {/* TODO:日付入れる */}
                            <CButton 
                                size='sm'
                                onClick={()=>alert('クリック')}
                            >適用</CButton>
                        </Flex>
                    </TabList>
                    <TabPanels pt={10}>
                        <TabPanel>
                            {tabIndex === CALENDAR_PERIOD.LONG_TERM &&
                                <TimeLineLongTerm/>
                            }
                        </TabPanel>
                        <TabPanel>
                            {tabIndex === CALENDAR_PERIOD.MONTH &&
                                <TimeLineMonth/>
                            }
                        </TabPanel>
                        <TabPanel>
                            {tabIndex === CALENDAR_PERIOD.WEEK &&
                                <TimeLineWeek/>
                            }
                            <TimeLineWeek/>
                        </TabPanel>
                        <TabPanel>
                            {tabIndex === CALENDAR_PERIOD.DATE &&
                                <>日計画</>
                            }
                        </TabPanel>
                        <TabPanel>
                            {tabIndex === CALENDAR_PERIOD.PERSONAL &&
                                <PersonalCalendar/>
                            }
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </MainTemplate>
        </>
    );
};

export default PlanPage;
