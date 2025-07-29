import { View, Heading, Flex} from '@aws-amplify/ui-react';
//import { useNavigate } from 'react-router-dom';
import Right_Side_Header from './Right_Side_Header';

export default function Header() {

  return (
    <View
      width="100%"
      height="120px"                       // ↓ shorter banner
      backgroundColor="white"             // ↓ white background
    >
      <Flex
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        height="100%"
        padding="1rem"                   // ↓ a bit less horizontal padding
      >
        {/* LEFT SIDE: Heading + centered button */}
        <Flex
          direction="column"
          alignItems="center"              // ↓ center horizontally
          justifyContent="center"          // ↓ center vertically
          gap="0.5rem"                     // ↓ less gap between items
        >
          <Heading level={3} fontSize="1.5rem">
            TaskMatch Home
          </Heading>
        </Flex>

        {/* RIGHT SIDE */}
        <Right_Side_Header />
      </Flex>
    </View>
  );
}

// import { View, Heading, Flex, Button } from '@aws-amplify/ui-react';
// import Right_Side_Header from './Right_Side_Header';

// export default function Header() {
//   return (
//     <View
//       width="100%"
//       height="120px"
//       backgroundColor="white"
//     >
//       <Flex
//         direction="row"
//         justifyContent="space-between"
//         alignItems="center"
//         height="100%"
//         padding="0 2rem"
//       >
//         {/* LEFT SIDE: Logo/Title centered in its section */}
//         <Flex direction="column" alignItems="flex-start" justifyContent="center" flex="1">
//           <Heading level={4} fontSize="1.6rem">
//             TaskMatch Home
//           </Heading>
//         </Flex>

//         {/* RIGHT SIDE: Navigation Buttons + Additional Header Items */}
//         <Flex direction="row" alignItems="center" gap="1.5rem">
//           <Flex direction="row" gap="1rem">
//             <Button variation="link" onClick={() => {/* scroll to How it works */}}>
//               How it works
//             </Button>
//             <Button variation="primary" onClick={() => {/* navigate to Sign up */}}>
//               Sign up
//             </Button>
//             <Button variation="warning" onClick={() => {/* navigate to Post Task */}}>
//               Post Task
//             </Button>
//           </Flex>
//           <Right_Side_Header />
//         </Flex>
//       </Flex>
//     </View>
//   );
// }



