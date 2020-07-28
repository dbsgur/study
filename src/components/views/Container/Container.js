import React from 'react'
import styled from 'styled-components';
import Content from '../Content/Content';

class Container extends React.Component {
    state = {query : ""};
    render() {
        return (
            <div>
                <Imoge query = {this.state.query}>
                    <Input placeholder="암거나 입력해봐요" onKeyPress={this.handleInputKeyPress}></Input>
                </Imoge>

                <Content/>
            </div>
        )
    }
    handleInputKeyPress = event => {
        if (event.key === "Enter") {
            this.setState({
                query : event.target.value
            });
            event.target.value="";
          console.log(event.target.value);
        }
      };
}

const Input = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  width: 190px;
  height: 33px;
  padding: 3px;
  background: transparent;
  outline: none;
  border: none;
  font-size: 22px;
  color: white;
`;
const Imoge = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0.1) 10%,
      rgba(20, 20, 20, 0.7) 70%,
      rgba(20, 20, 20, 1)
    ),
    url(https://source.unsplash.com/random/1920x1080?${props => props.query});
  background-size: cover;
`;

export default Container;