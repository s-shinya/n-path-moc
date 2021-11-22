/* tslint:disable */

import React, { useCallback, useState, VFC } from 'react';
import { TestTimeLine } from './TestTimeLine';
import moment from 'moment'

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
]

const items = [
    {
        id: 1,
        group: 1,
        title: '',
        start_time: moment().add(0, 'day').valueOf(),
        end_time: moment().add(1, 'day').valueOf(),
        bgColor: "#F56565",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#63171B",
    },
    {
        id: 2,
        group: 2,
        title: '',
        start_time: moment().add(-0.5, 'day').valueOf(),
        end_time: moment().add(0.5, 'day').valueOf(),
        bgColor: "#0BC5EA",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#065666",
    },
    {
        id: 3,
        group: 3,
        title: '',
        start_time: moment().add(2, 'day').valueOf(),
        end_time: moment().add(3, 'day').valueOf(),
        bgColor: "#48BB78",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#1C4532",
    },
]
const items2 = [
    {
        id: 1,
        group: 1,
        title: 'item 1',
        start_time: moment().add(40, 'day').valueOf(),
        end_time: moment().add(41, 'day').valueOf(),
        bgColor: "#F56565",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#63171B",
    },
]


export const TimeLinePage: VFC = () => {
    const [groupList,setGroupList] = useState(groups)
    const [itemList,setItemList] = useState(items);


    const onItemDoubleClick = useCallback((itemId, e, time,)=>{
        alert(`itemId：${itemId}`)
    }, []);

    const onItemResize = useCallback((itemId, time, edge)=>{
        // start endで画面跨ぐ場合はその部分変更できないようにする
        const newList = itemList.map((v)=>{
            if(v.id !== itemId) return v;
            if(edge === 'left' && time < v.end_time) v.start_time = time; // 開始時間
            if(edge === 'right' && time > v.start_time) v.end_time = time; // 終了時間
            return v;
        });
        setItemList(newList);
    }, [itemList]);

    const onItemMove = useCallback((itemId, dragTime, newGroupOrder)=>{
        // start endで画面跨ぐ場合はその部分変更できないようにする
        const newList = itemList.map((v)=>{
            if(v.id === itemId) {
                v.end_time = dragTime + (v.end_time - v.start_time);
                v.start_time = dragTime;
            };
            return v;
        });
        setItemList(newList);
    }, [itemList]);

    const getItemList = useCallback((startDate) => {
        setItemList(items2);
    },[])


    return (
        <div style={{
            backgroundColor:'#E2E8F0',
            height:'100%'
        }}>
            <p style={{margin:0}}>タイムラインページ</p>
            <div style={{
                // padding:'16px',
                backgroundColor: '#fff'//タイムラインの背景は白にする
            }}>
                <TestTimeLine
                    groups={groupList}
                    items={itemList}
                    onItemDoubleClick={onItemDoubleClick}
                    onItemResize={onItemResize}
                    onItemMove={onItemMove}
                    getItemList={getItemList}
                />
            </div>
        </div>
    )
}


