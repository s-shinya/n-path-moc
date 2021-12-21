/* tslint:disable @typescript-eslint/no-unused-vars */

import React, { useCallback, useState, VFC } from 'react';
// make sure you include the timeline stylesheet or the timeline will not be styled
// import 'react-calendar-timeline/lib/Timeline.css'
import moment, { Moment } from 'moment'
import TimeLine, { CustomMarker, DateHeader, SidebarHeader, TimelineHeaders, TimelineMarkers, TodayMarker, ReactCalendarTimelineProps, ReactCalendarGroupRendererProps } from 'react-calendar-timeline';

const ItemRenderer:VFC = (props:any) => {
    const { item, timelineContext, itemContext, getItemProps, getResizeProps } = props
    const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();
    const backgroundColor = itemContext.selected ? (itemContext.dragging ? item.selectedBgColor : item.selectedBgColor) : item.bgColor;
    const textColor = itemContext.selected ? '#975A16' : item.color;

    return (
        <div
            {...getItemProps({
            style: {
                backgroundColor,
                color: textColor,
                // borderColor,
                // borderStyle: "solid",
                // borderWidth: 1,
                borderRadius: 4,
                borderLeftWidth: itemContext.selected ? 3 : 1,
                borderRightWidth: itemContext.selected ? 3 : 1
            },
            onMouseDown: () => {
                console.log("on item click", item);
            }
            })}
        >
            {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : null}
    
            <div
            style={{
                height: itemContext.dimensions.height,
                overflow: "hidden",
                paddingLeft: 3,
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
            }}
            >
            {itemContext.title}
            </div>
    
            {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : null}
        </div>
    );
}

// type GroupProps = ReactCalendarGroupRendererProps;
// const GroupRenderer: VFC<GroupProps> = (props) => {
//     const { group, isRightSidebar  } = props;
//     return (
//         <div onClick={()=>console.log(props)}>
//             <span>{group.title}</span>
//         </div>
//     )
// }


type Props = {
    groups: { id: number; title: string; }[];
    items: { id: number; group: number; title: string; start_time: number; end_time: number; bgColor: string; selectedBgColor: string; color: string; }[]; 
    onItemDoubleClick: ReactCalendarTimelineProps["onItemDoubleClick"];
    onItemResize: ReactCalendarTimelineProps["onItemResize"];
    onItemMove: ReactCalendarTimelineProps["onItemMove"];
    getItemList: (startDate:Moment) => void;
}
export const TestTimeLine: VFC<Props> = (props) => {
    const {items, groups, onItemDoubleClick, onItemResize, onItemMove, getItemList} = props;
    const [dateRange, setDateRange] = useState<{visibleTimeStart:Moment, visibleTimeEnd:Moment}>({
        visibleTimeStart:moment().startOf("month"),
        visibleTimeEnd:moment().startOf("month").add(1, "month") //1ヶ月ごと
    });
    const today = new Date();


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



    return (
        <>
        <div style={{
            display:'flex',
            padding: '0 ,8'
        }}>
            <button type="button"
                onClick={handlePrev}
            >前へ</button>
            <button type="button"
                onClick={handleNext}
            >次へ</button>
        </div>
        <TimeLine
            // groupRenderer= {GroupRenderer}
            itemRenderer = {ItemRenderer}
            groups={groups}
            items={items}
            // sidebarWidth={300}
            rightSidebarWidth={100}
            canMove={true} //itemを動かす
            canResize={'both'} //itemの伸び縮み方向
            canChangeGroup={false}//グループ間の移動禁止
            onItemDoubleClick={onItemDoubleClick}//ダブルクリック時
            onItemResize={onItemResize}//リサイズ
            onItemMove={onItemMove}//ドロップ時
            onItemSelect={(itemId, e, time)=>{//選択時（対象データを編集データとして保持）
                console.log(`onItemSelect`)
            }}
            onItemDeselect={(e)=>{//選択解除時（変更内容を登録）
                console.log(`onItemDeselect`)
            }}
            onBoundsChange={()=>{//カレンダー変えた時
                console.log(`onBoundsChange`);
            }}
            onTimeChange={(visibleTimeStart, visibleTimeEnd, updateScrollCanvas)=>{//左右に引っ張ってscrollさせない
                // console.log(`onTimeChange`)
                // console.log(visibleTimeStart)
                // console.log(dateRange.visibleTimeStart.valueOf())
                // console.log(visibleTimeEnd)
                updateScrollCanvas(dateRange.visibleTimeStart.valueOf(), dateRange.visibleTimeEnd.valueOf());
            }}
            // onItemClick={(itemId, e, time)=>{//クリック時
            //     console.log(`onItemClick`)
            //     console.log(itemId)
            //     console.log(e)
            //     console.log(time)
            // }}
            // onItemDrag={()=>{//ドラッグ中
            //     console.log(`onItemDrag`)
            // }}


            // minResizeWidth={40}
            lineHeight={60}//行の高さ


            // // visibleTimeStart={dateRange.visibleTimeStart.valueOf()}//日にち固定でzoom不可
            // // visibleTimeEnd={dateRange.visibleTimeEnd.valueOf()}//日にち固定でzoom不可
            // // defaultTimeStart={moment().add(-15, 'day')}
            // // defaultTimeEnd={moment().add(15, 'day')}
            // defaultTimeStart={dateRange.visibleTimeStart}
            // defaultTimeEnd={dateRange.visibleTimeEnd}
            visibleTimeStart={dateRange.visibleTimeStart.valueOf()}
            visibleTimeEnd={dateRange.visibleTimeEnd.valueOf()}
            

            // // minZoom={60 * 60 * 24 * 1000}//1日
            // minZoom={60 * 60 * 24 * 7 * 1000}//7日
            // maxZoom={60 * 60 * 24 * 30 * 2 * 1000}//2ヶ月
            // // maxZoom={365.24 * 86400 * 1000}//1年
            minZoom={dateRange.visibleTimeEnd.valueOf() - dateRange.visibleTimeStart.valueOf()}//zoomさせない
            maxZoom={dateRange.visibleTimeEnd.valueOf() - dateRange.visibleTimeStart.valueOf()}//zoomさせない

            
            stackItems={true}//アイテムを互いに積み重ねて、時間が衝突したときに視覚的に重ならないようにします
            itemHeightRatio={0.75}

            // sidebarContent={<div>left</div>}
            // rightSidebarContent={<div>right</div>}

            // itemTouchSendsClick={false}
        >
            <TimelineHeaders 
                style={{//header固定
                    position: 'sticky',
                    top:0,
                    zIndex:10000,
                    // top: 0,
                    // z-index: 2000,
                }}
            >
                <SidebarHeader variant="left">
                {({ getRootProps }) => {
                    return (
                        <div {...getRootProps()}>
                            <div style={{height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                <span style={{color:'#fff',fontWeight:'bold'}}>工事案件名</span>
                            </div>
                        </div>
                    )
                    }}
                </SidebarHeader>
                <SidebarHeader variant="right">
                {({ getRootProps }) => {
                    return (
                        <div {...getRootProps()}>
                            <div style={{height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                <span style={{color:'#fff',fontWeight:'bold', display:'flex',justifyContent:'center',alignItems:'center'}}>窓口</span>
                            </div>
                        </div>
                    )
                    }}
                </SidebarHeader>
                <DateHeader 
                    unit="primaryHeader" 
                    labelFormat="yyyy/MM"
                />
                <DateHeader labelFormat="DD"/>
                {/* <DateHeader
                    unit="day"
                    labelFormat="MM/DD"
                    style={{ height: 50 }}
                    // data={{someData: 'example'}}
                    // intervalRenderer={({ getIntervalProps, intervalContext, data }) => {
                    //     return (
                    //         <div {...getIntervalProps()}>
                    //             {intervalContext.intervalText}
                    //             {data.example}
                    //         </div>
                    //     )
                    // }}
                /> */}
            </TimelineHeaders>

            {/* <TimelineMarkers>
                <CustomMarker date={today} />
            </TimelineMarkers> */}

        </TimeLine>
        </>
    )
}


