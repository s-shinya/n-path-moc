import React from "react";
import { GetItemsProps, ItemContext } from "react-calendar-timeline";
import { CustomTimelineItem } from "./types";

interface itemRendererProps {
  item: CustomTimelineItem;
  itemContext: ItemContext;
  getItemProps: (x:any) => GetItemsProps;
}

export const itemRenderer = ({
  item,
  itemContext,
  getItemProps
}: itemRendererProps) => {
  const props:any = getItemProps({
    style: {
      borderStyle: "solid",
      borderWidth: 1,
      borderRadius: 4,
      borderLeftWidth: itemContext.selected ? 3 : 1,
      borderRightWidth: itemContext.selected ? 3 : 1,
      top: ""
    }
  });

  console.log("props: ", props);

  switch (item.taskType) {
    // type one renders in the top half of the group.
    case "TYPE_ONE":
      props.style.height = 16;
      // props.style.top = 10;
      return <div {...props}>{itemContext.title}</div>;

    // type two renders in the bottom half of the group.
    case "TYPE_TWO":
      props.style.height = 16;
      // props.style.top = 10;   <--- how does this become relative?
      return <div {...props}>{itemContext.title}</div>;

    // default style will be to render the item in the
    // middle of the group.
    default:
      props.style.height = 16;
      props.style.top = 10;
      return <div {...props}>{itemContext.title}</div>;
  }
};
