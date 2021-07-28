import React, { useState, useReducer } from "react";
import { connect } from "react-redux";
import { projectActions, refActions } from "../../_actions";
import Add from "../../_assets/icons/add.svg";
import Delete from "../../_assets/icons/delete.svg";
import Search from "../../_assets/icons/search.svg";
import { References } from "./References";
import { Arrangement } from "./Arrangement";
import {
  ActionGroup,
  Button,
  Btn,
  Form,
  FormInnerSection,
  FormTitle,
  FormGroup,
  Label,
  Main,
  Input,
  InputGroup,
  InputGroupButton,
  IconButton,
  ArrangmentSection,
  Section,
  Group,
} from "./style";
import { useParams } from "react-router";

function NewSong(props) {
  const [getReference, setGetReference] = useState("");
  const [valSongTitle, setSongTitle] = useState("");
  const [valSongKey, setSongKey] = useState("");
  const [valSongBpm, setSongBpm] = useState("");
  const [valSongLyrics, setSongLyrics] = useState("");
  const [references, setReferences] = useState([""]);
  const projectPage = useParams().id;
  const currentProject = props.project;

  function handleSubmit(event) {
    event.preventDefault();
    let song = {
      id: currentProject,
      songTitle: songTitle,
      arrangement: [...form.arrangement],
      references: [...references],
      path: `/project/${projectPage}`,
    };
    if (song.songTitle) {
      props.createSong(song);
    }
  }

  return (
    <Main>
      <Section>
        <Form>
          <FormTitle>New Song</FormTitle>
          <form name="newSong" onSubmit={handleSubmit}>
            <Group>
              <FormInnerSection>
                <FormGroup>
                  <Label htmlFor="songTitle">Song Title</Label>
                  <Input
                    type="text"
                    placeholder="New Song"
                    name="songTitle"
                    value={valSongTitle}
                    onChange={(e) => setSongTitle(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="key">Key</Label>
                  <Input
                    type="text"
                    placeholder="key"
                    name="key"
                    value={valSongKey}
                    onChange={(e) => setSongKey(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="BPM">BPM</Label>
                  <Input
                    type="text"
                    placeholder="120bpm"
                    name="bpm"
                    value={valSongBpm}
                    onChange={(e) => setSongBpm(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="lyrics">Lyrics</Label>
                  <textarea
                    name="typedLyrics"
                    id="typedLyrics"
                    cols="30"
                    rows="10"
                    value={valSongLyrics}
                    onChange={(e) => setSongLyrics(e.target.value)}
                    placeholder="Never gunna give you up..."
                  ></textarea>
                  <Input
                    type="file"
                    name="lyris"
                    onChange={(e) => console.log(e.target.value)}
                  />
                </FormGroup>
              </FormInnerSection>
              <FormInnerSection>
                <FormGroup>
                  <ArrangmentSection>
                    <div css={"display:flex;"}>
                      <Label>Song Arrangement</Label>
                      <IconButton
                        small
                        close
                        onClick={() => handleClick("add", "")}
                      >
                        <Add />
                      </IconButton>
                    </div>
                    <div>
                      <label>Template</label>
                      <select id="arrangement-template">
                        <option value="">-----</option>
                        <option value="test">Test</option>
                      </select>
                    </div>
                    <Arrangement />
                  </ArrangmentSection>
                </FormGroup>
              </FormInnerSection>
              <FormInnerSection>
                <FormGroup>
                  <Label>Search References</Label>
                  <div css="display:flex;flex-direction:Main; color:var(--text-color); align-items:center;">
                    <InputGroup
                      placeholder=""
                      type="text"
                      name="referenceSeach"
                      value={getReference}
                    />
                    <InputGroupButton onClick={(e) => handleSearch(e)}>
                      <Search />
                    </InputGroupButton>
                  </div>
                </FormGroup>
              </FormInnerSection>
            </Group>
            <ActionGroup>
              <Button>Create</Button>
              <Btn to={`/project/${projectPage}`}>Cancel</Btn>
            </ActionGroup>
          </form>
        </Form>
      </Section>
      <Section></Section>
      <Section></Section>
      {/* <BMainser>
          <h2 css="color:var(--text-color);margin-bottom:20px;font-size:26px;font-weight:600;">
            References
          </h2>
        </BMainser> */}
    </Main>
  );
}

function mapState(state) {
  return {
    project: state.userData.current._id,
  };
}

const actionCreators = {
  createSong: projectActions.createSong,
};

const connectedNewSong = connect(mapState, actionCreators)(NewSong);
export { connectedNewSong as NewSong };
