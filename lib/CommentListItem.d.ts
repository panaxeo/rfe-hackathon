import * as React from 'react';
interface CommentListItemProps {
    title: string;
    text: string;
    avatarURL: string;
    likesCount: number;
}
export declare class CommentListItem extends React.Component<CommentListItemProps> {
    render(): JSX.Element;
}
export {};
