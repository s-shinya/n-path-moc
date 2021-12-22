/* tslint:disable */

import React, { useCallback, useState, VFC } from 'react';
import moment, { Moment } from 'moment'
import CustomTimeLine from './CustomTimeLine';
import PageTurnButtons from '../../molecules/PageTurnButtons';
import { CALENDAR_PERIOD } from '../../../constants/const';
import { Flex, Box, Text, Stack } from '@chakra-ui/react';
import ColorBox from '../../Atoms/ColorBox';
import { TimeLineType } from '../../../types/TimeLineType';

const TimeLineLongTerm: VFC<TimeLineType> = (props) => {
    const {mainAreaH, groups, items, getData} = props;
    const [dateRange, setDateRange] = useState<{visibleTimeStart:Moment, visibleTimeEnd:Moment}>({
        visibleTimeStart:moment().startOf("year"),//1年ごと
        visibleTimeEnd:moment().endOf("year")
    });

    const onClickPrev = useCallback(()=>{
        const startDate: Moment = dateRange.visibleTimeStart.add(-1, 'year');
        const finishDate: Moment = dateRange.visibleTimeEnd.add(-1, 'year')
        getData(CALENDAR_PERIOD.LONG_TERM, startDate, finishDate)
        setDateRange({...dateRange, ...{
            visibleTimeStart: startDate,
            visibleTimeEnd: finishDate
        }})
    }, [dateRange, getData])

    const onClickNext = useCallback(()=>{
        const startDate: Moment = dateRange.visibleTimeStart.add(1, 'year');
        const finishDate: Moment = dateRange.visibleTimeEnd.add(1, 'year')
        getData(CALENDAR_PERIOD.LONG_TERM, startDate, finishDate)
        setDateRange({...dateRange, ...{
            visibleTimeStart: startDate,
            visibleTimeEnd: finishDate
        }})
    }, [dateRange, getData])

    const onItemSelect = useCallback((itemId, e, time) => {
        alert(`onItemSelect：${itemId}`)
    }, [])

    return (
        <>
            <Flex justifyContent='space-between' alignItems='center' mb={2}>
                <Box w='30%'></Box>
                <Stack direction='row' w='30%' justifyContent="center">
                    <Flex alignItems='center'>
                        <ColorBox bg='blue'/>
                        <Text ml={1}>工事受注案件</Text>
                    </Flex>
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
                // primaryDateHeaderLabelFormat="yyyy/MM"
                // secondaryDateHeaderLabelFormat="DD"
                primaryDateHeaderLabelFormat="yyyy"
                secondaryDateHeaderLabelFormat="MM"
                sidebarTitle="工事案件名"
                isRightSidebar={true}
                rightSidebarTitle="窓口"
                calendarPeriod={CALENDAR_PERIOD.LONG_TERM}
                onItemSelect={onItemSelect}
            />
        </>
    )
}
export default TimeLineLongTerm;

