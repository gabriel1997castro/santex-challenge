import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

interface LoadingProps {
  color?: string;
}
const Loading = styled.div<LoadingProps>`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid ${(props) => props.color};
  border-right: 2px solid ${(props) => props.color};
  border-bottom: 2px solid ${(props) => props.color};
  border-left: 4px solid ${(props) => props.color};
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export default Loading;
