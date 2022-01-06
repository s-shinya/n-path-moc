
import React, { useCallback, useState, VFC } from 'react';
import moment, { Moment } from 'moment'
import CustomTimeLine from './CustomTimeLine';
import PageTurnButtons from '../../molecules/PageTurnButtons';
import { CALENDAR_TAB, DISPLAY_TIMELINE_Y_TYPE } from '../../../constants/const';
import { Box, Flex, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import ColorBox from '../../Atoms/ColorBox';
import { getTimeLineItem, TimeLineType } from '../../../types/TimeLineType';

const TimeLineMonth: VFC<TimeLineType> = (props) => {
    const {mainAreaH, groups, items, dateRange, handleSetDateRange, getData, getItemDate} = props;
    const [displayYType, setDisplayYType] = useState(DISPLAY_TIMELINE_Y_TYPE.CONSTRUCTION);

    const onChangeRadio = (v:string) => {
        getData(dateRange.visibleTimeStart, dateRange.visibleTimeEnd, v)
        setDisplayYType(v);
    }

    const onClickPrev = () => {
        const startDate: Moment = dateRange.visibleTimeStart.add(-1, 'month').startOf('month');
        const finishDate: Moment = dateRange.visibleTimeEnd.add(-1, 'month').endOf('month');
        getData(startDate, finishDate, displayYType)
        handleSetDateRange(startDate, finishDate);
    }

    const onClickNext = () => {
        const startDate: Moment = dateRange.visibleTimeStart.add(1, 'month').startOf('month');
        const finishDate: Moment = dateRange.visibleTimeEnd.add(1, 'month').endOf('month');
        getData(startDate, finishDate, displayYType)
        handleSetDateRange(startDate, finishDate);
    }

    const onItemSelect = (data:getTimeLineItem) => {
        (displayYType === DISPLAY_TIMELINE_Y_TYPE.CONSTRUCTION)
        ? getItemDate(data.identification_id, false)
        : getItemDate(data.identification_id, data.is_personal_schedule);
    }

    return (
        <>
            <Flex justifyContent='space-between' alignItems='center' mb={2}>
                <Box w='30%'>
                    <RadioGroup 
                        value={displayYType}
                        onChange={(v)=>onChangeRadio(v)} 
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
                        <Text ml={1}>工事依頼書承認済案件</Text>
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
                calendarPeriod={CALENDAR_TAB.MONTH}
                primaryDateHeaderLabelFormat="YYYY-M"
                secondaryDateHeaderLabelFormat="DD"
                isRightSidebar={false}
                sidebarTitle={displayYType === DISPLAY_TIMELINE_Y_TYPE.CONSTRUCTION ? '工事案件名' : 'ユーザー名'}
                onItemSelect={onItemSelect}
            />
        </>
    )
}

export default TimeLineMonth

