import * as React from 'react';
interface SoundWaveProps {
    runProgress?: boolean;
    initialProgress?: number;
}
interface SoundWaveState {
    progress: number;
}
export declare class SoundWave extends React.Component<SoundWaveProps, SoundWaveState> {
    state: SoundWaveState;
    private interval;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
