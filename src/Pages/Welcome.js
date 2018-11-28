import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player'
// import { BrowserRouter as Link } from 'react-router-dom';

class Welcome extends React.Component {
  render() {
    return (
      <section>
        <header className="Hero">
          <ReactPlayer
            url='https://www.youtube.com/watch?v=xm_ftNUKlTs'
            controls="false"
            loop="true"
            width="100vw"
            height="100vw"
            playing
            youtubeConfig={{ playerVars: { controls: 0 } }}
            className="Hero__video"
          />
          <Typography variant="h1" gutterBottom>
            Welcome on Challenge
          </Typography>
        </header>

        <section className="Section">
          <Button
            variant="extendedFab"
            color="primary"
            className="ButtonPadding"
          >
            {/* <Link to="/get-started"> */}
              Get Started
            {/* </Link> */}
          </Button>
        </section>
      </section>
    )
  }
}

export default (Welcome);
