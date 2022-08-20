import styled from 'styled-components'

export const SettingScreen = styled.div`
    width: 100%;
    grid-column: 1/-1;
`

export const SettingLabel = styled.label`
    display: block;
    color: var(--bg);
`
export const SettingLi = styled.li`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const ColorDisplay = styled.span`
    background-color: ${(props) => props.color};
    width: 100px;
    padding: 1px;
    position: relative;
    z-index: 1;
    &:hover {
        cursor: pointer;
    }
`
