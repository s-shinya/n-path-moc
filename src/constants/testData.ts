import moment from 'moment'

const y = moment().format('YYYY');
const m = moment().format('MM');

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
        identification_id: 1,
        group: 1,
        title: "",
        start_time: moment(`${y}-${m}-01 00:00:00`).valueOf(), //ライン表示の開始日（画面跨ぐ場合は考慮する）
        end_time: moment(`${y}-03-10 23:59:59`).valueOf(),
        bgColor: "#FEB2B2",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#63171B",
        start_label: moment(`${y}-${m}-31 00:00:00`), //ライン上部に表示する日付
        is_start_hide: true,
        end_label: moment(`${y}-03-10 00:00:00`),
        is_end_hide: false,
    },
    {
        id: 2,
        identification_id: 2,
        group: 2,
        title: "",
        start_time: moment(`${y}-10-10 00:00:00`).valueOf(),
        end_time: moment(`${y}-10-11 23:59:59`).valueOf(),
        bgColor: "#9DECF9",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#065666",
        start_label: moment(`${y}-10-10 00:00:00`),
        is_start_hide: false,
        end_label: moment(`${y}-10-11 00:00:00`),
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
        identification_id: 3,
        group: 3,
        title: "",
        start_time: moment(`${y}-11-10 00:00:00`).valueOf(),
        end_time: moment(`${y}-12-31 23:59:59`).valueOf(),
        bgColor: "#9AE6B4",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#1C4532",
        start_label: moment(`${y}-11-10 00:00:00`),
        is_start_hide: false,
        end_label: moment("2023-01-02 00:00:00"),
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
        identification_id: 1,
        group: 1,
        title: '人員が不足してる日があります',
        start_time: moment(`${y}-${m}-01 00:00:00`).valueOf(),//ライン表示の開始日（画面跨ぐ場合は考慮する）
        end_time: moment(`${y}-${m}-20 23:59:59`).valueOf(),
        bgColor: "#9AE6B4",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#1C4532",
        start_label:moment('2021-10-31 00:00:00'),//ライン上部に表示する日付
        is_start_hide: true,
        end_label: moment(`${y}-${m}-20 00:00:00`),
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
        identification_id: 2,
        group: 2,
        title: '',
        start_time: moment(`${y}-${m}-10 00:00:00`).valueOf(),
        end_time: moment(`${y}-${m}-11 23:59:59`).valueOf(),
        bgColor: "#FEB2B2",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#63171B",
        start_label: moment(`${y}-${m}-10 00:00:00`),
        is_start_hide: false,
        end_label: moment(`${y}-${m}-11 00:00:00`),
        is_end_hide: false,
    },
    {
        id: 3,
        identification_id: 3,
        group: 3,
        title: '',
        start_time: moment(`${y}-${m}-13 00:00:00`).valueOf(),
        end_time: moment(`${y}-${m}-31 23:59:59`).valueOf(),
        bgColor: "#9AE6B4",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#1C4532",
        start_label: moment(`${y}-${m}-13 00:00:00`),
        is_start_hide: false,
        end_label: moment('2025-01-01 00:00:00'),
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
        id: 1,//連番（工事案件複数とユーザーIDが混合するため）
        identification_id: 1, //プロジェクトか個人予定のid(重複する可能性あり) 
        group: 1,
        title: '山陽特殊製鋼姫路',
        start_time: moment(`${y}-${m}-01 00:00:00`).valueOf(),//ライン表示の開始日（画面跨ぐ場合は考慮する）
        end_time: moment(`${y}-${m}-20 23:59:59`).valueOf(),
        bgColor: "#9AE6B4",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#1C4532",
        start_label:moment('2021-10-31 00:00:00'),//ライン上部に表示する日付
        is_start_hide: true,
        end_label: moment(`${y}-${m}-20 00:00:00`),
        is_end_hide: false,
    },
    {
        id: 2,
        identification_id: 2,
        group: 2,
        title: '広島西郵便局',
        start_time: moment(`${y}-${m}-10 00:00:00`).valueOf(),
        end_time: moment(`${y}-${m}-11 23:59:59`).valueOf(),
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
        identification_id: 2,
        group: 3,
        title: '広島西郵便局',
        start_time: moment(`${y}-${m}-10 00:00:00`).valueOf(),
        end_time: moment(`${y}-${m}-11 23:59:59`).valueOf(),
        bgColor: "#FEB2B2",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#63171B",
        start_label: moment(`${y}-${m}-10 00:00:00`),
        is_start_hide: false,
        end_label: moment('2021-10-11 00:00:00'),
        is_end_hide: false,
    },
    {
        id: 3,
        identification_id: 3,
        group: 3,
        title: '中部国際医療センター',
        start_time: moment(`${y}-${m}-13 00:00:00`).valueOf(),
        end_time: moment(`${y}-${m}-15 23:59:59`).valueOf(),
        bgColor: "#9AE6B4",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#1C4532",
        start_label: moment(`${y}-${m}-13 00:00:00`),
        is_start_hide: false,
        end_label: moment(`${y}-${m}-15 00:00:00`),
        is_end_hide: false,
    },
    {
        id: 5,
        identification_id: 3,
        group: 3,
        title: '中部国際医療センター',
        start_time: moment(`${y}-${m}-18 00:00:00`).valueOf(),
        end_time: moment(`${y}-${m}-31 23:59:59`).valueOf(),
        bgColor: "#9AE6B4",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#1C4532",
        start_label: moment(`${y}-${m}-18 00:00:00`),
        is_start_hide: false,
        end_label: moment('2025-01-01 00:00:00'),
        is_end_hide: true,
    },
    {
        id: 6,
        identification_id: 2,
        group: 3,
        title: '広島西郵便局',
        start_time: moment(`${y}-${m}-27 22:00:00`).valueOf(),
        end_time: moment(`${y}-${m}-28 05:59:59`).valueOf(),
        bgColor: "#FEB2B2",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#63171B",
        start_label: moment(`${y}-${m}-27 00:00:00`),
        is_start_hide: false,
        end_label: moment(`${y}-${m}-28 00:00:00`),
        is_end_hide: false,
        is_night_work: true,
    },
    {
        id: 7,//終日
        identification_id: 1,
        group: 3,
        title: '休み(終日)',
        start_time: moment(`${y}-${m}-16 00:00:00`).valueOf(),
        end_time: moment(`${y}-${m}-16 23:59:59`).valueOf(),
        bgColor: "#E2E8F0",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#4A5568",
        start_label: moment(`${y}-${m}-16 00:00:00`),
        is_start_hide: false,
        end_label: moment(`${y}-${m}-16 00:00:00`),
        is_end_hide: false,
        is_night_work: false,
        is_personal_schedule: true,
    },
    {
        id: 8,//時間指定（午前）
        identification_id: 2,
        group: 3,
        title: '休み(09:00〜13:00)',
        start_time: moment(`${y}-${m}-17 09:00:00`).valueOf(),
        end_time: moment(`${y}-${m}-17 13:00:00`).valueOf(),
        bgColor: "#E2E8F0",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#4A5568",
        start_label: moment(`${y}-${m}-17 00:00:00`),
        is_start_hide: false,
        end_label: moment(`${y}-${m}-17 00:00:00`),
        is_end_hide: false,
        is_night_work: false,
        is_personal_schedule: true,
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
        identification_id: 1,
        group: 1,
        title: '人員が不足してる日があります',
        start_time: moment(`${y}-${m}-08  00:00:00`).valueOf(),//ライン表示の開始日（画面跨ぐ場合は考慮する）
        end_time: moment(`${y}-${m}-14  23:59:59`).valueOf(),
        bgColor: "#FEB2B2",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#63171B",
        start_label:moment(`${y}-${m}-24 00:00:00`),//ライン上部に表示する日付
        is_start_hide: true,
        end_label: moment('2022-01-01 00:00:00'),
        is_end_hide: true,
        is_personnel_shortage: true,
        personnel_shortage_list: [
            {
                date: `${y}/05`,
                shortage_count: 1,
            },
            {
                date: `${y}/06`,
                shortage_count: 3,
            },
            {
                date: `${y}/08`,
                shortage_count: 3,
            },
            {
                date: `${y}/10`,
                shortage_count: 3,
            },
            {
                date: `${y}/11`,
                shortage_count: 3,
            },
        ]
    },
    {
        id: 2,
        identification_id: 2,
        group: 2,
        title: '',
        start_time: moment(`${y}-${m}-10 00:00:00`).valueOf(),
        end_time: moment(`${y}-${m}-12 23:59:59`).valueOf(),
        bgColor: "#FEB2B2",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#63171B",
        start_label: moment(`${y}-${m}-10 00:00:00`),
        is_start_hide: false,
        end_label: moment(`${y}-${m}-12  00:00:00`),
        is_end_hide: false,
    },
    {
        id: 3,
        identification_id: 3,
        group: 3,
        title: '',
        start_time: moment(`${y}-${m}-12 00:00:00`).valueOf(),
        end_time: moment(`${y}-${m}-14 23:59:59`).valueOf(),
        bgColor: "#9AE6B4",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#1C4532",
        start_label: moment(`${y}-${m}-12 00:00:00`),
        is_start_hide: false,
        end_label: moment(`${y}-${m}-14 00:00:00`),
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
        identification_id: 1,
        group: 1,
        title: '山陽特殊製鋼姫路',
        start_time: moment(`${y}-01-08  00:00:00`).valueOf(),//ライン表示の開始日（画面跨ぐ場合は考慮する）
        end_time: moment(`${y}-01-14  23:59:59`).valueOf(),
        bgColor: "#FEB2B2",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#63171B",
        start_label:moment(`${y}-01-08 00:00:00`),//ライン上部に表示する日付
        is_start_hide: true,
        end_label: moment(`2025-01-01 00:00:00`),
        is_end_hide: true,
    },
    {
        id: 2,
        identification_id: 2,
        group: 2,
        title: '広島西郵便局',
        start_time: moment(`${y}-01-10 00:00:00`).valueOf(),
        end_time: moment(`${y}-01-11 23:59:59`).valueOf(),
        bgColor: "#FEB2B2",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#63171B",
        start_label: moment(`${y}-01-10 00:00:00`),
        is_start_hide: false,
        end_label: moment(`${y}-01-11 00:00:00`),
        is_end_hide: false,
    },
    {
        id: 4,
        identification_id: 2,
        group: 3,
        title: '広島西郵便局',
        start_time: moment(`${y}-01-10 00:00:00`).valueOf(),
        end_time: moment(`${y}-01-10 23:59:59`).valueOf(),
        bgColor: "#FEB2B2",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#63171B",
        start_label: moment(`${y}-01-10 00:00:00`),
        is_start_hide: false,
        end_label: moment(`${y}-01-10 00:00:00`),
        is_end_hide: false,
    },
    {
        id: 3,
        identification_id: 3,
        group: 3,
        title: '中部国際医療センター',
        start_time: moment(`${y}-01-12 00:00:00`).valueOf(),
        end_time: moment(`${y}-01-14 23:59:59`).valueOf(),
        bgColor: "#9AE6B4",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#1C4532",
        start_label: moment(`${y}-01-12 00:00:00`),
        is_start_hide: false,
        end_label: moment(`${y}-01-14 00:00:00`),
        is_end_hide: false,
    },
    {
        id: 5,
        identification_id: 4,
        group: 3,
        title: 'あいうえお',
        start_time: moment(`${y}-01-12 00:00:00`).valueOf(),
        end_time: moment(`${y}-01-12 23:59:59`).valueOf(),
        bgColor: "#9AE6B4",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#1C4532",
        start_label: moment(`${y}-01-12 00:00:00`),
        is_start_hide: false,
        end_label: moment(`${y}-01-12 00:00:00`),
        is_end_hide: false,
    },
    {
        id: 6,
        identification_id: 2,
        group: 3,
        title: '広島西郵便局',
        start_time: moment(`${y}-01-10 22:00:00`).valueOf(),
        end_time: moment(`${y}-01-11 05:59:59`).valueOf(),
        bgColor: "#FEB2B2",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#63171B",
        start_label: moment(`${y}-01-10 00:00:00`),
        is_start_hide: false,
        end_label: moment(`${y}-01-11 00:00:00`),
        is_end_hide: false,
        is_night_work: true,
    },
    {
        id: 7,//終日
        identification_id: 1,
        group: 3,
        title: '休み(終日)',
        start_time: moment(`${y}-01-08 00:00:00`).valueOf(),
        end_time: moment(`${y}-01-08 23:59:59`).valueOf(),
        bgColor: "#E2E8F0",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#4A5568",
        start_label: moment(`${y}-01-08 00:00:00`),
        is_start_hide: false,
        end_label: moment(`${y}-01-08 00:00:00`),
        is_end_hide: false,
        is_night_work: false,
        is_personal_schedule: true,
    },
    {
        id: 8,//時間指定（午前）
        identification_id: 2,
        group: 3,
        title: '休み(09:00〜13:00)',
        start_time: moment(`${y}-01-09 09:00:00`).valueOf(),
        end_time: moment(`${y}-01-09 13:00:00`).valueOf(),
        bgColor: "#E2E8F0",
        selectedBgColor: "rgb(255, 193, 7)",
        color: "#4A5568",
        start_label: moment(`${y}-01-09 00:00:00`),
        is_start_hide: false,
        end_label: moment(`${y}-01-09 00:00:00`),
        is_end_hide: false,
        is_night_work: false,
        is_personal_schedule: true,
    },
];


export const PERSONAL_CALENDAR = [
    {
        id:'1',
        title: "山陽特殊製鋼姫路",//時間指定の場合は時間を含める
        // start: "2021-12-01",
        // end: "2021-12-02",// 終了日 + 1日
        start: `${y}-${m}-01`,
        // end: `${y}-${m}-01`,
        allDay : true,
        color: '#FEB2B2',
        textColor: '#63171B',
        borderColor: '#63171B',
        is_night_work: false,
        //================================
        //個人の予定テーブルから引っ張るので普通にidでいいかも
        //=================================
        // identification_id: 1 //工事案件と個人予定のid(重複する可能性あり) 、工事案件はユーザーの予定にあるものなので同じ工事案件でもIDが異なる
    },
    {
        id: '2',
        title: "山陽特殊製鋼姫路(22:00〜06:00)",
        // start: `${y}-${m}-05 22:00:00`,
        // end: `${y}-${m}-05 06:00:00`,
        start: `${y}-${m}-05`,
        allDay : true,
        color: '#FEB2B2',
        textColor: '#63171B',
        borderColor: '#63171B',
        is_night_work: true,
    },
    {
        id: '3',
        title: "広島西郵便局",
        start: `${y}-${m}-01`,
        allDay : true,
        color: '#9AE6B4',
        textColor: '#1C4532',
        borderColor: '#1C4532',
    },
    {
        id: '4',
        title: "広島西郵便局",
        start: `${y}-${m}-02`,
        allDay : true,
        color: '#9AE6B4',
        textColor: '#1C4532',
        borderColor: '#1C4532',
    },
    {
        id: '5',
        title: "広島西郵便局",
        start: `${y}-${m}-03`,
        allDay : true,
        color: '#9AE6B4',
        textColor: '#1C4532',
        borderColor: '#1C4532',
    },
    {
        id: '6',
        title: "広島西郵便局",
        start: `${y}-${m}-04`,
        allDay : true,
        color: '#9AE6B4',
        textColor: '#1C4532',
        borderColor: '#1C4532',
    },
    {
        id: '7',
        title: "広島西郵便局(09:00〜13:00)",
        start: `${y}-${m}-05`,
        allDay : true,
        color: '#9AE6B4',
        textColor: '#1C4532',
        borderColor: '#1C4532',
    },
    {
        id: '8',
        title: "広島西郵便局",
        start: `${y}-${m}-07`,
        allDay : true,
        color: '#9AE6B4',
        textColor: '#1C4532',
        borderColor: '#1C4532',
    },
    {
        id: '9',
        title: "休み(終日)",
        start: `${y}-${m}-06`,
        allDay : true,
        color: '#E2E8F0',
        textColor: '#4A5568',
        borderColor: '#4A5568',
    },
    {
        id: '10',
        title: "休み(09:00〜13:00)",
        start: `${y}-${m}-20`,
        allDay : true,
        color: '#E2E8F0',
        textColor: '#4A5568',
        borderColor: '#4A5568',
    },
];
export const ADD_EVENT = {
    id: "11",
    title: "休みだよ",
    start: `${y}-${m}-09`,
    end: `${y}-${m}-09`,
    allDay : true,
    color: '#E2E8F0',
    textColor: '#4A5568',
    borderColor: '#4A5568',
    is_personal_schedule: true,
}
