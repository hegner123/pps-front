import React, { useState, useEffect } from 'react'
import Delete from '../../../_assets/icons/delete.svg'
import Add from '../../../_assets/icons/add.svg'

import { ArrangeEditor, IconButton, InputGroup } from './style'

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
                  <div key={key.id}>
                      <div css="display:flex;flex-direction:row; color:var(--text-color);">
                          <InputGroup
                              type="text"
                              name="edit"
                              placeholder="Instrument"
                              value={key.instrument}
                              id={key.id}
                              onChange={(e) =>
                                  props.handleChange(e.target.value, key.id)
                              }
                              css={'height:100%;'}
                          />
                          <div css={'display:flex;'}>
                              <IconButton
                                  small
                                  open
                                  onClick={() => props.handleAdd()}
                              >
                                  <Add />
                              </IconButton>
                              <IconButton
                                  onClick={() => props.handleDelete(key.id)}
                              >
                                  <Delete />
                              </IconButton>
                          </div>
                      </div>
                  </div>
              )
          })

    return <ArrangeEditor>{displayArrangement}</ArrangeEditor>
}
