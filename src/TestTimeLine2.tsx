/* tslint:disable @typescript-eslint/no-unused-vars */

import React, { useCallback, useState, VFC } from 'react';
// make sure you include the timeline stylesheet or the timeline will not be styled
// import 'react-calendar-timeline/lib/Timeline.css'
import './Style.scss'
import moment, { Moment } from 'moment'
import TimeLine, { CustomMarker, DateHeader, SidebarHeader, TimelineHeaders, TimelineMarkers, TodayMarker, ReactCalendarTimelineProps, ReactCalendarGroupRendererProps, ReactCalendarItemRendererProps } from 'react-calendar-timeline';

type ItemRendererProps = ReactCalendarItemRendererProps
const ItemRenderer:VFC<ItemRendererProps> = (props) => {
    const { item, itemContext, getItemProps, getResizeProps } = props
    const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();
    const backgroundColor = itemContext.selected ? (itemContext.dragging ? item.selectedBgColor : item.selectedBgColor) : item.bgColor;
    const textColor = itemContext.selected ? '#975A16' : item.color;
    const startLabel = (item.start_label) ? item.start_label : null;
    const endLabel = (item.end_label) ? item.end_label : null;

    return (
        <div
            {...getItemProps({
            style: {
                backgroundColor,
                color: textColor,
                borderColor: item.color,
                borderStyle: "solid",
                borderWidth: 1,
                borderRadius: 4,
                borderLeftWidth: itemContext.selected ? 3 : 1,
                borderRightWidth: itemContext.selected ? 3 : 1,
                position:'relative'
            },
            // onMouseDown: () => {
            //     alert("on item click"+ item);
            // }
            })}
        >
            {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : null}
    
            <div
                style={{
                    height: itemContext.dimensions.height,
                    overflow: "hidden",
                    paddingLeft: 3,
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                }}
            >
                {itemContext.title}
            </div>
                
                {/* ラベル */}
                {(startLabel !== null && endLabel !== null) &&
                    <div
                        style={{
                            display:'flex',
                            justifyContent:'space-between',
                            alignItems:'center',
                            position:'absolute',
                            top:'-9px',
                            left:'50%',
                            transform: 'translate(-50%,-50%)', 
                            color:'#2D3748',//gray.700
                            whiteSpace: "nowrap",
                            // backgroundColor:'red'
                            width:'100%',
                            minWidth: '36px'
                        }}
                    >
                        <div
                            style={{display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#FEEBC8',borderRadius: '50%', height: '16px', width:'16px', border: '1px solid #FBD38D'}}
                        >
                            <p style={{margin:0, fontSize:'11px'}}>{startLabel}</p>
                        </div>
                        <div
                            style={{display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#FEEBC8',borderRadius: '50%', height: '16px', width:'16px', border: '1px solid #FBD38D'}}
                        >
                            <p style={{margin:0, fontSize:'11px'}}>{endLabel}</p>
                        </div>
                    </div>
                }
    
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
    dateRange: {visibleTimeStart:Moment, visibleTimeEnd:Moment};
    primaryDateHeaderLabelFormat: string;
    secondaryDateHeaderLabelFormat: string;
    isRightSidebar: boolean;
    onItemSelect: ReactCalendarTimelineProps['onItemSelect'];
}
export const TestTimeLine2: VFC<Props> = (props) => {
    const {items, groups, dateRange, primaryDateHeaderLabelFormat, secondaryDateHeaderLabelFormat, isRightSidebar, onItemSelect} = props;

    return (
        <>
        <TimeLine
            // groupRenderer= {GroupRenderer}
            selected={[]}//選択状態にさせないようにする
            itemRenderer = {ItemRenderer}
            groups={groups}
            items={items}
            // sidebarWidth={300}
            // rightSidebarWidth={100}
            rightSidebarWidth={(isRightSidebar) ? 100 : 0}
            canMove={false} //itemを動かす
            canResize={false} //itemの伸び縮み方向
            canChangeGroup={false}//グループ間の移動禁止
            onItemSelect={onItemSelect}//選択時（対象データを編集データとして保持）
            // onItemDeselect={(e)=>{}}//選択解除時（変更内容を登録）
            // onBoundsChange={()=>{}//カレンダー変えた時
            onTimeChange={(visibleTimeStart, visibleTimeEnd, updateScrollCanvas)=>{//左右に引っ張ってscrollさせない
                updateScrollCanvas(dateRange.visibleTimeStart.valueOf(), dateRange.visibleTimeEnd.valueOf());
            }}
            // onItemClick={(itemId, e, time)=>{}}//クリック時

            // minResizeWidth={40}
            lineHeight={48}//行の高さ
            itemHeightRatio={0.35}//itemの高さ
            stackItems={true}//アイテムを互いに積み重ねて、時間が衝突したときに視覚的に重ならないようにします


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
            // sidebarContent={<div>left</div>}
            // rightSidebarContent={<div>right</div>}
            // itemTouchSendsClick={false}
        >
            <TimelineHeaders 
                style={{//header固定
                    position: 'sticky',
                    top:0,
                    zIndex:10000,
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
                {isRightSidebar &&
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
                }
                <DateHeader 
                    unit="primaryHeader" 
                    // labelFormat="yyyy/MM"
                    // labelFormat="DD"
                    labelFormat={primaryDateHeaderLabelFormat}
                />
                <DateHeader labelFormat={secondaryDateHeaderLabelFormat}/>
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


