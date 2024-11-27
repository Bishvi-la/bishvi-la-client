import { FunctionComponent } from 'react';
import { SvgProps } from 'react-native-svg';

import BabyBottle from '@/assets/svg/categories/baby-bottle.svg';
import BabyCarSeat from '@/assets/svg/categories/baby-car-seat.svg';
import BabyCarriage from '@/assets/svg/categories/baby-carriage.svg';
import BabyChair from '@/assets/svg/categories/baby-chair.svg';
import Baby from '@/assets/svg/categories/baby.svg';
import Bath from '@/assets/svg/categories/bath.svg';
import Bouncer from '@/assets/svg/categories/bouncer.svg';
import Cot from '@/assets/svg/categories/cot.svg';
import Delivery from '@/assets/svg/categories/delivery.svg';
import Diapers from '@/assets/svg/categories/diapers.svg';
import Gate from '@/assets/svg/categories/gate.svg';
import Giftbox from '@/assets/svg/categories/giftbox.svg';
import Onesie from '@/assets/svg/categories/onesie.svg';
import Pregnant from '@/assets/svg/categories/pregnant.svg';
import ToyTrain from '@/assets/svg/categories/toy-train.svg';

export const categoryIcons: Record<string, FunctionComponent<SvgProps>> = {
  'baby-carriage': BabyCarriage,
  onesie: Onesie,
  'baby-bottle': BabyBottle,
  'baby-car-seat': BabyCarSeat,
  'baby-chair': BabyChair,
  baby: Baby,
  cot: Cot,
  bath: Bath,
  bouncer: Bouncer,
  delivery: Delivery,
  diapers: Diapers,
  gate: Gate,
  giftbox: Giftbox,
  'toy-train': ToyTrain,
  pregnant: Pregnant,
};
