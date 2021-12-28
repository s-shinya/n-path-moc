import React, { useState } from 'react';
import FullCalendar, {EventInput, EventSourceInput, EventApi, EventSourceApi, DateSelectArg, EventClickArg, DatesSetArg} from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction"; // 日付クリックイベントに必要
import allLocales from '@fullcalendar/core/locales-all'; //日本語表記に必要
import { useCallback, VFC } from "react";
import { Box, Flex, Stack, Text, VStack } from '@chakra-ui/react';
import ColorBox from '../../Atoms/ColorBox';
import { ADD_EVENT, PERSONAL_CALENDAR } from '../../../constants/testData';

const PersonalCalendar: VFC = () => {
    const [currentEvents, setCurrentEvents] = useState<EventInput[]>([]);

    // /**
    //  * 日付変わったときのイベント取得
    //  */
    // const handleChangeEvents = (events: EventApi[]) => {
    //     console.log('handleChangeEvents');
    //     console.log("events:", events); 
    //     // setCurrentEvents(events);
    // }

    // /**
    //  * イベント追加日選択してイベント追加
    //  */
    // const handleDateSelect = (selectInfo: DateSelectArg) => {
    //     console.log('handleDateSelect');
    //     console.log(selectInfo);
    //     let title = prompt("イベントのタイトルを入力してください")?.trim();
    //     // let calendarApi = selectInfo.view.calendar;
    //     // calendarApi.unselect();
    //     // if (title) {
    //     // calendarApi.addEvent({
    //     //     id: "4",
    //     //     title,
    //     //     start: selectInfo.startStr,
    //     //     end: selectInfo.endStr,
    //     //     allDay: selectInfo.allDay,
    //     // });
    //     // }
    // }

    /**
     * 日付クリック
     */
    const handleDateClick = (arg: DateClickArg) => {
        console.log('handleDateClick');
        console.log(arg);
        console.log(currentEvents);
        console.log(ADD_EVENT);
        alert(arg.dateStr);
        setCurrentEvents(currentEvents.concat(ADD_EVENT))
    }

    /**
     * 日付変更時
     */
    const handleDatesSet = (arg: DatesSetArg) => {
        //TODO：本来はAPIで日付の期間のイベントを取得する
        console.log('datesSet');
        console.log(arg);
        setCurrentEvents(PERSONAL_CALENDAR)
    }

    /**
     * イベント選択時（閲覧や編集や削除）
     */
    const handleEventClick = (clickInfo: EventClickArg) => {
        console.log('handleEventClick');
        console.log(clickInfo);
        console.log("events_id:", clickInfo.event._def.publicId);
        alert(clickInfo.event._def.publicId);
        // if (window.confirm(`このイベント「${clickInfo.event.title}」を削除しますか`)) {
        //     clickInfo.event.remove();
        // }
    }

    return(
        // <Box position="relative">
        //     {/* PCの時 */}
        //     <Box 
        //         display={{base:'none', md:'flex'}} 
        //         position="absolute" 
        //         justifyContent='center' 
        //         alignItems='center'
        //         w="100%" 
        //         minH={"40px"} 
        //     >
        //         <Stack direction='row' w='40%' justifyContent="center">
        //             <Flex alignItems='center'>
        //                 <ColorBox bg='green'/>
        //                 <Text ml={1}>工事受注活動案件</Text>
        //             </Flex>
        //             <Flex alignItems='center'>
        //                 <ColorBox bg='red'/>
        //                 <Text ml={1}>工事完了案件</Text>
        //             </Flex>
        //         </Stack>
        //     </Box>
            <FullCalendar 
                locales={allLocales}
                locale="ja"
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"

                initialEvents={PERSONAL_CALENDAR}
                events={currentEvents}

                // initialDate='2021-01-01'
                datesSet={handleDatesSet}
                // dayHeaderContent={()=>(
                //     <p>a</p>
                // )}

                // eventsSet={handleChangeEvents}//イベントが変わった時
                // customButtons={{
                //     test: {
                //         text: 'test',
                //         click: ()=>console.log('テスト'),
                //     }
                // }}
                // headerToolbar = {{
                //     start: 'title',
                //     center: '',   
                //     end: 'prev,next'
                // }}

                dateClick={handleDateClick}
                // selectable={true}
                // select={handleDateSelect}

                editable={true}
                eventClick={handleEventClick}
                height="auto"
                // titleFormat={}
            />

            // {/* スマホ/タブレットの時 */}
        //     <VStack 
        //         display={{md:'none'}} 
        //         alignItems='start'
        //         mt={4} 
        //     >
        //         <Flex alignItems='center'>
        //             <ColorBox bg='green'/>
        //             <Text ml={1}>工事受注活動案件</Text>
        //         </Flex>
        //         <Flex alignItems='center'>
        //             <ColorBox bg='red'/>
        //             <Text ml={1}>工事完了案件</Text>
        //         </Flex>
        //     </VStack>
        // </Box>
    )

}

export default PersonalCalendar