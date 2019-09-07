import * as React from 'react';

import SvgSoundBg from './icons/js/SoundBg';
import SvgSoundProgress from './icons/js/SoundProgress';

interface SoundWaveState {
  progress: number;
}

export class SoundWave extends React.Component<any, SoundWaveState> {
  public state: SoundWaveState = { progress: 0 };

  public componentDidMount() {
    setInterval(() => {
      let progress = this.state.progress + 0.1;
      if (progress > 1) {
        progress = 0;
      }
      this.setState({ progress });
    }, 1000);
  }

  public render() {
    return (
      <div style={{ position: 'relative' }}>
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
