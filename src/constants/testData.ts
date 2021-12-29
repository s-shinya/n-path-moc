import moment from 'moment'

/**
 * 長期
 */
export const LONG_TERM_GROUPS_DATA = [
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
        title: '中国電力(株)三隅火力発電所 バイオマス 計測盤搬入' ,
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
    { 
        id: 14, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 15, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 16, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 17, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 18, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 19, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 20, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 21, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 22, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 23, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 24, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 25, 
        title: '〇〇' ,
        rightTitle: '××',
    },
];
export const LONG_TERM_ITEMS_DATA = [
    {
        id: 1,
        group: 1,
        title: "",
        start_time: moment("2021-01-01 00:00:00").valueOf(), //ライン表示の開始日（画面跨ぐ場合は考慮する）
        end_time: moment("2021-03-10 23:59:59").valueOf(),
        bgColor: "#FEB2B2",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#63171B",
        start_label: moment("2020-12-31 00:00:00"), //ライン上部に表示する日付
        is_start_hide: true,
        end_label: moment("2021-03-10 00:00:00"),
        is_end_hide: false,
    },
    {
        id: 2,
        group: 2,
        title: "",
        start_time: moment("2021-10-10 00:00:00").valueOf(),
        end_time: moment("2021-10-11 23:59:59").valueOf(),
        bgColor: "#9DECF9",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#065666",
        start_label: moment("2021-10-10 00:00:00"),
        is_start_hide: false,
        end_label: moment("2021-10-11 00:00:00"),
        is_end_hide: false,
    },
    // {
    //     id: 4,
    //     group: 2,
    //     title: '-2',
    //     start_time: moment('2021-10-10 00:00:00').valueOf(),
    //     end_time: moment('2021-10-11 23:59:59').valueOf(),
    //     bgColor: "#0BC5EA",
    //     selectedBgColor: "rgb(255, 193, 7)",
    //     color: "#065666",
    //     start_label: moment('2021-10-10 00:00:00'),
        // is_start_hide: false,
    //     end_label: moment('2021-10-11 00:00:00'),
        // is_end_hide: false,
    // },
    {
        id: 3,
        group: 3,
        title: "",
        start_time: moment("2021-11-10 00:00:00").valueOf(),
        end_time: moment("2021-12-31 23:59:59").valueOf(),
        bgColor: "#9AE6B4",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#1C4532",
        start_label: moment("2021-11-10 00:00:00"),
        is_start_hide: false,
        end_label: moment("2022-01-02 00:00:00"),
        is_end_hide: true,
    }
];


/**
 * 月[工事案件別]
 */
export const MONTH_GROUPS_DATA_BY_CONSTRUCTION = [
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
        title: '中国電力(株)三隅火力発電所 バイオマス 計測盤搬入' ,
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
    { 
        id: 14, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 15, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 16, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 17, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 18, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 19, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 20, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 21, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 22, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 23, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 24, 
        title: '〇〇' ,
        rightTitle: '××',
    },
    { 
        id: 25, 
        title: '〇〇' ,
        rightTitle: '××',
    },
];

export const MONTH_ITEMS_DATA_BY_CONSTRUCTION = [
    {
        id: 1,
        group: 1,
        title: '人員が不足してる日があります',
        start_time: moment('2021-12-01 00:00:00').valueOf(),//ライン表示の開始日（画面跨ぐ場合は考慮する）
        end_time: moment('2021-12-20 23:59:59').valueOf(),
        bgColor: "#9AE6B4",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#1C4532",
        start_label:moment('2021-10-31 00:00:00'),//ライン上部に表示する日付
        is_start_hide: true,
        end_label: moment('2021-12-20 00:00:00'),
        is_end_hide: false,
        is_personnel_shortage: true,
        personnel_shortage_list: [
            {
                date: '12/01',
                shortage_count: 1,
            },
            {
                date: '12/03',
                shortage_count: 3,
            },
            {
                date: '12/11',
                shortage_count: 3,
            },
            {
                date: '12/12',
                shortage_count: 3,
            },
            {
                date: '12/13',
                shortage_count: 3,
            },
        ]
    },
    {
        id: 2,
        group: 2,
        title: '',
        start_time: moment('2021-12-10 00:00:00').valueOf(),
        end_time: moment('2021-12-11 23:59:59').valueOf(),
        bgColor: "#FEB2B2",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#63171B",
        start_label: moment('2021-12-10 00:00:00'),
        is_start_hide: false,
        end_label: moment('2021-10-11 00:00:00'),
        is_end_hide: false,
    },
    {
        id: 3,
        group: 3,
        title: '',
        start_time: moment('2021-12-13 00:00:00').valueOf(),
        end_time: moment('2021-12-31 23:59:59').valueOf(),
        bgColor: "#9AE6B4",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#1C4532",
        start_label: moment('2021-12-13 00:00:00'),
        is_start_hide: false,
        end_label: moment('2022-01-01 00:00:00'),
        is_end_hide: true,
    },
];

/**
 * 月[ユーザー別]
 */
export const MONTH_GROUPS_DATA_BY_PEOPLE = [
    { 
        id: 1, 
        title: '山田太郎',
    }, 
    { 
        id: 2, 
        title: '田中角栄' ,
    },
    { 
        id: 3, 
        title: '鈴木一郎' ,
    },
    { 
        id: 4, 
        title: '〇〇' ,
    },
    { 
        id: 5, 
        title: '〇〇' ,
    },
    { 
        id: 6, 
        title: '〇〇' ,
    },
    { 
        id: 7, 
        title: '〇〇' ,
    },
    { 
        id: 8, 
        title: '〇〇' ,
    },
    { 
        id: 9, 
        title: '〇〇' ,
    },
    { 
        id: 10, 
        title: '〇〇' ,
    },
    { 
        id: 11, 
        title: '〇〇' ,
    },
    { 
        id: 12, 
        title: '〇〇' ,
    },
    { 
        id: 13, 
        title: '〇〇' ,
    },
    { 
        id: 14, 
        title: '〇〇' ,
    },
    { 
        id: 15, 
        title: '〇〇' ,
    },
    { 
        id: 16, 
        title: '〇〇' ,
    },
    { 
        id: 17, 
        title: '〇〇' ,
    },
    { 
        id: 18, 
        title: '〇〇' ,
    },
    { 
        id: 19, 
        title: '〇〇' ,
    },
    { 
        id: 20, 
        title: '〇〇' ,
    },
    { 
        id: 21, 
        title: '〇〇' ,
    },
    { 
        id: 22, 
        title: '〇〇' ,
    },
    { 
        id: 23, 
        title: '〇〇' ,
    },
    { 
        id: 24, 
        title: '〇〇' ,
    },
    { 
        id: 25, 
        title: '〇〇' ,
    },
];

export const MONTH_ITEMS_DATA_BY_PEOPLE = [
    {
        id: 1,
        group: 1,
        title: '山陽特殊製鋼姫路',
        start_time: moment('2021-12-01 00:00:00').valueOf(),//ライン表示の開始日（画面跨ぐ場合は考慮する）
        end_time: moment('2021-12-20 23:59:59').valueOf(),
        bgColor: "#9AE6B4",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#1C4532",
        start_label:moment('2021-10-31 00:00:00'),//ライン上部に表示する日付
        is_start_hide: true,
        end_label: moment('2021-12-20 00:00:00'),
        is_end_hide: false,
    },
    {
        id: 2,
        group: 2,
        title: '広島西郵便局',
        start_time: moment('2021-12-10 00:00:00').valueOf(),
        end_time: moment('2021-12-11 23:59:59').valueOf(),
        bgColor: "#FEB2B2",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#63171B",
        start_label: moment('2021-12-10 00:00:00'),
        is_start_hide: false,
        end_label: moment('2021-10-11 00:00:00'),
        is_end_hide: false,
    },
    {
        id: 4,
        group: 3,
        title: '広島西郵便局',
        start_time: moment('2021-12-10 00:00:00').valueOf(),
        end_time: moment('2021-12-11 23:59:59').valueOf(),
        bgColor: "#FEB2B2",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#63171B",
        start_label: moment('2021-12-10 00:00:00'),
        is_start_hide: false,
        end_label: moment('2021-10-11 00:00:00'),
        is_end_hide: false,
    },
    {
        id: 3,
        group: 3,
        title: '中部国際医療センター',
        start_time: moment('2021-12-13 00:00:00').valueOf(),
        end_time: moment('2021-12-15 23:59:59').valueOf(),
        bgColor: "#9AE6B4",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#1C4532",
        start_label: moment('2021-12-13 00:00:00'),
        is_start_hide: false,
        end_label: moment('2021-12-15 00:00:00'),
        is_end_hide: false,
    },
    {
        id: 5,
        group: 3,
        title: '中部国際医療センター',
        start_time: moment('2021-12-18 00:00:00').valueOf(),
        end_time: moment('2021-12-31 23:59:59').valueOf(),
        bgColor: "#9AE6B4",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#1C4532",
        start_label: moment('2021-12-18 00:00:00'),
        is_start_hide: false,
        end_label: moment('2022-01-01 00:00:00'),
        is_end_hide: true,
    },
];


/**
 * 週[工事案件別]
 */
export const WEEK_GROUPS_DATA_BY_CONSTRUCTION = [
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
        title: '中国電力(株)三隅火力発電所 バイオマス 計測盤搬入' ,
        rightTitle: '広島',
    },
];

export const WEEK_ITEMS_DATA_BY_CONSTRUCTION = [
    {
        id: 1,
        group: 1,
        title: '人員が不足してる日があります',
        start_time: moment('2021-12-25  00:00:00').valueOf(),//ライン表示の開始日（画面跨ぐ場合は考慮する）
        end_time: moment('2021-12-31  23:59:59').valueOf(),
        bgColor: "#FEB2B2",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#63171B",
        start_label:moment('2021-12-24 00:00:00'),//ライン上部に表示する日付
        is_start_hide: true,
        end_label: moment('2022-01-01 00:00:00'),
        is_end_hide: true,
        is_personnel_shortage: true,
        personnel_shortage_list: [
            {
                date: '12/28',
                shortage_count: 1,
            },
            {
                date: '12/29',
                shortage_count: 3,
            },
            {
                date: '12/30',
                shortage_count: 3,
            },
            {
                date: '01/01',
                shortage_count: 3,
            },
            {
                date: '01/02',
                shortage_count: 3,
            },
        ]
    },
    {
        id: 2,
        group: 2,
        title: '',
        start_time: moment('2021-12-27 00:00:00').valueOf(),
        end_time: moment('2021-12-28 23:59:59').valueOf(),
        bgColor: "#FEB2B2",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#63171B",
        start_label: moment('2021-12-27 00:00:00'),
        is_start_hide: false,
        end_label: moment('2021-12-28  00:00:00'),
        is_end_hide: false,
    },
    {
        id: 3,
        group: 3,
        title: '',
        start_time: moment('2021-12-29 00:00:00').valueOf(),
        end_time: moment('2021-12-31 23:59:59').valueOf(),
        bgColor: "#9AE6B4",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#1C4532",
        start_label: moment('2021-12-29 00:00:00'),
        is_start_hide: false,
        end_label: moment('2021-12-31 00:00:00'),
        is_end_hide: false,
    },
];

/**
 * 週[ユーザー別]
 */
export const WEEK_GROUPS_DATA_BY_PEOPLE = [
    { 
        id: 1, 
        title: '山田太郎',
    }, 
    { 
        id: 2, 
        title: '田中角栄' ,
    },
    { 
        id: 3, 
        title: '鈴木一郎' ,
    },
    { 
        id: 4, 
        title: '〇〇' ,
    },
    { 
        id: 5, 
        title: '〇〇' ,
    },
    { 
        id: 6, 
        title: '〇〇' ,
    },
    { 
        id: 7, 
        title: '〇〇' ,
    },
    { 
        id: 8, 
        title: '〇〇' ,
    },
    { 
        id: 9, 
        title: '〇〇' ,
    },
    { 
        id: 10, 
        title: '〇〇' ,
    },
    { 
        id: 11, 
        title: '〇〇' ,
    },
    { 
        id: 12, 
        title: '〇〇' ,
    },
    { 
        id: 13, 
        title: '〇〇' ,
    },
    { 
        id: 14, 
        title: '〇〇' ,
    },
    { 
        id: 15, 
        title: '〇〇' ,
    },
    { 
        id: 16, 
        title: '〇〇' ,
    },
    { 
        id: 17, 
        title: '〇〇' ,
    },
    { 
        id: 18, 
        title: '〇〇' ,
    },
    { 
        id: 19, 
        title: '〇〇' ,
    },
    { 
        id: 20, 
        title: '〇〇' ,
    },
    { 
        id: 21, 
        title: '〇〇' ,
    },
    { 
        id: 22, 
        title: '〇〇' ,
    },
    { 
        id: 23, 
        title: '〇〇' ,
    },
    { 
        id: 24, 
        title: '〇〇' ,
    },
    { 
        id: 25, 
        title: '〇〇' ,
    },
];

export const WEEK_ITEMS_DATA_BY_PEOPLE = [
    {
        id: 1,
        group: 1,
        title: '山陽特殊製鋼姫路',
        start_time: moment('2021-12-25  00:00:00').valueOf(),//ライン表示の開始日（画面跨ぐ場合は考慮する）
        end_time: moment('2021-12-31  23:59:59').valueOf(),
        bgColor: "#FEB2B2",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#63171B",
        start_label:moment('2021-12-24 00:00:00'),//ライン上部に表示する日付
        is_start_hide: true,
        end_label: moment('2022-01-01 00:00:00'),
        is_end_hide: true,
    },
    {
        id: 2,
        group: 2,
        title: '広島西郵便局',
        start_time: moment('2021-12-27 00:00:00').valueOf(),
        end_time: moment('2021-12-28 23:59:59').valueOf(),
        bgColor: "#FEB2B2",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#63171B",
        start_label: moment('2021-12-27 00:00:00'),
        is_start_hide: false,
        end_label: moment('2021-12-28  00:00:00'),
        is_end_hide: false,
    },
    {
        id: 4,
        group: 3,
        title: '広島西郵便局',
        start_time: moment('2021-12-27 00:00:00').valueOf(),
        end_time: moment('2021-12-27 23:59:59').valueOf(),
        bgColor: "#FEB2B2",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#63171B",
        start_label: moment('2021-12-27 00:00:00'),
        is_start_hide: false,
        end_label: moment('2021-12-27 00:00:00'),
        is_end_hide: false,
    },
    {
        id: 3,
        group: 3,
        title: '中部国際医療センター',
        start_time: moment('2021-12-29 00:00:00').valueOf(),
        end_time: moment('2021-12-31 23:59:59').valueOf(),
        bgColor: "#9AE6B4",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#1C4532",
        start_label: moment('2021-12-29 00:00:00'),
        is_start_hide: false,
        end_label: moment('2021-12-31 00:00:00'),
        is_end_hide: false,
    },
    {
        id: 5,
        group: 3,
        title: 'あいうえお',
        start_time: moment('2021-12-29 00:00:00').valueOf(),
        end_time: moment('2021-12-29 23:59:59').valueOf(),
        bgColor: "#9AE6B4",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#1C4532",
        start_label: moment('2021-12-29 00:00:00'),
        is_start_hide: false,
        end_label: moment('2021-12-29 00:00:00'),
        is_end_hide: false,
    },
];


export const PERSONAL_CALENDAR = [
    {
        id: "1",
        title: "山陽特殊製鋼姫路",
        // start: "2021-12-01",
        // end: "2021-12-02",// 終了日 + 1日
        color: '#FEB2B2',
        textColor: '#63171B',
        borderColor: '#63171B',
        start: "2021-12-01 12:00",
        end: "2021-12-01 17:10",
        allDay : true
    },
    {
        id: "2",
        title: "広島西郵便局",
        start: "2021-12-01",
        end: "2021-12-05",
        color: '#9AE6B4',
        textColor: '#1C4532',
        borderColor: '#1C4532',
    },
    {
        id: "3",
        title: "広島西郵便局",
        start: "2021-12-07",
        end: "2021-12-09",
        color: '#9AE6B4',
        textColor: '#1C4532',
        borderColor: '#1C4532',
    },
    {
        id: "4",
        title: "休み",
        start: "2021-12-06",
        end: "2021-12-06",
        color: '#E2E8F0',
        textColor: '#4A5568',
        borderColor: '#4A5568',
        allDay : true
    },
];
export const ADD_EVENT = {
    id: "10",
    title: "休み",
    start: "2021-12-09 09:00",
    end: "2021-12-09 13:00",
    color: '#E2E8F0',
    textColor: '#4A5568',
    borderColor: '#4A5568',
    allDay : true
}
