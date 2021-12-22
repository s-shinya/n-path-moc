/* tslint:disable */

import React, { useCallback, useState, VFC } from 'react';
import moment, { Moment } from 'moment'
import CustomTimeLine from './CustomTimeLine';
import PageTurnButtons from '../../molecules/PageTurnButtons';
import { CALENDAR_PERIOD } from '../../../constants/const';
import { Flex, Box, Text, Stack } from '@chakra-ui/react';
import ColorBox from '../../Atoms/ColorBox';
import { TimeLineType } from '../../../types/TimeLineType';

type Props = TimeLineType & {
    mainAreaH: number;
}
const TimeLineLongTerm: VFC<Props> = (props) => {
    const {mainAreaH, groups, items} = props
    const [dateRange, setDateRange] = useState<{visibleTimeStart:Moment, visibleTimeEnd:Moment}>({
        visibleTimeStart:moment().startOf("year"),//1年ごと
        visibleTimeEnd:moment().endOf("year")
    });

    const getItemList = useCallback((startDate) => {
        // setItemList(items2);
    },[])

    const handlePrev = useCallback(()=>{
        //1ヶ月ごと
        const startDate = dateRange.visibleTimeStart.add(-1, 'year');
        getItemList(startDate)
        setDateRange({...dateRange, ...{
            visibleTimeStart: startDate,
            visibleTimeEnd: dateRange.visibleTimeEnd.add(-1, 'year')
        }})
    }, [dateRange, getItemList])

    const handleNext = useCallback(()=>{
        //1ヶ月ごと
        const startDate = dateRange.visibleTimeStart.add(1, 'year');
        getItemList(startDate)
        setDateRange({...dateRange, ...{
            visibleTimeStart: startDate,
            visibleTimeEnd: dateRange.visibleTimeEnd.add(1, 'year')
        }})
    }, [dateRange, getItemList])

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
                        handlePrev={handlePrev}
                        handleNext={handleNext}
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

