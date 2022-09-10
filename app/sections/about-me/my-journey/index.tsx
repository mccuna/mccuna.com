import Digitall from './digitall';
import LibraInternetBank from './libra-internet-bank';
import LookingForward from './looking-forward';
import Netrom from './netrom';
import NetromSoftwareAcademy from './netrom-software-academy';
import Prologue from './prologue';
import Tokero from './tokero';

const MyJourney = () => {
  return (
    <div className='flex flex-col gap-y-6 items-center'>
      <Prologue />
      <NetromSoftwareAcademy />
      <Netrom />
      <LibraInternetBank />
      <Digitall />
      <Tokero />
      <LookingForward />
    </div>
  );
};

export default MyJourney;
