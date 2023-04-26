import React, { useState } from "react";
import "./App.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import _ from "lodash";
import { v4 } from "uuid";

const item = {
  id: v4(),
  name: "iPhone",
  desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone .",
  startDate: "2022-08-01",
  endDate: "2022-08-10",
  time: "00:20",
};

const item2 = {
  id: v4(),
  name: "PS5",
  desc: "Everything you need to know about the PlayStation®5 console and PlayStation®5 Digital Editi",
  startDate: "2022-08-06",
  endDate: "2022-08-11",
  time: "01:20",
};

function Application() {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [state, setState] = useState({
    todo: {
      title: "Todo",
      items: [item, item2],
    },
    "in-progress": {
      title: "In Progress",
      items: [],
    },
    done: {
      title: "Completed",
      items: [],
    },
  });

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) {
      return;
    }

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }

    const itemCopy = { ...state[source.droppableId].items[source.index] };

    setState((prev) => {
      prev = { ...prev };

      prev[source.droppableId].items.splice(source.index, 1);

      prev[destination.droppableId].items.splice(
        destination.index,
        0,
        itemCopy
      );

      return prev;
    });
  };

  const addItem = () => {
    setState((prev) => {
      return {
        ...prev,
        todo: {
          title: "Todo",
          items: [
            {
              id: v4(),
              name: text,
              desc: description,
              startDate: date,
              endDate: endDate,
              time: time,
            },
            ...prev.todo.items,
          ],
        },
      };
    });

    setText("");
  };

  return (
    <div>
      <div className="App">
        <div>
          <div className="flex">
            <h2>Add New Tasks</h2>
            <li>
              <label>Project Name</label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </li>
            <li>
              {" "}
              <label>Attachment</label>
              <input type="file" />
            </li>
            <li>
              <label>Description</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </li>
            <h4>Defaut Section</h4>
            <li>
              <label>Status</label>
              <select>
                <option>Todo</option>
                <option>Completed</option>
              </select>
            </li>
            <li>
              <label>Start Date</label>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
              />
            </li>
            <li>
              <label>End Date</label>
              <input
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                type="date"
              />
            </li>
            <li>
              <label>Duration</label>
              <input
                value={time}
                onChange={(e) => setTime(e.target.value)}
                type="time"
              />
            </li>
            <button className="btn" onClick={addItem}>
              Add item
            </button>
          </div>
        </div>

        <DragDropContext onDragEnd={handleDragEnd}>
          {_.map(state, (data, key) => {
            return (
              <div key={key} className={"column"}>
                <h3>{data.title}</h3>

                <Droppable droppableId={key}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={"droppable-col"}
                      >
                        {data.items.map((el, index) => {
                          return (
                            <Draggable
                              key={el.id}
                              index={index}
                              draggableId={el.id}
                            >
                              {(provided, snapshot) => {
                                console.log(snapshot);
                                return (
                                  <div
                                    className={`item ${
                                      snapshot.isDragging && "dragging"
                                    }`}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    {el.name}
                                    <p className="desc">{el.desc}</p>
                                    <p className="date">
                                      Start-Date: {el.startDate} <br />{" "}
                                      End-Date:
                                      {el.endDate}
                                    </p>
                                    <p>Duration : {el.time} </p>
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
}

export default Application;
