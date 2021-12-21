import React, { useState } from 'react';
import FullCalendar, {EventInput, EventSourceInput, EventApi, EventSourceApi, DateSelectArg, EventClickArg} from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction"; // 日付クリックイベントに必要
import allLocales from '@fullcalendar/core/locales-all'; //日本語表記に必要
import { useCallback, VFC } from "react";


const INITIAL_EVENTS: EventInput[] = [
    {
        id: "1",
        title: "山陽特殊製鋼姫路",
        start: "2021-11-01",
        end: "2021-11-02",// 終了日 + 1日
        color: '#FEB2B2',
        textColor: '#63171B',
        borderColor: '#63171B'
        // start: "2021-11-01 11:10",
        // end: "2021-11-05 11:10",
        // allDay : false
    },
    {
        id: "2",
        title: "広島西郵便局",
        start: "2021-11-01",
        end: "2021-11-05",
        color: '#9AE6B4',
        textColor: '#1C4532',
        borderColor: '#1C4532',
    },
    {
        id: "3",
        title: "広島西郵便局",
        start: "2021-11-07",
        end: "2021-11-09",
        color: '#9DECF9',
        textColor: '#065666',
        borderColor: '#065666',
    },
];

const PersonalCalendar: VFC = () => {
    const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
    const handleChangeEvents = useCallback((events: EventApi[]) => {
      console.log("events:", events);  // 確認用
        setCurrentEvents(events);
    }, []);

    /**
     * 日付クリック
     */
    const handleDateClick = useCallback((arg: DateClickArg) => {
        console.log('handleDateClick');
        console.log(arg);
        alert(arg.dateStr);
    }, []);

    /**
     * イベント追加日選択してイベント追加
     */
    const handleDateSelect = useCallback((selectInfo: DateSelectArg) => {
        console.log('handleDateSelect');
        console.log(selectInfo);
        let title = prompt("イベントのタイトルを入力してください")?.trim();
        let calendarApi = selectInfo.view.calendar;
        calendarApi.unselect();
        if (title) {
        calendarApi.addEvent({
            id: "4",
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay,
        });
        }
    }, []);

    /**
     * イベント選択時（閲覧や編集や削除）
     */
    const handleEventClick = useCallback((clickInfo: EventClickArg) => {
        console.log('handleEventClick');
        console.log(clickInfo);
        console.log("events_id:", clickInfo.event._def.publicId);
        alert(clickInfo.event._def.publicId);
        // if (window.confirm(`このイベント「${clickInfo.event.title}」を削除しますか`)) {
        //     clickInfo.event.remove();
        // }
    }, []);

    return(
        // <div style={{backgroundColor:"#FFF"}}>
            <FullCalendar 
                locales={allLocales}
                locale="ja"
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                initialEvents={INITIAL_EVENTS}
                eventsSet={handleChangeEvents}//イベントが変わった時

                // dateClick={handleDateClick}
                // selectable={true}
                // select={handleDateSelect}

                editable={true}
                eventClick={handleEventClick}
                height="auto"
                // titleFormat={}
            />
        // </div>
    )

}

export default PersonalCalendar