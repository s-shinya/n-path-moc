import React, { useState, VFC } from 'react';
// import '../organisms/TimeLine/Style.scss'
// import '../organisms/TimeLine/fullcalenndar.css'
// import '../../Style.scss'
// import '@fullcalendar/common/main.css'
// import './TimeLine/fullcalenndar.css'
import '../../TimeLine/fullcalenndar.css'

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
} from "@chakra-ui/react";
import MainTemplate from '../templates/MainTemplate';
import TimeLineLongTerm  from '../organisms/TimeLine/TimeLineLongTerm';
import TimeLineMonth  from '../organisms/TimeLine/TimeLineMonth';
import TimeLineWeek  from '../organisms/TimeLine/TimeLineWeek';
import PersonalCalendar  from '../organisms/TimeLine/PersonalCalendar';



const PlanPage:VFC = () => {
    const [tabIndex, setTabIndex] = useState(2);

    return (
        <>
            <MainTemplate>
                <Tabs index={tabIndex} onChange={(index) => setTabIndex(index)}>
                    <TabList zIndex={100000}  position="fixed" w="100%" h={10} bg="white">
                        <Tab _focus={{focus:"none"}}>長期</Tab>
                        <Tab _focus={{focus:"none"}}>月</Tab>
                        <Tab _focus={{focus:"none"}}>週</Tab>
                        <Tab _focus={{focus:"none"}}>日</Tab>
                        <Tab _focus={{focus:"none"}}>個人</Tab>
                    </TabList>
                    <TabPanels pt={10}>
                        <TabPanel>
                            {tabIndex === 0 &&
                                <TimeLineLongTerm/>
                            }
                        </TabPanel>
                        <TabPanel>
                            {tabIndex === 1 &&
                                <TimeLineMonth/>
                            }
                        </TabPanel>
                        <TabPanel>
                            {tabIndex === 2 &&
                                <TimeLineWeek/>
                            }
                            <TimeLineWeek/>
                        </TabPanel>
                        <TabPanel>
                            {tabIndex === 3 &&
                                <>日計画</>
                            }
                        </TabPanel>
                        <TabPanel>
                            {tabIndex === 4 &&
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
