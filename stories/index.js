import { Button } from '../lib/Button';
import { CommentWrapper } from '../lib/CommentWrapper';
import { NewComment } from '../lib/NewComment';
import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

const Title = styled.div`
  text-align: left;
  font: Bold 24px/33px Open Sans;
  letter-spacing: 0;
  color: #222222;
  margin-bottom: 36px;
`;

storiesOf('Comments', module)
  .addParameters({
    backgrounds: [
      { name: 'default', value: 'white', default: true },
      { name: 'legacy', value: '#f0f2fa' },
      { name: 'facebook', value: '#3b5998' }
    ]
  })
  .add('basic list', () => (
    <div style={{ padding: 80 }}>
      <div style={{ width: 625 }}>
        <Title>Comments (19)</Title>
        <CommentWrapper
          avatarURL="https://api.adorable.io/avatars/54/john.doe@adorable.png"
          title="John Doe"
          likesCount={3}
          text="I’d seriously worry the professional competency and hiring a business consultant who could not sort out her prescription."
        />
        <CommentWrapper
          avatarURL="https://api.adorable.io/avatars/54/jane.doe@adorable.png"
          title="Jane Doe"
          likesCount={5}
          text="I’d seriously worry the professional competency and hiring a business consultant who could not sort out her prescription."
        />
        <Button style={{ marginTop: 14, marginBottom: 36 }}>
          View More Comments
        </Button>
        <Title>New Comment</Title>
        <NewComment />
      </div>
    </div>
  ));

storiesOf('New Comment', module).add('create comment box', () => (
  <div style={{ padding: 80 }}>
    <div style={{ width: 625 }}>
      <Title>New Comment</Title>
      <NewComment />
    </div>
  </div>
));

storiesOf('Button', module)
  .add('default', () => <Button>I am Default Button</Button>)
  .add('primary', () => <Button primary={true}>I am Primary Button</Button>);

storiesOf('Label', module).add('basic', () => (
  <div>
    <Label>I'm default label</Label>
    <br />
    <Label type="warning">I'm warning label</Label>
  </div>
));
