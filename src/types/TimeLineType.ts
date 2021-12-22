import { Moment } from 'moment'

export type TimeLineType = {
    groups:TimeLineGroupsType
    items:TimeLineItemsType
};

export type TimeLineGroupsType = {
    id: number; 
    title: string; 
    rightTitle?: string
}[];

export type TimeLineItemsType = {
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
}[];