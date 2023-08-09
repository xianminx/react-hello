/**
 *
 * ### 8. Implement Drag-and-Drop using `useRef`
 * Build a simple drag-and-drop interface where users can move items between different containers. Utilize the `useRef` hook to manage the drag-and-drop functionality.
 */
import React, { useRef } from "react";
import "./styles.css";

export default function RxRef() {
  const dragItem = useRef();
  const dragItemNode = useRef();

  const handleDragStart = (e, params) => {
    console.log("drag starting...", params);
    dragItemNode.current = e.target;
    dragItemNode.current.addEventListener("dragend", handleDragEnd);
    dragItem.current = params;
    setTimeout(() => {
      dragItemNode.current.classList.add("hide");
    }, 0);
  };

  const handleDragEnter = (e, params) => {
    console.log("entering drag...", params);
    if (dragItemNode.current !== e.target) {
      console.log("target is NOT the same as dragged item");
      setList((oldList) => {
        let newList = JSON.parse(JSON.stringify(oldList));
        newList[params.grpI].items.splice(
          params.itemI,
          0,
          newList[dragItem.current.grpI].items.splice(
            dragItem.current.itemI,
            1
          )[0]
        );
        dragItem.current = params;
        localStorage.setItem("list", JSON.stringify(newList));
        return newList;
      });
    }
  };

  const handleDragEnd = () => {
    console.log("ending drag...");
    dragItemNode.current.classList.remove("hide");
    dragItemNode.current.removeEventListener("dragend", handleDragEnd);
    dragItem.current = null;
    dragItemNode.current = null;
  };

  const handleDrop = (e, params) => {
    console.log("dropping...", params);
    e.preventDefault();
    setList((oldList) => {
      let newList = JSON.parse(JSON.stringify(oldList));
      newList[params.grpI].items.splice(
        params.itemI,
        0,
        newList[dragItem.current.grpI].items.splice(
          dragItem.current.itemI,
          1
        )[0]
      );
      dragItemNode.current.classList.remove("hide");
      dragItemNode.current = null;
      return newList;
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const [list, setList] = React.useState([
    {
      title: "Group 1",
      items: ["1", "2", "3"],
    },
    {
      title: "Group 2",
      items: ["4", "5"],
    },
  ]);

  return (
    <div className="App">
      {list.map((grp, grpI) => (
        <div
          key={grp.title}
          className="group"
          onDragEnter={(e) => handleDragEnter(e, { grpI, itemI: 0 })}
          onDragOver={handleDragOver}
        >
          <div className="group-title">{grp.title}</div>
          {grp.items.map((item, itemI) => (
            <div
              key={item}
              draggable
              onDragStart={(e) => handleDragStart(e, { grpI, itemI })}
              onDrop={(e) => handleDrop(e, { grpI, itemI })}
              className="dnd-item"
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
