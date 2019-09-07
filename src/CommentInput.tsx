import * as React from 'react';

import styled from 'styled-components';
import { words } from './badwords-en';

const Div = styled.div`
  html,
  body {
    background-color: #f0f2fa;
    font-family: 'PT Sans', 'Helvetica Neue', 'Helvetica', 'Roboto', 'Arial',
      sans-serif;
    color: #555f77;
    -webkit-font-smoothing: antialiased;
  }

  input,
  textarea {
    outline: none;
    border: none;
    display: block;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    font-family: 'PT Sans', 'Helvetica Neue', 'Helvetica', 'Roboto', 'Arial',
      sans-serif;
    font-size: 1rem;
    color: #555f77;
  }
  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    color: #ced2db;
  }
  input::-moz-placeholder,
  textarea::-moz-placeholder {
    color: #ced2db;
  }
  input:-moz-placeholder,
  textarea:-moz-placeholder {
    color: #ced2db;
  }
  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    color: #ced2db;
  }

  p {
    line-height: 1.3125rem;
  }

  .comments {
    margin: 2.5rem auto 0;
    max-width: 60.75rem;
    padding: 0 1.25rem;
  }

  .comment-wrap {
    margin-bottom: 1.25rem;
    display: table;
    width: 100%;
    min-height: 5.3125rem;
  }

  .photo {
    padding-top: 0.625rem;
    display: table-cell;
    width: 3.5rem;
  }
  .photo .avatar {
    height: 2.25rem;
    width: 2.25rem;
    border-radius: 50%;
    background-size: contain;
  }

  .comment-block {
    padding: 1rem;
    background-color: #fff;
    display: table-cell;
    vertical-align: top;
    border-radius: 0.1875rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
  }
  .comment-block textarea {
    width: 100%;
    resize: none;
  }

  .comment-text {
    margin-bottom: 1.25rem;
  }

  .bottom-comment {
    color: #acb4c2;
    font-size: 0.875rem;
  }

  .comment-date {
    float: left;
  }

  .comment-actions {
    float: right;
  }
  .comment-actions li {
    display: inline;
    margin: -2px;
    cursor: pointer;
  }
  .comment-actions li.complain {
    padding-right: 0.75rem;
    border-right: 1px solid #e1e5eb;
  }
  .comment-actions li.reply {
    padding-left: 0.75rem;
    padding-right: 0.125rem;
  }
  .comment-actions li:hover {
    color: #0095ff;
  }
`;

export class CommentInput extends React.Component {
  private textarea: React.RefObject<HTMLTextAreaElement> = React.createRef();

  private getRudeWordsSet = async (): Promise<Set<string>> => {
    // const response = await fetch('/badwords-en.txt');

    // const result = await response.text();
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
        if (words.has(word)) {
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
    }
  };

  public render() {
    return (
      <Div>
        <div className="comment-wrap">
          <div className="photo">
            <div
              className="avatar"
              style={{
                backgroundImage:
                  "url('https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg'"
              }}
            ></div>
          </div>
          <div className="comment-block">
            <form action="">
              <textarea
                name=""
                id="input"
                cols={30}
                rows={3}
                placeholder="Add comment..."
                ref={this.textarea}
              ></textarea>
            </form>
            <ul className="comment-actions">
              <li
                className="reply"
                id="submit-button"
                onClick={() =>
                  this.textarea.current &&
                  this.submitReply(this.textarea.current.value)
                }
              >
                Send
              </li>
            </ul>
          </div>
        </div>
      </Div>
    );
  }
}
