import Btn from './Button';
import Card from './Card';
import Img from './Img';
import Title from './Title';

export default function Preferences() {
  return (
    <Card className="bg-teal-300 mt-7 flex items-center justify-between px-20 py-14">
      <div className="max-w-lg">
        <Title className="!items-start">
          Share Your Preferences,
          We’ll Do the Rest
        </Title>
        <p className="text-xl text-gray-900 font-medium mt-9">
          Tell us about your family’s needs, and
          we’ll suggest the perfect nanny matches for you!
        </p>
        <Btn variant="primary" size='xl' className='mt-14 font-bold text-xl'>
          Get Personalized Matches
        </Btn>
      </div>
      <Img src="/preference.svg" />
    </Card>
  );
}
