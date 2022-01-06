import { Moment } from 'moment'

export type TimeLineType = {
    mainAreaH: number;
    groups: TimeLineGroupsType;
    items: TimeLineItemType[];
    dateRange: {
        visibleTimeStart:Moment, 
        visibleTimeEnd:Moment,
    };
    handleSetDateRange: (visibleTimeStart:Moment, visibleTimeEnd:Moment)=>void,
    getData: GetTimelineDataType;
    getItemDate: (itemId:number, isPersonalSchedule?:boolean)=>void,
};

export type GetTimelineDataType = (startDate:Moment, finishDate:Moment, yDataType?: string)=>void;

export type TimeLineGroupsType = {
    id: number; 
    title: string; 
    rightTitle?: string;
}[];

export type TimeLineItemType = {
    id: number; 
    group: number; 
    title: string; 
    start_time: number;  //ライン表示の開始日（画面跨ぐ場合は考慮する）
    end_time: number; 
    bgColor: string; 
    selectedBgColor: string; 
    color: string; 
    //下記ユーザー別の時はいらない
    is_start_hide?:boolean;
    start_label?: Moment;//ライン上部に表示する日付
    is_end_hide?: boolean;
    end_label?: Moment;

    //下記ユーザー別で人員不足の時
    is_personnel_shortage?: boolean;
    personnel_shortage_list?: {
        date: string;
        shortage_count: number;
    }[];
    is_night_work?: boolean;
    is_personal_schedule?: boolean;
    identification_id: number;
};

export type getTimeLineItem = Pick<TimeLineItemType, 'id' | 'identification_id' | 'is_personal_schedule'>