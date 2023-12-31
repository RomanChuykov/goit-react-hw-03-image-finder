import styled from "styled-components";
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(40, 40, 40, 0.65);
`;

export const ModalViewer = styled.div`
  width: 80vw;
  height: 80vh;

  background-color: transparent;

  border-radius: 10px;
  overflow: hidden;
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
