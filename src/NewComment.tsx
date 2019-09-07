import * as React from 'react';

import styled, { css } from 'styled-components';

import { Button } from './Button';
import { InputField } from './InputField';
import { Label } from './Label';
import { SoundWave } from './SoundWave';
import { TextArea } from './TextArea';
import { words } from './badwords-en';

interface BadWordsWarningWrapperProps {
  visible: boolean;
}

const BadWordsWarningWrapper = styled.div<BadWordsWarningWrapperProps>`
  height: 0;
  overflow: hidden;
  transition: 0.5s;
  ${props =>
    props.visible &&
    css`
      height: 50px;
      transition: 0.5s;
    `}
`;
const BadWordsWarningLabelWrapper = styled.span<BadWordsWarningWrapperProps>`
  opacity: 0;
  transition: 0.5s;
  ${props =>
    props.visible &&
    css`
      opacity: 1;
      transition: 0.5s;
    `}
`;

interface NewCommentState {
  warningVisible: boolean;
  warningConfirmationVisible: boolean;
}

export class NewComment extends React.Component<any, NewCommentState> {
  public state: NewCommentState = {
    warningVisible: false,
    warningConfirmationVisible: false
  };

  private textarea: React.RefObject<HTMLTextAreaElement> = React.createRef();

  private getRudeWordsSet = async (): Promise<Set<string>> => {
    const set = new Set<string>();

    for (let s of words.split('\n')) {
      set.add(s);
    }

    return set;
  };

  private checkBadWordExistence = async (
    text: string
  ): Promise<{ word: string; sentence: string } | null> => {
    let words = await this.getRudeWordsSet();
    for (let sentence of text.split(/\./)) {
      for (let word of sentence.split(/\s/)) {
        if (words.has(word.toLowerCase())) {
          return { word, sentence };
        }
      }
    }
    return null;
  };

  private submitReply = async (text: string) => {
    let existence = await this.checkBadWordExistence(text);
    if (existence) {
      (window as any).responsiveVoice.speak(
        'Would you really say? ' + existence.sentence
      );
      this.setState({ warningVisible: true });
      setTimeout(() => {
        this.setState({ warningConfirmationVisible: true });
      }, 5000);
    }
  };

  public render() {
    return (
      <>
        <div style={{ width: '100%' }}>
          <InputField placeholder="Name" />
        </div>
        <div>
          <InputField placeholder="E-mail" />
          <TextArea rows={5} placeholder="Comment" ref={this.textarea} />
        </div>
        <BadWordsWarningWrapper visible={this.state.warningVisible}>
          <SoundWave />
        </BadWordsWarningWrapper>
        <BadWordsWarningLabelWrapper visible={this.state.warningVisible}>
          <Label
            type="warning"
            style={{ marginTop: 32, display: 'block', float: 'left' }}
          >
            Are you sure you want to post this comment?
          </Label>
        </BadWordsWarningLabelWrapper>
        <Button
          style={{
            float: 'right',
            marginTop: 16,
            opacity: this.state.warningVisible ? 0 : 1,
            display: this.state.warningConfirmationVisible ? 'none' : 'inherit',
            transition: '0.5s'
          }}
          primary={true}
          onClick={() =>
            this.textarea.current &&
            this.submitReply(this.textarea.current.value)
          }
        >
          Post Comment
        </Button>

        <Button
          style={{
            float: 'right',
            marginTop: 16,
            opacity:
              !this.state.warningVisible ||
              !this.state.warningConfirmationVisible
                ? 0
                : 1,
            display:
              this.state.warningVisible && this.state.warningConfirmationVisible
                ? 'inherit'
                : 'none',
            transition: '0.5s'
          }}
          onClick={() =>
            this.textarea.current &&
            this.submitReply(this.textarea.current.value)
          }
        >
          Yes I'm sure
        </Button>
      </>
    );
  }
}
