/* tslint:disable @typescript-eslint/no-unused-vars */

import React, { useCallback, useEffect, useRef, useState, VFC } from 'react';
// make sure you include the timeline stylesheet or the timeline will not be styled
// import 'react-calendar-timeline/lib/Timeline.css'
import 'moment/locale/ja'//moment 日本語化
import moment, { Moment } from 'moment'
import TimeLine, { CustomMarker, DateHeader, SidebarHeader, TimelineHeaders, ReactCalendarTimelineProps, ReactCalendarGroupRendererProps, ReactCalendarItemRendererProps, CustomHeader, Id, ItemContext, GetItemsProps, GetResizeProps, ItemRendererGetResizePropsReturnType, Unit } from 'react-calendar-timeline';
import { CALENDAR_TAB } from '../../../constants/const';
import { Box, Flex, Image, Text, Tooltip } from '@chakra-ui/react';
import { useWindowSize } from '../../../hooks/useWindowSize';

// type ItemRendererProps = ReactCalendarItemRendererProps
// type ItemRendererProps = any
interface TimelineItemBase<DateType> {
    id: Id;
    group: Id;
    title?: React.ReactNode | undefined;
    start_time: DateType;
    end_time: DateType;
    canMove?: boolean | undefined;
    canResize?: boolean | 'left' | 'right' | 'both' | undefined;
    canChangeGroup?: boolean | undefined;
    className?: string | undefined;
    style?: React.CSSProperties | undefined;
    itemProps?: React.HTMLAttributes<HTMLDivElement> | undefined;

    //カスタム
    color:string;
    selectedBgColor:string;
    bgColor:string;
    is_start_hide?:boolean;
    start_label?: Moment;
    is_end_hide?: boolean;
    end_label?: Moment;
    is_personnel_shortage?: boolean;
    personnel_shortage_list?: {
        date: string;
        shortage_count: number;
    }[];
}
interface CReactCalendarItemRendererProps{
    item: TimelineItemBase<any>;
    itemContext: ItemContext;
    getItemProps: (
        props: GetItemsProps,
    ) => {
        key: Id;
        ref: React.Ref<any>;
        className: string;
        onMouseDown: React.MouseEventHandler;
        onMouseUp: React.MouseEventHandler;
        onTouchStart: React.TouchEventHandler;
        onTouchEnd: React.TouchEventHandler;
        onDoubleClick: React.MouseEventHandler;
        onContextMenu: React.ReactEventHandler;
        style: React.CSSProperties;
    };
    getResizeProps: (propsOverride?: GetResizeProps) => ItemRendererGetResizePropsReturnType;
    // onItemSelect: ReactCalendarTimelineProps['onItemSelect'];
    onItemSelect: (itemId:number)=>void;
}
type ItemRendererProps = CReactCalendarItemRendererProps;


const ItemRenderer:VFC<ItemRendererProps> = (props) => {
    const { item, itemContext, getItemProps, getResizeProps, onItemSelect} = props
    const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();
    const backgroundColor = itemContext.selected ? (itemContext.dragging ? item.selectedBgColor : item.selectedBgColor) : item.bgColor;
    const textColor = itemContext.selected ? '#975A16' : item.color;
    const startLabel = (item.start_label) ? item.start_label.date() : null;
    let startLabelBgColor = '#FEEBC8';
    let startLabelBorder = "1px solid #FBD38D";
    if(item.is_start_hide){
        startLabelBgColor = '#EDF2F7';
        startLabelBorder = "1px solid #E2E8F0";
    }
    const endLabel = (item.end_label) ? item.end_label.date() : null;
    let endLabelBgColor = '#FEEBC8';
    let endLabelBorder = "1px solid #FBD38D";
    if(item.is_end_hide){
        endLabelBgColor = '#EDF2F7';
        endLabelBorder = "1px solid #E2E8F0";
    }

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
                position:'relative',
            },
            // onMouseDown: () => {
            //     alert("on item click"+ item);
            // }
            })}
            title=''// デフォルトtooltip消す
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
                <Flex direction="row">
                    {/* y軸が案件名の時のみ */}
                    {item.is_personnel_shortage &&
                        <Tooltip 
                            hasArrow 
                            label={item.personnel_shortage_list?.map((v, idx)=>(
                                <React.Fragment key={idx}>{v.date} -{v.shortage_count}名 <br/></React.Fragment>
                            ))}
                        >
                            <Flex>
                                <Image 
                                    src="./assets/personnel_shortage.svg"
                                    boxSize={3}
                                    // onClick={()=>{alert('人員不足')}}
                                    // _hover={{
                                    //     backgroundColor: "red"
                                    // }}
                                    zIndex={10000}
                                    mr={1}
                                />
                                {/* <Text>人員が不足してる日があります</Text> */}
                            </Flex>
                        </Tooltip>
                    }
                    <Box 
                        w="100%"
                        onClick={()=>onItemSelect(Number(item.id))}
                        h={8}
                    >
                        <Text>{item.title}</Text>
                    </Box>
                    {/* {itemContext.title} */}
                </Flex>
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
                            style={{display:'flex',
                                alignItems:'center',
                                justifyContent:'center',
                                backgroundColor:startLabelBgColor,
                                borderRadius: '50%',
                                height: '16px',
                                width:'16px', 
                                border: startLabelBorder
                            }}
                        >
                            <p style={{margin:0, fontSize:'11px'}}>{startLabel}</p>
                        </div>
                        <div
                            style={{display:'flex',
                                alignItems:'center',
                                justifyContent:'center',
                                backgroundColor:endLabelBgColor,
                                borderRadius: '50%',
                                height: '16px',
                                width:'16px', 
                                border: endLabelBorder
                            }}
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
//     // group.rightTitle
//     return (
//         <div onClick={()=>console.log(props)}>
//             <span>{group.title}</span>
//         </div>
//     )
// }

type Props = {
    mainAreaH: number; //表示領域の高さ
    groups: {
        id: number; 
        title: string; 
        rightTitle?: string
    }[];
    items: { 
        id: number; 
        group: number; 
        title: string; 
        start_time: number; 
        end_time: number; 
        bgColor: string; 
        selectedBgColor: string; 
        color: string; 
        is_start_hide?:boolean;
        start_label?: Moment;
        is_end_hide?: boolean;
        end_label?: Moment;
    }[]; 
    dateRange: {visibleTimeStart:Moment, visibleTimeEnd:Moment};
    unit?: 'primaryHeader' | Unit;
    primaryDateHeaderLabelFormat: string;
    secondaryDateHeaderLabelFormat: string;
    sidebarTitle: string;
    isRightSidebar: boolean;
    rightSidebarTitle?: string;
    calendarPeriod: number;
    // onItemSelect: ReactCalendarTimelineProps['onItemSelect'];
    onItemSelect: (itemId:number)=>void;
}
const CustomTimeLine: VFC<Props> = (props) => {
    const {
        mainAreaH, //メイン描画部分のtop
        groups,
        items,
        dateRange,
        primaryDateHeaderLabelFormat,
        secondaryDateHeaderLabelFormat,
        sidebarTitle,
        rightSidebarTitle,
        isRightSidebar,
        unit,
        calendarPeriod,
        onItemSelect
    } = props;
    
    //タイムライン表示のtopの位置
    const [timeLineTop, setTimeLineTop] = useState<number>(0);
    const timeLineRef= useRef<null | HTMLDivElement>(null);
    useEffect(() => {
        if(timeLineRef.current?.getBoundingClientRect().bottom) setTimeLineTop(timeLineRef.current.getBoundingClientRect().top);
    }, []);

    return (
        <Box 
            ref={timeLineRef}
            position='relative' 
            maxH={mainAreaH - timeLineTop} 
            overflowY='scroll'
            bg='white' 
        >
            <TimeLine
                // groupRenderer= {GroupRenderer}
                selected={[]}//選択状態にさせないようにする
                // itemRenderer = {ItemRenderer}
                itemRenderer = {(props)=><ItemRenderer {...props} onItemSelect={onItemSelect} />}
                groups={groups}
                items={items}
                // sidebarWidth={300}
                // rightSidebarWidth={100}
                rightSidebarWidth={(isRightSidebar) ? 100 : 0}
                canMove={false} //itemを動かす
                canResize={false} //itemの伸び縮み方向
                canChangeGroup={false}//グループ間の移動禁止
                // onItemSelect={onItemSelect}//選択時（対象データを編集データとして保持）
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
                        top: 0,
                        zIndex:10000,
                    }}
                    calendarHeaderStyle={{backgroundColor: '#2A4365'}}
                >
                    <SidebarHeader variant="left">
                        {({ getRootProps }) => {
                            return (
                                <div {...getRootProps()}>
                                    <div style={{backgroundColor: '#2A4365', height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <span style={{color:'#fff',fontWeight:'bold'}}>{sidebarTitle}</span>
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
                                        <div style={{backgroundColor: '#2A4365', height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                            <span style={{color:'#fff',fontWeight:'bold', display:'flex',justifyContent:'center',alignItems:'center'}}>{rightSidebarTitle}</span>
                                        </div>
                                    </div>
                                )
                            }}
                        </SidebarHeader>
                    }
                    {/* <DateHeader 
                        unit={'primaryHeader'}
                        labelFormat={primaryDateHeaderLabelFormat}
                        style={(unit === 'week')?{color: 'white'}:{}}
                    /> */}
                    <DateHeader 
                        unit={'primaryHeader'}
                        labelFormat={primaryDateHeaderLabelFormat}
                        // style={(unit === 'week')?{color: 'white'}:{}}
                        intervalRenderer={(props)=>{
                            // const title: any = props?.intervalContext.interval.startTime;
                            // console.log(test.format('YYYY-MM'));
                            const title = (calendarPeriod === CALENDAR_TAB.LONG_TERM) 
                            ? dateRange.visibleTimeStart.format('YYYY')
                            : dateRange.visibleTimeStart.format('YYYY-MM')
                            const d = props?.getIntervalProps()
                            return(
                                <div
                                    {...{
                                        key: d?.key,
                                        style: {
                                            left: '50%',
                                            position: 'relative',
                                            display: 'flex',
                                            alignItems:'center',
                                            height: '30px',
                                            color: 'white',
                                            fontSize: '14px',
                                        },
                                        // onClick: () => null, // NOTE override click to prevent zooming out
                                    }}
                                >{title}</div>
                            )
                        }}
                    />
                    <DateHeader 
                        labelFormat={secondaryDateHeaderLabelFormat}
                        style={{backgroundColor: 'rgb(240, 240, 240)'}}
                    />
                </TimelineHeaders>
            </TimeLine>
        </Box>
    )
}

CustomTimeLine.defaultProps={
    unit: "primaryHeader"
}

export default CustomTimeLine;


