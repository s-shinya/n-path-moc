/* tslint:disable */

import React, { useCallback, useState, VFC } from 'react';
import moment, { Moment } from 'moment'
import CustomTimeLine from './CustomTimeLine';
import PageTurnButtons from '../../molecules/PageTurnButtons';
import { CALENDAR_PERIOD, DISABLE_TIMELINE_Y_TYPE } from '../../../constants/const';
import { Box, Flex, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import ColorBox from '../../Atoms/ColorBox';

// const groups = [
//     { 
//         id: 1, 
//         title: 'トクヤマ東P/S 3号 GIS VCT 設置',
//         rightTitle: '名古屋',
//     }, 
//     { 
//         id: 2, 
//         title: '大和ハウス宇都宮太陽光発電所 GIS/TR 搬入組立' ,
//         rightTitle: '東京',
//     }
// ]

// const items = [
//     {
//         id: 1,
//         group: 1,
//         title: 'item 1',
//         start_time: moment().add(0, 'day').valueOf(),
//         end_time: moment().add(1, 'day').valueOf(),
//         bgColor: "#F56565",
//         selectedBgColor: "rgb(255, 193, 7)",
//         color: "#63171B",
//     },
//     {
//         id: 2,
//         group: 2,
//         title: 'item 2',
//         start_time: moment().add(-0.5, 'day').valueOf(),
//         end_time: moment().add(0.5, 'day').valueOf(),
//         bgColor: "#0BC5EA",
//         selectedBgColor: "rgb(255, 193, 7)",
//         color: "#065666",
//     },
//     {
//         id: 3,
//         group: 1,
//         title: 'item 3',
//         start_time: moment().add(2, 'day').valueOf(),
//         end_time: moment().add(3, 'day').valueOf(),
//         bgColor: "#48BB78",
//         selectedBgColor: "rgb(255, 193, 7)",
//         color: "#1C4532",
//     },
//     {
//         id: 4,
//         group: 1,
//         title: 'item 4',
//         start_time: moment().add(2, 'day').valueOf(),
//         end_time: moment().add(3, 'day').valueOf(),
//         bgColor: "black",
//         selectedBgColor: "blue",
//         color: "red",
//     }
// ]

const groups = [
    { 
        id: 1, 
        title: '山田太郎',
    }, 
    { 
        id: 2, 
        title: '田中角栄' ,
    },
    { 
        id: 3, 
        title: '鈴木一郎' ,
    },
    { 
        id: 4, 
        title: '〇〇' ,
    },
    { 
        id: 5, 
        title: '〇〇' ,
    },
    { 
        id: 6, 
        title: '〇〇' ,
    },
    { 
        id: 7, 
        title: '〇〇' ,
    },
    { 
        id: 8, 
        title: '〇〇' ,
    },
    { 
        id: 9, 
        title: '〇〇' ,
    },
    { 
        id: 10, 
        title: '〇〇' ,
    },
    { 
        id: 11, 
        title: '〇〇' ,
    },
    { 
        id: 12, 
        title: '〇〇' ,
    },
    { 
        id: 13, 
        title: '〇〇' ,
    },
    { 
        id: 14, 
        title: '〇〇' ,
    },
    { 
        id: 15, 
        title: '〇〇' ,
    },
    { 
        id: 16, 
        title: '〇〇' ,
    },
    { 
        id: 17, 
        title: '〇〇' ,
    },
    { 
        id: 18, 
        title: '〇〇' ,
    },
    { 
        id: 19, 
        title: '〇〇' ,
    },
    { 
        id: 20, 
        title: '〇〇' ,
    },
    { 
        id: 21, 
        title: '〇〇' ,
    },
    { 
        id: 22, 
        title: '〇〇' ,
    },
    { 
        id: 23, 
        title: '〇〇' ,
    },
    { 
        id: 24, 
        title: '〇〇' ,
    },
    { 
        id: 25, 
        title: '〇〇' ,
    },
]

const items = [
    {
        id: 1,
        group: 1,
        title: '山陽特殊製鋼姫路',
        start_time: moment('2021-12-01 00:00:00').valueOf(),//ライン表示の開始日（画面跨ぐ場合は考慮する）
        end_time: moment('2021-12-20 23:59:59').valueOf(),
        bgColor: "#9AE6B4",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#1C4532",
        start_label:moment('2021-10-31 00:00:00'),//ライン上部に表示する日付
        is_start_hide: true,
        end_label: moment('2021-12-20 00:00:00'),
        is_end_hide: false,
    },
    {
        id: 2,
        group: 2,
        title: '広島西郵便局',
        start_time: moment('2021-12-10 00:00:00').valueOf(),
        end_time: moment('2021-12-11 23:59:59').valueOf(),
        bgColor: "#9DECF9",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#065666",
        start_label: moment('2021-12-10 00:00:00'),
        is_start_hide: false,
        end_label: moment('2021-10-11 00:00:00'),
        is_end_hide: false,
    },
    {
        id: 4,
        group: 3,
        title: '広島西郵便局',
        start_time: moment('2021-12-10 00:00:00').valueOf(),
        end_time: moment('2021-12-11 23:59:59').valueOf(),
        bgColor: "#9DECF9",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#065666",
        start_label: moment('2021-12-10 00:00:00'),
        is_start_hide: false,
        end_label: moment('2021-10-11 00:00:00'),
        is_end_hide: false,
    },
    {
        id: 3,
        group: 3,
        title: '中部国際医療センター',
        start_time: moment('2021-12-13 00:00:00').valueOf(),
        end_time: moment('2021-12-30 23:59:59').valueOf(),
        bgColor: "#9AE6B4",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#1C4532",
        start_label: moment('2021-12-13 00:00:00'),
        is_start_hide: false,
        end_label: moment('2022-01-01 00:00:00'),
        is_end_hide: true,
    },
]
const items2 = [
    {
        id: 1,
        group: 1,
        title: 'item 1',
        start_time: moment('2022-11-29 00:00:00').valueOf(),
        end_time: moment('2022-12-29 00:00:00').valueOf(),
        bgColor: "#F56565",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#63171B",
    },
]


type Props = {
    mainAreaH: number;
}
const TimeLineMonth: VFC<Props> = (props) => {
    const {mainAreaH} = props;
    const [groupList,setGroupList] = useState(groups)
    const [itemList,setItemList] = useState(items);
    const [dateRange, setDateRange] = useState<{visibleTimeStart:Moment, visibleTimeEnd:Moment}>({
        visibleTimeStart:moment().startOf("month"),//1ヶ月ごと
        visibleTimeEnd:moment().endOf("month")
    });
    const [disableYType, setDisableYType] = useState(DISABLE_TIMELINE_Y_TYPE.CONSTRUCTION);
    const getItemList = useCallback((startDate) => {
        // setItemList(items2);
    },[])

    const handlePrev = useCallback(()=>{
        //1ヶ月ごと
        const startDate = dateRange.visibleTimeStart.add(-1, 'month');
        getItemList(startDate)
        setDateRange({...dateRange, ...{
            visibleTimeStart: startDate,
            visibleTimeEnd: dateRange.visibleTimeEnd.add(-1, 'month')
        }})
    }, [dateRange, getItemList])

    const handleNext = useCallback(()=>{
        //1ヶ月ごと
        const startDate = dateRange.visibleTimeStart.add(1, 'month');
        getItemList(startDate)
        setDateRange({...dateRange, ...{
            visibleTimeStart: startDate,
            visibleTimeEnd: dateRange.visibleTimeEnd.add(1, 'month')
        }})
    }, [dateRange, getItemList])

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
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                    />
                </Box>
            </Flex>
            <CustomTimeLine 
                mainAreaH={mainAreaH}
                groups={groupList}
                items={itemList}
                dateRange={dateRange}
                primaryDateHeaderLabelFormat="yyyy-MM"
                secondaryDateHeaderLabelFormat="DD"
                isRightSidebar={false}
                sidebarTitle="ユーザー名"
                calendarPeriod={CALENDAR_PERIOD.MONTH}
                onItemSelect={onItemSelect}
            />
        </>
    )
}

export default TimeLineMonth

