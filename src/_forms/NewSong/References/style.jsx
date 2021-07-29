import styled from 'styled-components'

export const ReferenceDelete = styled.span`
    /* width: 20px;
  background: #f7f7f7;
  border-radius: 0px 5px 5px 0;
  border: none;
  cursor: pointer;
  padding: 5px;
  transition: 300ms;
  &:hover {
    filter: brightness(0.5);
  } */
`

export const RefItem = styled.li`
    /* display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  color: #000;
  font-size: 14px;
  background: #fff;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px; */
`

export const RefP = styled.p`
    /* font-size: 12px;
  padding: 5px; */
`

export const Preview = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`

export const IconButton = styled.span`
    --button-size: ${(props) =>
        props.small
            ? 'calc(var(--nav-size) * 0.2)'
            : 'calc(var(--nav-size) * 0.3)'};
    width: var(--button-size);
    height: var(--button-size);
    background-color: var(--bg-accent);
    fill: var(--text-color);
    font-size: 20px;
    border-radius: 50%;
    padding: ${(props) => (props.small ? '3px' : '5px')};
    margin-left: ${(props) => (props.close ? '10px' : '20px')};

    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;
    cursor: pointer;
    &:hover {
        filter: brightness(1.2);
    }
`

export const Title = styled.p`
    color: var(--text-color);
    width: 75%;
`

export const Artist = styled.p`
    color: var(--text-color);
    font-size: 12px;
    margin-left: 10px;
`
