import React, { useState, useReducer, useEffect } from 'react'
import Add from '../../../_assets/icons/add.svg'
import Delete from '../../../_assets/icons/delete.svg'
import { v4 as uuidv4 } from 'uuid'
import { IconButton } from '../../../_components/project/Grid/p_tableCell/style'

export const Arrangement = (props) => {
    const [isLoading, setLoading] = useState(true)

    function handleUpdate() {
        setLoading(!isLoading)
    }

    useEffect(() => {
        handleUpdate()
    }, [])

    const displayArrangement = isLoading
        ? ''
        : props.template.map((key) => {
              return (
                  <div key={key.id} css={"margin-top:10px;"}>
                      <div css="display:flex;flex-direction:row; color:var(--text-color);">
                          <input
                              type="text"
                              name="edit"
                              placeholder="Instrument"
                              value={key.instrument}
                              id={key.id}
                              onChange={(e) =>
                                  props.handleChange(e.target.value)
                              }
                              css={'height:100%;'}
                          />
                          <IconButton
                              onClick={() =>
                                  handleClick('delete', 'delete', key.id)
                              }
                          >
                              <Delete />
                          </IconButton>
                      </div>
                  </div>
              )
          })

    return <div>{displayArrangement}</div>
}
