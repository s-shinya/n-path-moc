/* tslint:disable */

import React, { useCallback, useState, VFC } from 'react';
import moment, { Moment } from 'moment'
import CustomTimeLine from './CustomTimeLine';
import PageTurnButtons  from '../../molecules/PageTurnButtons';
import { CALENDAR_PERIOD, DISABLE_TIMELINE_Y_TYPE } from '../../../constants/const';
import { Box, Flex, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import ColorBox from '../../Atoms/ColorBox';
import { TimeLineType } from '../../../types/TimeLineType';

const TimeLineWeek: VFC<TimeLineType> = (props) => {
    const {mainAreaH, groups, items, dateRange, handleSetDateRange, getData} = props;
    const [disableYType, setDisableYType] = useState(DISABLE_TIMELINE_Y_TYPE.CONSTRUCTION);

    const onClickPrev = ()=>{
        const startDate: Moment = dateRange.visibleTimeStart.add(-1, 'week');
        const finishDate: Moment = dateRange.visibleTimeEnd.add(-1, 'week');
        getData(CALENDAR_PERIOD.WEEK, startDate, finishDate)
        handleSetDateRange(startDate, finishDate);
    }

    const onClickNext = ()=>{
        //1週間ごと
        const startDate: Moment = dateRange.visibleTimeStart.add(1, 'week');
        const finishDate: Moment = dateRange.visibleTimeEnd.add(1, 'week');
        getData(CALENDAR_PERIOD.WEEK, startDate, finishDate)
        handleSetDateRange(startDate, finishDate);
    }

    const onItemSelect = useCallback((itemId, e, time) => {
        alert(`onItemSelect：${itemId}`)
    }, [])

    return (
        <>
            <Flex justifyContent='space-between' alignItems='center' mb={2}>
                <Box w='30%'>
                    <RadioGroup 
                        value={disableYType}
                        onChange={(v)=>setDisableYType(v)} 
                    >
                        <Stack direction='row'>
                            <Radio bg='white' borderColor='gray.300' value='1'>工事案件別</Radio>
                            <Radio bg='white' borderColor='gray.300' value='2'>ユーザー別</Radio>
                        </Stack>
                    </RadioGroup>
                </Box>
                <Stack direction='row' w='30%' justifyContent="center">
                    <Flex alignItems='center'>
                        <ColorBox bg='green'/>
                        <Text ml={1}>工事受注活動案件</Text>
                    </Flex>
                    <Flex alignItems='center'>
                        <ColorBox bg='red'/>
                        <Text ml={1}>工事完了案件</Text>
                    </Flex>
                </Stack>
                <Box w='30%' textAlign='right'>
                    <PageTurnButtons 
                        onClickPrev={onClickPrev}
                        onClickNext={onClickNext}
                    />
                </Box>
            </Flex>
            <CustomTimeLine 
                mainAreaH={mainAreaH}
                groups={groups}
                items={items}
                dateRange={dateRange}
                primaryDateHeaderLabelFormat="yyyy-MM"
                secondaryDateHeaderLabelFormat="DD"
                isRightSidebar={false}
                sidebarTitle="ユーザー名"
                calendarPeriod={CALENDAR_PERIOD.WEEK}
                onItemSelect={onItemSelect}
            />
        </>
    )
}

export default TimeLineWeek;


