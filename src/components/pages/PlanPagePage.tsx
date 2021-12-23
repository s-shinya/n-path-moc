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
    Select,
    Input
} from "@chakra-ui/react";
import MainTemplate from '../templates/MainTemplate';
import TimeLineLongTerm  from '../organisms/TimeLine/TimeLineLongTerm';
import TimeLineMonth  from '../organisms/TimeLine/TimeLineMonth';
import TimeLineWeek  from '../organisms/TimeLine/TimeLineWeek';
import PersonalCalendar  from '../organisms/TimeLine/PersonalCalendar';
import { CALENDAR_PERIOD } from '../../constants/const';
import CButton from '../Atoms/CButton';
import { useWindowSize } from '../../hooks/useWindowSize';
import { LONG_TERM_GROUPS_DATA, LONG_TERM_ITEMS_DATA, MONTH_GROUPS_DATA_BY_PEOPLE, MONTH_ITEMS_DATA_BY_PEOPLE, WEEK_GROUPS_DATA_BY_PEOPLE, WEEK_ITEMS_DATA_BY_PEOPLE } from '../../constants/testData';
import { TimeLineGroupsType, TimeLineItemsType } from '../../types/TimeLineType';
import moment, { Moment } from 'moment'



const PlanPage:VFC = () => {
    const [tabIndex, setTabIndex] = useState<number>(CALENDAR_PERIOD.LONG_TERM);
    const [dateRange, setDateRange] = useState<{visibleTimeStart:Moment, visibleTimeEnd:Moment}>({
        visibleTimeStart:moment().startOf("year"),//1年ごと
        visibleTimeEnd:moment().endOf("year")
    });
    const { winH } = useWindowSize();
    const [groupList,setGroupList] = useState<TimeLineGroupsType>([])
    const [itemList,setItemList] = useState<TimeLineItemsType>([]);

    useEffect(()=>{
        setGroupList(LONG_TERM_GROUPS_DATA);
        setItemList(LONG_TERM_ITEMS_DATA);
    },[])

    /**
     * データ取得
     */
    const getTimeLineData = (type: number, startDate: Moment, finishDate: Moment) => {
        console.log('新しいデータを取得します');
        console.log(type);
    };

    /**
     * タブの切り替えでデータ切り替え
     */
    const onChangeTab = (idx:number) => {
        switch(idx){
            case CALENDAR_PERIOD.LONG_TERM:
                setGroupList(LONG_TERM_GROUPS_DATA);
                setItemList(LONG_TERM_ITEMS_DATA);
                setDateRange({...dateRange, ...{
                    visibleTimeStart:moment().startOf('year'),
                    visibleTimeEnd:moment().endOf('year')
                }})
                break;
            case CALENDAR_PERIOD.MONTH:
                setGroupList(MONTH_GROUPS_DATA_BY_PEOPLE);
                setItemList(MONTH_ITEMS_DATA_BY_PEOPLE);
                setDateRange({...dateRange, ...{
                    visibleTimeStart:moment().startOf('month'),
                    visibleTimeEnd:moment().endOf('month')
                }})
                break;
            case CALENDAR_PERIOD.WEEK:
                setGroupList(WEEK_GROUPS_DATA_BY_PEOPLE);
                setItemList(WEEK_ITEMS_DATA_BY_PEOPLE);
                setDateRange({...dateRange, ...{
                    visibleTimeStart:moment().startOf('week'),
                    visibleTimeEnd:moment().endOf('week')
                }})
                break;
        }
        setTabIndex(idx)
    }

    /**
     * 期間を設定
     */
    const handleSetDateRange = (visibleTimeStart:Moment, visibleTimeEnd:Moment) => {
        setDateRange({...dateRange, ...{visibleTimeStart, visibleTimeEnd,}})
    }

    return (
        <>
            <MainTemplate>
                <Tabs index={tabIndex} onChange={(index) => onChangeTab(index)}>
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
                            <Box mr={4}>
                                <Input 
                                    type="date"
                                    size="sm"
                                    onChange={(e)=>{console.log(e.target.value)}}
                                    value={dateRange.visibleTimeStart.format("YYYY-MM-DD")}
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
                                <TimeLineLongTerm 
                                    mainAreaH={winH}
                                    groups={groupList}
                                    items={itemList}
                                    dateRange={dateRange}
                                    handleSetDateRange={handleSetDateRange}
                                    getData={getTimeLineData}
                                />
                            }
                        </TabPanel>
                        <TabPanel>
                            {tabIndex === CALENDAR_PERIOD.MONTH &&
                                <TimeLineMonth 
                                    mainAreaH={winH}
                                    groups={groupList}
                                    items={itemList}
                                    dateRange={dateRange}
                                    handleSetDateRange={handleSetDateRange}
                                    getData={getTimeLineData}
                                />
                            }
                        </TabPanel>
                        <TabPanel>
                            {tabIndex === CALENDAR_PERIOD.WEEK &&
                                <TimeLineWeek 
                                    mainAreaH={winH}
                                    groups={groupList}
                                    items={itemList}
                                    dateRange={dateRange}
                                    handleSetDateRange={handleSetDateRange}
                                    getData={getTimeLineData}
                                />
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
