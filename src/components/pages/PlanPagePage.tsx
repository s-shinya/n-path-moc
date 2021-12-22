import React, { useState, VFC, useRef, useEffect } from 'react';
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
    Box,
    Select
} from "@chakra-ui/react";
import MainTemplate from '../templates/MainTemplate';
import TimeLineLongTerm  from '../organisms/TimeLine/TimeLineLongTerm';
import TimeLineMonth  from '../organisms/TimeLine/TimeLineMonth';
import TimeLineWeek  from '../organisms/TimeLine/TimeLineWeek';
import PersonalCalendar  from '../organisms/TimeLine/PersonalCalendar';
import { CALENDAR_PERIOD } from '../../constants/const';
import CButton from '../Atoms/CButton';
import CInput from '../Atoms/CInput';
import { useWindowSize } from '../../hooks/useWindowSize';



const PlanPage:VFC = () => {
    const [tabIndex, setTabIndex] = useState<number>(CALENDAR_PERIOD.LONG_TERM);
    const { winH } = useWindowSize();

    return (
        <>
            <MainTemplate>
                <Tabs index={tabIndex} onChange={(index) => setTabIndex(index)}>
                    <TabList 
                        // ref={mainAreaRef}
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
                            <Box mr={4}>
                                <CInput
                                    type='date'
                                    size='sm'
                                    onChange={(e)=>{console.log(e.target.value)}}
                                />
                            </Box>
                            <Box mr={4}>
                                <Select 
                                    placeholder='部署' 
                                    size='sm' 
                                    onChange={(e)=>{console.log(e.target.value)}}
                                >
                                    <option value='1'>東京事業所</option>
                                    <option value='2'>名古屋事業所</option>
                                </Select>
                            </Box>
                            <CButton 
                                size='sm'
                                onClick={()=>alert('クリック')}
                            >適用</CButton>
                        </Flex>
                    </TabList>
                    <TabPanels pt={10}>
                        <TabPanel>
                            {tabIndex === CALENDAR_PERIOD.LONG_TERM &&
                                <TimeLineLongTerm mainAreaH={winH}/>
                            }
                        </TabPanel>
                        <TabPanel>
                            {tabIndex === CALENDAR_PERIOD.MONTH &&
                                <TimeLineMonth mainAreaH={winH}/>
                            }
                        </TabPanel>
                        <TabPanel>
                            {tabIndex === CALENDAR_PERIOD.WEEK &&
                                <TimeLineWeek mainAreaH={winH}/>
                            }
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
