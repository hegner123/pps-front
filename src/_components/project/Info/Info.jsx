import React from "react";
import { connect } from "react-redux";
import { InfoGrid, TitleGrid, ProjectInfoGrid, Title, Field } from "./style";

const Info = (props) => {
  let selected = props.userData.selected;
  let song = props.userData.current.songs[selected];
  let project = props.userData.current;

  return (
    <InfoGrid>
      <TitleGrid>
        <div>
          <Title>
            <h2>{song.song_title}</h2>
          </Title>
        </div>
        <div>
          <strong css={"color:var(--white)"}>Members: </strong>
          {project.members.map((data) => (
            <span css={"color:var(--white);"} key={data.username}>
              {data.username}
            </span>
          ))}
        </div>
        <div>
          <Field css={"text-align:right;"}>
            <button>Edit Song</button>
          </Field>
        </div>
      </TitleGrid>
      <ProjectInfoGrid>
        <Field>
          <strong>BPM: </strong>
          {song.song_bpm}
        </Field>
        <Field>
          <strong>KEY: </strong>
          {song.song_key}
        </Field>
        <Field>
          <strong>REFERENCES: </strong>
          {song.song_references.map((ref) => (
            <div>
              <span>{ref.name}</span>
              <audio src={ref.preview} controls css={"margin-left:10px;"} />
            </div>
          ))}
        </Field>
        <Field>Lyrics</Field>
        <Field>Notes</Field>
        <Field>Reference Preview</Field>
      </ProjectInfoGrid>
    </InfoGrid>
  );
};

function mapState(state) {
  const { userData } = state;
  return { userData };
}

const connectedInfo = connect(mapState)(Info);
export { connectedInfo as Info };
