import React, { useState, VFC, useRef, useEffect } from 'react';
import {
    Tabs,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
    Flex,
    Box,
    Select,
    Input,
    Stack
} from "@chakra-ui/react";
import MainTemplate from '../templates/MainTemplate';
import TimeLineLongTerm  from '../organisms/TimeLine/TimeLineLongTerm';
import TimeLineMonth  from '../organisms/TimeLine/TimeLineMonth';
import TimeLineWeek  from '../organisms/TimeLine/TimeLineWeek';
import PersonalCalendar  from '../organisms/TimeLine/PersonalCalendar';
import { CALENDAR_TAB, DISPLAY_TIMELINE_Y_TYPE } from '../../constants/const';
import CButton from '../Atoms/CButton';
import { useWindowSize } from '../../hooks/useWindowSize';
import { LONG_TERM_GROUPS_DATA, LONG_TERM_ITEMS_DATA, MONTH_GROUPS_DATA_BY_CONSTRUCTION, MONTH_GROUPS_DATA_BY_PEOPLE, MONTH_ITEMS_DATA_BY_CONSTRUCTION, MONTH_ITEMS_DATA_BY_PEOPLE, WEEK_GROUPS_DATA_BY_CONSTRUCTION, WEEK_GROUPS_DATA_BY_PEOPLE, WEEK_ITEMS_DATA_BY_CONSTRUCTION, WEEK_ITEMS_DATA_BY_PEOPLE } from '../../constants/testData';
import { GetTimelineDataType, TimeLineGroupsType, TimeLineItemType } from '../../types/TimeLineType';
import moment, { Moment } from 'moment'

const PlanPage:VFC = () => {
    const [tabIndex, setTabIndex] = useState<number>(CALENDAR_TAB.LONG_TERM);
    const [dateRange, setDateRange] = useState<{visibleTimeStart:Moment, visibleTimeEnd:Moment}>({
        visibleTimeStart:moment().startOf("year"),//1年ごと
        visibleTimeEnd:moment().endOf("year")
    });
    const { winH } = useWindowSize();
    const [groupList,setGroupList] = useState<TimeLineGroupsType>([])
    const [itemList,setItemList] = useState<TimeLineItemType[]>([]);

    useEffect(()=>{
        setGroupList(LONG_TERM_GROUPS_DATA);
        setItemList(LONG_TERM_ITEMS_DATA);
    },[])

    /**
     * データ取得
     */
    const getTimeLineData:GetTimelineDataType = (
        startDate, 
        finishDate, 
        yDataType = DISPLAY_TIMELINE_Y_TYPE.CONSTRUCTION
    ) => {
        console.log('新しいデータを取得します');
        console.log(tabIndex);
        console.log(yDataType);

        //TODO:本来はAPIで出し訳
        switch(tabIndex){
            case CALENDAR_TAB.MONTH:
                if(yDataType === DISPLAY_TIMELINE_Y_TYPE.CONSTRUCTION){
                    setGroupList(MONTH_GROUPS_DATA_BY_CONSTRUCTION);
                    setItemList(MONTH_ITEMS_DATA_BY_CONSTRUCTION);
                }else{
                    setGroupList(MONTH_GROUPS_DATA_BY_PEOPLE);
                    setItemList(MONTH_ITEMS_DATA_BY_PEOPLE);
                }
                break;
            case CALENDAR_TAB.WEEK:
                if(yDataType === DISPLAY_TIMELINE_Y_TYPE.CONSTRUCTION){
                    setGroupList(WEEK_GROUPS_DATA_BY_CONSTRUCTION);
                    setItemList(WEEK_ITEMS_DATA_BY_CONSTRUCTION);
                }else{
                    setGroupList(WEEK_GROUPS_DATA_BY_PEOPLE);
                    setItemList(WEEK_ITEMS_DATA_BY_PEOPLE);
                }
                break;
        }
    };

    /**
     * タブの切り替えでデータ切り替え
     */
    const onChangeTab = (idx:number) => {
        switch(idx){
            case CALENDAR_TAB.LONG_TERM:
                setGroupList(LONG_TERM_GROUPS_DATA);
                setItemList(LONG_TERM_ITEMS_DATA);
                setDateRange({...dateRange, ...{
                    visibleTimeStart:moment().startOf('year'),
                    visibleTimeEnd:moment().endOf('year')
                }})
                break;
            case CALENDAR_TAB.MONTH:
                setGroupList(MONTH_GROUPS_DATA_BY_CONSTRUCTION);
                setItemList(MONTH_ITEMS_DATA_BY_CONSTRUCTION);
                setDateRange({...dateRange, ...{
                    visibleTimeStart:moment().startOf('month'),
                    visibleTimeEnd:moment().endOf('month')
                }})
                break;
            case CALENDAR_TAB.WEEK:
                setGroupList(WEEK_GROUPS_DATA_BY_CONSTRUCTION);
                setItemList(WEEK_ITEMS_DATA_BY_CONSTRUCTION);
                setDateRange({...dateRange, ...{
                    visibleTimeStart:moment().startOf('week').add(-1, 'day'),
                    visibleTimeEnd:moment().endOf('week').add(-1, 'day')
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

    /**
     * 詳細データ取得
     */
    const getItemDate = (itemId:number, isPersonalSchedule?:boolean) => {
        //TODO:API
        (isPersonalSchedule)
        ? alert(`個人予定取得 ID:${itemId}`)
        : alert(`工事案件詳細 ID:${itemId}`)
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
                        {tabIndex !== CALENDAR_TAB.PERSONAL &&
                            <Stack direction='row' mr={4}>
                                <Box>
                                    <Input 
                                        type="date"
                                        size="sm"
                                        onChange={(e)=>{console.log(e.target.value)}}
                                        value={dateRange.visibleTimeStart.format("YYYY-MM-DD")}
                                    />
                                </Box>
                                <Box>
                                    <Select 
                                        placeholder='部署' 
                                        size='sm' 
                                        onChange={(e)=>{console.log(e.target.value)}}
                                    >
                                        <option value='1'>東京事業所</option>
                                        <option value='2'>名古屋事業所</option>
                                    </Select>
                                </Box>
                                <Box>
                                    <Select 
                                        placeholder='課' 
                                        size='sm' 
                                        onChange={(e)=>{console.log(e.target.value)}}
                                    >
                                        <option value='1'>工事一課</option>
                                        <option value='2'>工事二課</option>
                                    </Select>
                                </Box>
                                <CButton 
                                    size='sm'
                                    onClick={()=>alert('適用')}
                                >適用</CButton>
                                <CButton 
                                    size='sm'
                                    backgroundColor='gray.400'
                                    _hover={{backgroundColor:'gray.500'}}
                                    onClick={()=>alert('クリア')}
                                >クリア</CButton>
                            </Stack>
                    }
                    </TabList>
                    <TabPanels pt={10}>
                        <TabPanel>
                            {tabIndex === CALENDAR_TAB.LONG_TERM &&
                                <TimeLineLongTerm 
                                    mainAreaH={winH}
                                    groups={groupList}
                                    items={itemList}
                                    dateRange={dateRange}
                                    handleSetDateRange={handleSetDateRange}
                                    getData={getTimeLineData}
                                    getItemDate={getItemDate}
                                />
                            }
                        </TabPanel>
                        <TabPanel>
                            {tabIndex === CALENDAR_TAB.MONTH &&
                                <TimeLineMonth 
                                    mainAreaH={winH}
                                    groups={groupList}
                                    items={itemList}
                                    dateRange={dateRange}
                                    handleSetDateRange={handleSetDateRange}
                                    getData={getTimeLineData}
                                    getItemDate={getItemDate}
                                />
                            }
                        </TabPanel>
                        <TabPanel>
                            {tabIndex === CALENDAR_TAB.WEEK &&
                                <TimeLineWeek 
                                    mainAreaH={winH}
                                    groups={groupList}
                                    items={itemList}
                                    dateRange={dateRange}
                                    handleSetDateRange={handleSetDateRange}
                                    getData={getTimeLineData}
                                    getItemDate={getItemDate}
                                />
                            }
                        </TabPanel>
                        <TabPanel>
                            {tabIndex === CALENDAR_TAB.DATE &&
                                <>日計画</>
                            }
                        </TabPanel>
                        <TabPanel>
                            {tabIndex === CALENDAR_TAB.PERSONAL &&
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
