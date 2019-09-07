import * as React from 'react';

import SVGLike from './icons/js/Like';
import styled from 'styled-components';

const Avatar = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 26px;
  position: absolute;
`;
const Wrapper = styled.div`
  width: 567px;
  margin-bottom: 10px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  padding: 24px 34px 24px 24px;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 3px 6px #00000033;
    transition: 0.3s;
  }
`;

const Title = styled.div`
  font-size: 20px;
  text-align: left;
  font: Bold 20px/27px Open Sans;
  letter-spacing: 0;
  color: #222222;
  opacity: 1;
  margin-bottom: 12px;
`;

const Text = styled.div`
  font-size: 20px;
  text-align: left;
  font: Regular 20px/27px Open Sans;
  letter-spacing: 0;
  color: #666666;
  opacity: 1;
`;

const ActionButton = styled.a`
  text-align: left;
  font: Regular 16px/22px Open Sans;
  letter-spacing: 0;
  color: #287fb8;
  opacity: 1;
  margin-right: 24px;
`;

const LikeCount = styled.span`
  float: right;
  text-align: right;
  margin-right: 10px;
  font: Regular 16px/22px Open Sans;
  letter-spacing: 0;
  color: #707070;
  opacity: 1;
  .icon {
    margin-left: 5px;
  }
  display: flex;
  align-items: center;
`;

interface CommentWrapperProps {
  title: string;
  text: string;
  avatarURL: string;
  likesCount: number;
}

export class CommentWrapper extends React.Component<CommentWrapperProps> {
  public render() {
    const { avatarURL, title, text, likesCount } = this.props;
    return (
      <Wrapper>
        <Avatar src={avatarURL} />
        <div style={{ marginLeft: 78, marginTop: 12 }}>
          <LikeCount>
            {likesCount}
            <SVGLike style={{ verticalAlign: 'middle' }} class="icon" />
          </LikeCount>
          <Title>{title}</Title>
          <Text>{text}</Text>
          <div style={{ marginTop: 24 }}>
            <ActionButton>Reply</ActionButton>
            <ActionButton>Share</ActionButton>
          </div>
        </div>
      </Wrapper>
    );
  }
}
