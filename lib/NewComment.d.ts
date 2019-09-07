import * as React from 'react';
interface NewCommentState {
    warningVisible: boolean;
    warningConfirmationVisible: boolean;
}
export declare class NewComment extends React.Component<any, NewCommentState> {
    state: NewCommentState;
    private textarea;
    private getRudeWordsSet;
    private clearState;
    private checkBadWordExistence;
    private submitReply;
    render(): JSX.Element;
}
export {};
