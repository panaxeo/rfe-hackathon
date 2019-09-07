import * as React from 'react';
interface CommentWrapperProps {
    title: string;
    text: string;
    avatarURL: string;
    likesCount: number;
}
export declare class CommentWrapper extends React.Component<CommentWrapperProps> {
    render(): JSX.Element;
}
export {};
