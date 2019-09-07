import * as React from 'react';
interface SoundWaveState {
    progress: number;
}
export declare class SoundWave extends React.Component<any, SoundWaveState> {
    state: SoundWaveState;
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
