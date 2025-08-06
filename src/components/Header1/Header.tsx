import { View, Heading, Flex, Button } from '@aws-amplify/ui-react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import Right_Side_Header from './Right_Side_Header';

export default function Header() {
  const { signOut } = useAuthenticator();

  return (
    <View
      width="100%"
      height="120px"                       // ↓ shorter banner
      backgroundColor="white"             // ↓ white background
    >
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
        padding="1rem"
      >
        {/* LEFT SIDE: Heading + centered button */}
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap="0.5rem"
        >
          <Heading level={3} fontSize="1.5rem">
            TaskMatch Home
          </Heading>
        </Flex>

        {/* MIDDLE: Navigation */}
        <Right_Side_Header />

        {/* RIGHT SIDE: Sign Out Button */}
        <Flex alignItems="center">
          <Button 
            variation="destructive"
            onClick={signOut}
            size="small"
          >
            Sign Out
          </Button>
        </Flex>
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



