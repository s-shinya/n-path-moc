
import React, { useCallback, useState, VFC } from 'react';
import moment, { Moment } from 'moment'
import CustomTimeLine from './CustomTimeLine';
import PageTurnButtons from '../../molecules/PageTurnButtons';
import { CALENDAR_TAB } from '../../../constants/const';
import { Flex, Box, Text, Stack } from '@chakra-ui/react';
import ColorBox from '../../Atoms/ColorBox';
import { TimeLineType } from '../../../types/TimeLineType';

const TimeLineLongTerm: VFC<TimeLineType> = (props) => {
    const {mainAreaH, groups, items, dateRange, handleSetDateRange, getData, onItemSelect} = props;

    const onClickPrev = ()=>{
        const startDate: Moment = dateRange.visibleTimeStart.add(-1, 'year');
        const finishDate: Moment = dateRange.visibleTimeEnd.add(-1, 'year')
        getData(startDate, finishDate)
        handleSetDateRange(startDate, finishDate);
    }

    const onClickNext = ()=>{
        const startDate: Moment = dateRange.visibleTimeStart.add(1, 'year');
        const finishDate: Moment = dateRange.visibleTimeEnd.add(1, 'year')
        getData(startDate, finishDate)
        handleSetDateRange(startDate, finishDate);
    }

    return (
        <>
            <Flex justifyContent='space-between' alignItems='center' mb={2}>
                <Box w='20%'></Box>
                <Stack direction='row' w='40%' justifyContent="center">
                    <Flex alignItems='center'>
                        <ColorBox bg='blue'/>
                        <Text ml={1}>工事受注済案件</Text>
                    </Flex>
                    <Flex alignItems='center'>
                        <ColorBox bg='green'/>
                        <Text ml={1}>工事依頼書承認済案件</Text>
                    </Flex>
                    <Flex alignItems='center'>
                        <ColorBox bg='red'/>
                        <Text ml={1}>工事完了案件</Text>
                    </Flex>
                </Stack>
                <Box w='20%' textAlign='right'>
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
                calendarPeriod={CALENDAR_TAB.LONG_TERM}
                primaryDateHeaderLabelFormat="YYYY"
                secondaryDateHeaderLabelFormat="M"
                sidebarTitle="工事案件名"
                isRightSidebar={true}
                rightSidebarTitle="窓口"
                onItemSelect={onItemSelect}
            />
        </>
    )
}
export default TimeLineLongTerm;

