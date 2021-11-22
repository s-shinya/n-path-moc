import React, { VFC } from 'react';
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
// import TimeLine, { DateHeader, SidebarHeader, TimelineHeaders } from 'react-calendar-timeline';
import TimeLine, { DateHeader, SidebarHeader, TimelineHeaders } from 'react-calendar-timeline';
// import {} from 'react-calendar-timeline/lib';


const groups = [{ id: 1, title: 'group 1' }, { id: 2, title: 'group 2' }]

const items = [
    {
        id: 1,
        group: 1,
        title: 'item 1',
        start_time: moment(),
        end_time: moment().add(1, 'hour')
    },
    {
        id: 2,
        group: 2,
        title: 'item 2',
        start_time: moment().add(-0.5, 'hour'),
        end_time: moment().add(0.5, 'hour')
    },
    {
        id: 3,
        group: 1,
        title: 'item 3',
        start_time: moment().add(2, 'hour'),
        end_time: moment().add(3, 'hour')
    }
]


export const CalendarTimeLine: VFC = () => {
    return (
        <div>
            <p>teast</p>
            <TimeLine
                groups={groups}
                items={items}
                defaultTimeStart={moment().add(-12, 'hour')}
                defaultTimeEnd={moment().add(12, 'hour')}

                canMove={true} //itemを動かす
                canResize={'both'} //itemの伸び縮み方向
                // keys={keys}
                // sidebarContent={<div>Above The Left</div>}
                // itemsSorted
                // itemTouchSendsClick={false}
                // stackItems
                // itemHeightRatio={0.75}
                // showCursorLine
                // canMove={false}
                // canResize={false}
                // defaultTimeStart={defaultTimeStart}
                // defaultTimeEnd={defaultTimeEnd}

            >
                <TimelineHeaders>
                    <SidebarHeader>
                    {({ getRootProps }) => {
                        return <div {...getRootProps()}>Left</div>;
                        }}
                    </SidebarHeader>
                    <DateHeader unit="primaryHeader" />
                    <DateHeader />
                </TimelineHeaders>
            </TimeLine>
        </div>
    )
}
