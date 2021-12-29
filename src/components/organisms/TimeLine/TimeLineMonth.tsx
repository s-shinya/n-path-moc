/* tslint:disable */

import React, { useCallback, useState, VFC } from 'react';
import moment, { Moment } from 'moment'
import CustomTimeLine from './CustomTimeLine';
import PageTurnButtons from '../../molecules/PageTurnButtons';
import { CALENDAR_TAB, DISABLE_TIMELINE_Y_TYPE } from '../../../constants/const';
import { Box, Flex, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import ColorBox from '../../Atoms/ColorBox';
import { TimeLineType } from '../../../types/TimeLineType';

const TimeLineMonth: VFC<TimeLineType> = (props) => {
    const {mainAreaH, groups, items, dateRange, handleSetDateRange, getData, onItemSelect} = props;
    const [disableYType, setDisableYType] = useState(DISABLE_TIMELINE_Y_TYPE.CONSTRUCTION);

    const onChangeRadio = (v:string) => {
        getData(dateRange.visibleTimeStart, dateRange.visibleTimeEnd, v)
        setDisableYType(v);
    }

    const onClickPrev = () => {
        const startDate: Moment = dateRange.visibleTimeStart.add(-1, 'month');
        const finishDate: Moment = dateRange.visibleTimeEnd.add(-1, 'month');
        getData(startDate, finishDate, disableYType)
        handleSetDateRange(startDate, finishDate);
    }

    const onClickNext = () => {
        const startDate: Moment = dateRange.visibleTimeStart.add(1, 'month');
        const finishDate: Moment = dateRange.visibleTimeEnd.add(1, 'month');
        getData(startDate, finishDate, disableYType)
        handleSetDateRange(startDate, finishDate);
    }

    return (
        <>
            <Flex justifyContent='space-between' alignItems='center' mb={2}>
                <Box w='30%'>
                    <RadioGroup 
                        value={disableYType}
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
                primaryDateHeaderLabelFormat="YYYY-MM"
                secondaryDateHeaderLabelFormat="DD"
                isRightSidebar={false}
                sidebarTitle={disableYType === DISABLE_TIMELINE_Y_TYPE.CONSTRUCTION ? '工事案件名' : 'ユーザー名'}
                calendarPeriod={CALENDAR_TAB.MONTH}
                onItemSelect={onItemSelect}
            />
        </>
    )
}

export default TimeLineMonth

