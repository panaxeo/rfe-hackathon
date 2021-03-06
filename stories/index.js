import { Button } from '../lib/Button';
import { CommentListItem } from '../lib/CommentListItem';
import { Label } from '../lib/Label';
import { NewComment } from '../lib/NewComment';
import React from 'react';
import { SoundWave } from '../lib/SoundWave';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

const Title = styled.div`
  text-align: left;
  font: Bold 24px/33px Open Sans;
  letter-spacing: 0;
  color: #222222;
  margin-bottom: 36px;
`;

const PageContent = props => {
  return (
    <div style={{ padding: 80 }}>
      <div style={{ width: 625 }}>{props.children}</div>
    </div>
  );
};

storiesOf('Full featured demo', module)
  .addParameters({
    backgrounds: [
      { name: 'default', value: 'white', default: true },
      { name: 'legacy', value: '#f0f2fa' },
      { name: 'facebook', value: '#3b5998' }
    ]
  })
  .add('comments list', () => (
    <PageContent>
      <Title>Comments (19)</Title>
      <CommentListItem
        avatarURL="https://api.adorable.io/avatars/54/john.doe@adorable.png"
        title="John Doe"
        likesCount={3}
        text="I’d seriously worry the professional competency and hiring a business consultant who could not sort out her prescription."
      />
      <CommentListItem
        avatarURL="https://api.adorable.io/avatars/54/jane.doe@adorable.png"
        title="Jane Doe"
        likesCount={5}
        text="I’d seriously worry the professional competency and hiring a business consultant who could not sort out her prescription."
      />
      <Button style={{ marginTop: 14, marginBottom: 36 }}>
        View More Comments
      </Button>
      <Title>New Comment</Title>
      <NewComment defaultText="Oh shut up you warmongering smeg..." />
    </PageContent>
  ));

storiesOf('New Comment', module)
  .add('create comment box', () => (
    <PageContent>
      <Title>New Comment</Title>
      <NewComment />
    </PageContent>
  ))
  .add('sound wave', () => (
    <PageContent>
      <h3>Running</h3>
      <SoundWave runProgress={true} />
      <h3>Stopped at 50%</h3>
      <SoundWave runProgress={false} initialProgress={0.5} />
    </PageContent>
  ));

storiesOf('Button', module)
  .add('default', () => (
    <PageContent>
      <Button>I am Default Button</Button>
    </PageContent>
  ))
  .add('primary', () => (
    <PageContent>
      <Button primary={true}>I am Primary Button</Button>
    </PageContent>
  ));

storiesOf('Label', module).add('basic', () => (
  <PageContent>
    <Label>I'm default label</Label>
    <br />
    <Label type="warning">I'm warning label</Label>
  </PageContent>
));

storiesOf('Comment List', module).add('item', () => (
  <PageContent>
    <CommentListItem
      avatarURL="https://api.adorable.io/avatars/54/jane.doe@adorable.png"
      title="Jane Doe"
      likesCount={5}
      text="I’d seriously worry the professional competency and hiring a business consultant who could not sort out her prescription."
    />
  </PageContent>
));
