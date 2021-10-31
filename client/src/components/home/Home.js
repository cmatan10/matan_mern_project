import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Fade from 'react-reveal/Fade'
import {Link} from 'react-router-dom'
import backround1 from './icon/bracelethome.png'


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: '',
    imgPath:
      'https://download.hipwallpaper.com/desktop/1280/1024/76/15/8QFgBj.jpg',
  },
  {
    label: '',
    imgPath:
      'https://download.hipwallpaper.com/desktop/1366/768/38/29/GVWUpI.jpg',
  },
  {
    label: '',
    imgPath:
      'https://c4.wallpaperflare.com/wallpaper/184/81/255/the-one-ring-the-lord-of-the-rings-fantasy-art-movies-wallpaper-preview.jpg',
  },
  {
    label: '',
    imgPath:
      'https://images.wallpaperscraft.com/image/single/chain_pendant_decoration_141542_2560x1440.jpg',
  },
];

function Home() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div style={{ backgroundImage: `url(${backround1})` }}>

    <Fade top cascade>
    
    <Box sx={{ maxWidth: 1600, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          marginTop: '-50px',
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
    
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <Link to="/products">  
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
           <Fade>   <Box
                component="img"
                sx={{
                  height: 530,
                  display: 'block',
                  maxWidth: 1600,
                  overflow: 'hidden',
                  width: '100%',
                  
                }}
                src={step.imgPath}
                alt={step.label}
              /></Fade>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>  
       </Link>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
      
    </Box>
    <div className="home_text"> 
      <h3>
      <br></br>
“A popular speaker started off a seminar by holding up a $20 bill. A crowd of 200 had gathered to hear him speak. He asked, ‘Who would like this $20 bill?’

200 hands went up.

He said, ‘I am going to give this $20 to one of you but first, let me do this.’ He crumpled the bill up.

He then asked, ‘Who still wants it?’

All 200 hands were still raised.

‘Well,’ he replied, ‘What if I do this?’ Then he dropped the bill on the ground and stomped on it with his shoes.

He picked it up, and showed it to the crowd. The bill was all crumpled and dirty.

‘Now who still wants it?’

All the hands still went up.

‘My friends, I have just showed you a very important lesson. No matter what I did to the money, you still wanted it because it did not decrease in value. It was still worth $20. Many times in our lives, life crumples us and grinds us into the dirt. We make bad decisions or deal with poor circumstances. We feel worthless. But no matter what has happened or what will happen, you will never lose your value. You are special – Don’t ever forget it!’
</h3>

    </div>
    &nbsp;
  
    </Fade>
</div>
  );
}

export default Home;