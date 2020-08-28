import React, {
  Component,
  Fragment,
  useRef,
  useState,
  useCallback,
} from "react";
import styled from "styled-components";
import { compose } from "recompose";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { withFirebase } from "upe-react-components";
import update from "immutability-helper";

import Loader from "../Loader";
import { Container } from "../../styles/global";
import { asyncForEach } from "../../util/helper.js";

const styleOne = {
  textAlign: "center",
  border: "1px solid gray",
  borderRadius: "5px",
  cursor: "move",
  paddingTop: "5px",
  paddingBottom: "5px",
};

const CenteredForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
`;

export const Card = ({ id, text, index, moveCard, removeQuestion }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "question",
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: "question", id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <>
      <div ref={ref} style={{ ...styleOne, opacity }}>
        {text} <Button onClick={() => removeQuestion(index)}> X </Button>
      </div>
      <br />
    </>
  );
};

const style = {
  textAlign: "center",
  itemAlign: "center",
};

export const Example = ({
  questions,
  questionMap,
  that,
  levelConfig,
  levelName,
  allQuestions,
  firebase,
  updateFunc,
}) => {
  const [cards, setCards] = useState([...questions]);
  const [adding, setAdding] = useState("");

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = cards[dragIndex];
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
    },
    [cards]
  );

  const removeQuestion = useCallback(
    (index) => {
      const temp = [...cards];
      temp.splice(index, 1);
      setCards(temp);
    },
    [cards]
  );

  const renderCard = (card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        text={questionMap[card.id]}
        moveCard={moveCard}
        removeQuestion={removeQuestion}
      />
    );
  };

  function testSubmit() {
    var orderedList = [];
    {
      cards.map((card, i) => {
        orderedList.push({ id: card.id, order: i });
      });
    }

    delete levelConfig[levelName];
    levelConfig[levelName] = orderedList;

    firebase
      .levelConfig()
      .set(levelConfig)
      .then(() => {
        console.log("Level Updated: ", levelName);
        updateFunc();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function addQuestions(event) {
    console.log("Added Questions");
    const temp = [...cards];
    temp.push(allQuestions[adding]);
    setCards(temp);
    event.preventDefault();
  }

  function onChange(event) {
    setAdding(event.target.value);
  }

  function checkIn(val) {
    for (var i = 0; i < cards.length; i++) {
      if (val.id && cards[i].id === val.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div styled={{ textAlign: "center", itemAlign: "center" }}>
      <CenteredForm onSubmit={addQuestions}>
        <Form.Row style={{ width: "100%" }} key={0}>
          <Form.Group controlId={4} style={{ width: "100%" }}>
            <Form.Label>
              <h5> Other Questions </h5>
            </Form.Label>
            <Form.Control
              required
              name={"addQ"}
              as="select"
              onChange={onChange}
            >
              <option value={0}> - </option>
              {allQuestions.map((item, index) => {
                if (checkIn(item)) {
                  return <> </>;
                } else {
                  return (
                    <option key={index} value={index}>
                      {" "}
                      {questionMap[item.id]}{" "}
                    </option>
                  );
                }
              })}
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Button type="submit">Add Question</Button>
      </CenteredForm>

      <br />

      <div style={style} style={{ textAlign: "center" }}>
        <h5> Level Questions </h5>
        {cards.map((card, i) => renderCard(card, i))}
      </div>
      <Button onClick={testSubmit} style={{ width: "50%" }}>
        Submit
      </Button>
    </div>
  );
};
