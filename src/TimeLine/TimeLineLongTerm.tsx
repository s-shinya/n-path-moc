/* tslint:disable */

import React, { useCallback, useState, VFC } from 'react';
import { TestTimeLine } from '../TestTimeLine';
import moment, { Moment } from 'moment'
import { TestTimeLine2 } from '../TestTimeLine2';
import { PageTurnButtonArea } from '../PageTurnButtonArea';
import { CALENDAR_PERIOD } from './Const';

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
        title: 'トクヤマ東P/S 3号 GIS VCT 設置',
        rightTitle: '名古屋',
    }, 
    { 
        id: 2, 
        title: '大和ハウス宇都宮太陽光発電所 GIS/TR 搬入組立' ,
        rightTitle: '東京',
    },
    { 
        id: 3, 
        title: '中毒電力(株)三隅火力発電所 バイオマス 計測盤搬入' ,
        rightTitle: '広島',
    },
    { 
        id: 4, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 5, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 6, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 7, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 8, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 9, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 10, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 11, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 12, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 13, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 14, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 15, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 16, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 17, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 18, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 19, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 20, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 21, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 22, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 23, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 24, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 25, 
        title: '〇〇' ,
        rightTitle: '××',
    },
]

const items = [
    {
        id: 1,
        group: 1,
        title: "",
        start_time: moment("2021-01-01 00:00:00").valueOf(), //ライン表示の開始日（画面跨ぐ場合は考慮する）
        end_time: moment("2021-03-10 23:59:59").valueOf(),
        bgColor: "#FEB2B2",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#63171B",
        start_label: moment("2020-12-31 00:00:00"), //ライン上部に表示する日付
        is_start_hide: true,
        end_label: moment("2021-03-10 00:00:00"),
        is_end_hide: false,
    },
    {
        id: 2,
        group: 2,
        title: "",
        start_time: moment("2021-10-10 00:00:00").valueOf(),
        end_time: moment("2021-10-11 23:59:59").valueOf(),
        bgColor: "#9DECF9",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#065666",
        start_label: moment("2021-10-10 00:00:00"),
        is_start_hide: false,
        end_label: moment("2021-10-11 00:00:00"),
        is_end_hide: false,
    },
    // {
    //     id: 4,
    //     group: 2,
    //     title: '-2',
    //     start_time: moment('2021-10-10 00:00:00').valueOf(),
    //     end_time: moment('2021-10-11 23:59:59').valueOf(),
    //     bgColor: "#0BC5EA",
    //     selectedBgColor: "rgb(255, 193, 7)",
    //     color: "#065666",
    //     start_label: moment('2021-10-10 00:00:00'),
        // is_start_hide: false,
    //     end_label: moment('2021-10-11 00:00:00'),
        // is_end_hide: false,
    // },
    {
        id: 3,
        group: 3,
        title: "",
        start_time: moment("2021-11-10 00:00:00").valueOf(),
        end_time: moment("2021-12-31 23:59:59").valueOf(),
        bgColor: "#9AE6B4",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#1C4532",
        start_label: moment("2021-11-10 00:00:00"),
        is_start_hide: false,
        end_label: moment("2022-01-02 00:00:00"),
        is_end_hide: true,
    },
];
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


export const TimeLineLongTerm: VFC = () => {
    const [groupList,setGroupList] = useState(groups)
    const [itemList,setItemList] = useState(items);
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
        <div style={{
            backgroundColor:'#E2E8F0',
            height:'100%'
        }}>
            <div>長期計画</div>
            <PageTurnButtonArea 
                handlePrev={handlePrev}
                handleNext={handleNext}
            />
            <div style={{
                // padding:'16px',
                backgroundColor: '#fff'//タイムラインの背景は白にする
            }}>
                <TestTimeLine2 
                    groups={groupList}
                    items={itemList}
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
            </div>
        </div>
    )
}


