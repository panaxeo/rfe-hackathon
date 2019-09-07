import * as React from 'react';

import SvgSoundBg from './icons/js/SoundBg';
import SvgSoundProgress from './icons/js/SoundProgress';

interface SoundWaveProps {
  runProgress?: boolean;
  initialProgress?: number;
}

interface SoundWaveState {
  progress: number;
}

export class SoundWave extends React.Component<SoundWaveProps, SoundWaveState> {
  public state: SoundWaveState = { progress: this.props.initialProgress || 0 };

  private interval: number | null = null;

  public componentDidMount() {
    this.interval = setInterval(() => {
      if (!this.props.runProgress) {
        return;
      }
      let progress = this.state.progress + 0.3;
      if (progress > 1) {
        progress = 0;
      }
      this.setState({ progress });
    }, 1000);
  }

  public componentWillUnmount() {
    if (this.interval !== null) {
      clearInterval(this.interval);
    }
  }

  public render() {
    return (
      <div style={{ position: 'relative', height: 42 }}>
        <div>
          <SvgSoundBg style={{ position: 'absolute' }} />
          <div
            style={{
              float: 'left',
              position: 'absolute',
              overflow: 'hidden',
              width: this.state.progress * 625.0,
              transition: 'width 1s linear'
            }}
          >
            <SvgSoundProgress />
          </div>
        </div>
      </div>
    );
  }
}
