import React, { Component } from "react";
import moment from "moment";

import Timeline, { TimelineGroupBase } from "react-calendar-timeline";
import 'react-calendar-timeline/lib/Timeline.css'

import { generateStableData } from "./generate-stable-data";
import { itemRenderer } from "./item-renderer";
import { CustomTimelineItem } from "./types";

interface IState {
    groups: TimelineGroupBase[];
    items: CustomTimelineItem[];
    defaultTimeStart: Date;
    defaultTimeEnd: Date;
}

export default class CustomTimeline extends Component<{}, IState> {
constructor(props:any) {
    super(props);

    const { groups, items } = generateStableData();
    const defaultTimeStart = moment().startOf("day").toDate();
    const defaultTimeEnd = moment().startOf("day").add(1, "day").toDate();

    this.state = {
    groups,
    items,
    defaultTimeStart,
    defaultTimeEnd
    };
}

render() {
    const { groups, items, defaultTimeStart, defaultTimeEnd } = this.state;

    return (
        <Timeline
            // groups={groups}
            // items={items}
            // itemTouchSendsClick={false}
            // stackItems
            // itemHeightRatio={0.75}
            // // showCursorLine
            // canMove={false}
            // canResize={false}
            // defaultTimeStart={defaultTimeStart}
            // defaultTimeEnd={defaultTimeEnd}
            itemRenderer={itemRenderer}

            groups={groups}
            items={items}

            // defaultTimeStart={defaultTimeStart}
            // defaultTimeEnd={defaultTimeEnd}

            // canMove={true} //itemを動かす
            // canResize={'both'} //itemの伸び縮み方向



            // keys={keys}
            sidebarContent={<div>Above The Left</div>}
            // itemsSorted
            // itemTouchSendsClick={false}
            // stackItems
            // itemHeightRatio={0.75}
            // showCursorLine
            canMove={true}
            canResize={'both'} //itemの伸び縮み方向
            defaultTimeStart={defaultTimeStart}
            defaultTimeEnd={defaultTimeEnd}

            // onCanvasClick={(e)=>console.log('onCanvasClick')}
            // onItemClick={(e)=>console.log('onItemClick')}
            onItemMove={(e)=>console.log('onItemMove')}

        />
    );
}
}
