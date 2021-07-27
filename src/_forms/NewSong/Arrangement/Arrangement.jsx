import React, { useState, useReducer } from "react";
import Add from "../../../_assets/icons/add.svg";
import Delete from "../../../_assets/icons/delete.svg";
import { v4 as uuidv4 } from "uuid";
import { IconButton } from "../../../_components/project/Grid/p_tableCell/style";

export const Arrangement = (props) => {
  const [songTitle, setSongTitle] = useState("");
  const [form, dispatch] = useReducer(instrumentReducer, {
    arrangement: [{ instrument: "", id: uuidv4() }],
  });

  function instrumentReducer(state, { action, value, id }) {
    switch (action) {
      case "add":
        return {
          ...state,
          arrangement: [
            ...state.arrangement,
            {
              instrument: value,
              id: uuidv4(),
            },
          ],
        };
      case "delete":
        return {
          ...state,
          arrangement: state.arrangement.filter((inst) => inst.id != id),
        };
      case "edit":
        return {
          ...state,
          arrangement: state.arrangement.map((inst) => {
            if (inst.id != id) {
              return { ...inst };
            }
            return { ...inst, instrument: value, id: id };
          }),
        };

      default:
        return state;
    }
  }

  function handleClick(action, value, id) {
    dispatch({ action, value, id });
  }

  function handleChange(event) {
    const { name, value, id } = event.target;
    dispatch({ action: name, value, id });
  }

  function useReducer(reducer, initialState) {
    const [state, setState] = useState(initialState);

    function dispatch(action, id) {
      const nextState = reducer(state, action, id);
      setState(nextState);
    }
    return [state, dispatch];
  }

  const displayArrangement = form.arrangement.map((key) => {
    return (
      <div key={key.id}>
        <div css="display:flex;flex-direction:row; color:var(--text-color);">
          <input
            type="text"
            name="edit"
            placeholder="Instrument"
            value={key.instrument}
            id={key.id}
            onChange={handleChange}
            css={"height:100%;"}
          />
          <IconButton onClick={() => handleClick("delete", "delete", key.id)}>
            <Delete />
          </IconButton>
        </div>
      </div>
    );
  });

  return <div>{displayArrangement}</div>;
};
