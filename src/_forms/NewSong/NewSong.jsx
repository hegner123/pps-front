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
  Browser,
  Label,
  Row,
  Input,
  InputGroup,
  InputGroupButton,
  IconButton,
  ArrangmentSection,
} from "./style";
import { useParams } from "react-router";

function NewSong(props) {
  const [songTitle, setSongTitle] = useState("");
  const [getReference, setGetReference] = useState("");

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
    <Row>
      <Arrangement />
    </Row>
  );
  //   <Row>
  //     <div>
  //       <Form>
  //         <FormTitle>New Song</FormTitle>
  //         <form name="newSong" onSubmit={handleSubmit}>
  //           <div>
  //             <FormInnerSection>
  //               <FormGroup>
  //                 <Label htmlFor="songTitle">Song Title</Label>
  //                 <Input
  //                   type="text"
  //                   placeholder="New Song"
  //                   name="songTitle"
  //                   value={songTitle}
  //                   onChange={handleFormChange}
  //                 />
  //               </FormGroup>
  //               <FormGroup>
  //                 <ArrangmentSection>
  //                   <div css="display:flex; align-items:center;">
  //                     <Label>Song Arrangement</Label>
  //                     <IconButton
  //                       small
  //                       close
  //                       onClick={() => handleClick("add", "")}
  //                     >
  //                       <Add />
  //                     </IconButton>
  //                   </div>
  //                   {displayArrangement}
  //                 </ArrangmentSection>
  //               </FormGroup>
  //             </FormInnerSection>
  //             <FormInnerSection>
  //               <FormGroup>
  //                 <Label>Search References</Label>
  //                 <div css="display:flex;flex-direction:row; color:var(--text-color); align-items:center;">
  //                   <InputGroup
  //                     placeholder=""
  //                     type="text"
  //                     name="referenceSeach"
  //                     value={getReference}
  //                     onChange={handleFormChange}
  //                   />
  //                   <InputGroupButton onClick={(e) => handleSearch(e)}>
  //                     <Search />
  //                   </InputGroupButton>
  //                 </div>
  //                 {refList}
  //               </FormGroup>
  //             </FormInnerSection>
  //           </div>
  //           <ActionGroup>
  //             <Button>Create</Button>
  //             <Btn to={`/project/${projectPage}`}>Cancel</Btn>
  //           </ActionGroup>
  //         </form>
  //       </Form>
  //       <Browser>
  //         <h2 css="color:var(--text-color);margin-bottom:20px;font-size:26px;font-weight:600;">
  //           References
  //         </h2>
  //         {referenceArray}
  //       </Browser>
  //     </div>
  //   </Row>
  // );
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
