import { Flex, Text, Button } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import HireAStudentImage from '../../ImageCodes/HireAStudent1';
import PostATaskImage from '../../ImageCodes/PostATask1';
import GetJobDoneImage from '../../ImageCodes/GetJobDone1';
import GirlThinkingImage from '../../ImageCodes/GirlThinking1';

export default function SubHeader({
  outerPadding = '0%',
  panelPadding = '1.5%',
  buttonVerticalMargin = '2%',
  borderRadius = '0px',
}) {
  const navigate = useNavigate();

  const handlePostTask = () => {
    navigate('/taskmatch/other');
  };

  const handleExplain = () => {
    navigate('/taskmatch/explanation');
  };

  return (
    <Flex
      direction="column"
      width="100%"
      padding={outerPadding}
      gap="2%"
    >
      {/* — Top call-to-action section — */}
      <Flex
        width="100%"
        direction="column"
        alignItems="center"
        justifyContent="center"
        padding={panelPadding}
        backgroundColor='rgb(255, 255, 255)'
        style={{ borderRadius }}
      >
        <Text
          fontFamily="Inika, serif"
          fontSize="clamp(1.5rem, 3.5vw, 3.5rem)"
          color="black"
          textAlign="center"
          marginBottom="0.5rem"
        >
          Hire a student today
        </Text>
        <Button
          onClick={handlePostTask}
          width="clamp(140px, 25vw, 300px)"
          fontSize="clamp(0.875rem, 1.2vw, 1.25rem)"
          borderRadius="clamp(20px, 0.5vw, 12px)"
        >
          Post Task
        </Button>
      </Flex>

      <Flex
        width="100%"
        direction="row"
        wrap="wrap"
        justifyContent="space-between"
        alignItems="stretch"
        gap="0"
        minWidth="10px"
      >
        {/* — Left panel — */}
        <Flex
          basis="50%"
          grow={1}
          shrink={1}
          minWidth="10px"
          padding={panelPadding}
          backgroundColor="rgba(3,15,253,0.55)"
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          style={{
            aspectRatio: '4 / 3',
            borderRadius,
          }}
        >
          <Text
            fontFamily="Inika, serif"
            fontSize="clamp(1rem, 4vw, 5rem)"
            color="white"
            marginTop="10%"
            minWidth="10px"
          >
            How TaskMatch Works
          </Text>

          <Flex
            width="90%"
            justifyContent="space-between"
            wrap="wrap"
            gap="2%"
            marginTop="10%"
            minWidth="10px"
          >
            {[HireAStudentImage, PostATaskImage, GetJobDoneImage].map((ImageComp, i) => (
              <Flex key={i} direction="column" width="30%" minWidth="10px" alignItems="center">
                <ImageComp />
                <Text
                  fontFamily="Inika, serif"
                  fontSize="clamp(1rem, 1.5vw, 2rem)"
                  color="white"
                  textAlign="center"
                  marginTop="1rem"
                  minWidth="1px"
                >
                  {[
                    '1. Post a task and receive offers',
                    '2. Hire the right student for the job',
                    '3. Get the job done!',
                  ][i]}
                </Text>
              </Flex>
            ))}
          </Flex>

          <Flex
            width="100%"
            justifyContent="center"
            marginTop="10%"
            marginBottom={buttonVerticalMargin}
            minWidth="10px"
          >
            <Button
              onClick={handleExplain}
              width="clamp(160px, 30vw, 360px)"
              fontSize="clamp(0.895rem, 1.5vw, 1.5rem)"
              borderRadius="clamp(30px, 0.5vw, 16px)"
              minWidth="10px"
            >
              Click for detailed explanation
            </Button>
          </Flex>
        </Flex>

        {/* — Right image — */}
        <Flex
          basis="35%"
          grow={1}
          shrink={1}
          minWidth="10px"
          alignItems="center"
          justifyContent="center"
          style={{
            aspectRatio: '4 / 3',
            borderRadius,
            overflow: 'hidden',
          }}
        >
          <GirlThinkingImage width="100%" />
        </Flex>
      </Flex>
    </Flex>
  );
}





