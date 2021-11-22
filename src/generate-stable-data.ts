import moment from "moment";
import { CustomTimelineItem } from "./types";
import { TimelineGroupBase } from "react-calendar-timeline";

const createItem = function (
  itemId: number,
  groupId: number,
  startValue: number,
  endValue: number,
  randomSeed: number,
  title: string,
  taskType: string
): CustomTimelineItem {
  let i = itemId;

  return {
    id: i + "",
    group: groupId + "",
    title: title,
    start_time: startValue,
    end_time: endValue,
    // canMove: false,
    // canResize: false,
    canMove: true,
    canResize:'both',
    className: "",
    taskType: taskType,
    style: {
    //   backgroundColor: randomColor({
    //     luminosity: "light",
    //     seed: randomSeed + i,
    //     format: "rgba",
    //     alpha: 0.6
    //   }),
        backgroundColor:'green',
    //   color: randomColor({ luminosity: "dark", seed: randomSeed + i })
      color: 'pink'
    }
  };
};

const createGroup = function (groupId: number): TimelineGroupBase {
  return {
    id: groupId,
    title: 'グループタイトル',
    height: 38,
    stackItems: false
  };
};

export const generateStableData = () => {
  let randomSeed = Math.floor(Math.random() * 1000);

  let groups: TimelineGroupBase[] = [];
  let items: CustomTimelineItem[] = [];

  // fixed groups, update as needed to create enough examples.
  groups.push(createGroup(1));
  groups.push(createGroup(2));
  groups.push(createGroup(3));

  const mStart = moment().startOf("day");

  const mDefaultBegin = mStart.clone().add(2, "hour");
  const mDefaultEnd = mStart.clone().add(10, "hour");
  const mOffsetBegin = mStart.clone().add(12, "hour");
  const mOffsetEnd = mStart.clone().add(20, "hour");
  console.log(mDefaultBegin)

  // First item is by itself in group 1 and should render in the
  // top half of the group.
  items.push(
    createItem(
      1,
      1,
      mDefaultBegin.valueOf(),
      mDefaultEnd.valueOf(),
      randomSeed,
      "111First Group: Single Item: Render Top Half",
      "UNKNOWN"
    )
  );

  // The next two items are in group two and overlap in time.  We
  // should be able to calculate the vertical offset of the second
  // item so that it renders below the first.
  items.push(
    createItem(
      2,
      2,
      mDefaultBegin.valueOf(),
      mDefaultEnd.valueOf(),
      randomSeed,
      "222Second Group: Two Items: Top Half: Time Collision",
      "TYPE_ONE"
    )
  );

  items.push(
    createItem(
      3,
      2,
      mDefaultBegin.valueOf(),
      mDefaultEnd.valueOf(),
      randomSeed,
      "333Second Group: Two Items: Bottom Half: Time Collision",
      "TYPE_TWO"
    )
  );

  // The next two items are not colliding in time.  However, we
  // want the second item to render in the bottom half of the
  // group.
  items.push(
    createItem(
      4,
      3,
      mDefaultBegin.valueOf(),
      mDefaultEnd.valueOf(),
      randomSeed,
      "444Third Group: Two Items: Bottom Half: No Collision",
      "TYPE_ONE"
    )
  );

  items.push(
    createItem(
      5,
      3,
      mOffsetBegin.valueOf(),
      mOffsetEnd.valueOf(),
      randomSeed,
      "555Third Group: Two Items: Bottom Half: No Collision",
      "TYPE_TWO"
    )
  );

  console.log('AAAA');
  console.log(groups);
  console.log(items);
  return { groups, items };
};
