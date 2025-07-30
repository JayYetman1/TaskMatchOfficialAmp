import Header from './Header1/Header';
import LawnImage from '../ImageCodes/LawnImage';
import SubHeader from './Header2/SubHeader'; 
import ThirdHeader from './Header3/ThirdHeader';
import HireLocalStudents from './Header4/HireLocalStudents';
import BottomDetails1 from './Header5/BottomDetails';

export default function HomeScreen() {
  return (
    <>
      <Header/>
      <LawnImage/>
      <SubHeader/>
      <ThirdHeader/>
      <HireLocalStudents/>
      <BottomDetails1/>
    </>
  );
}
