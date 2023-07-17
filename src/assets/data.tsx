// === Trips ===
import IstanbullImage from "./istanbul-img.png";
import DubaiImage from "./dubai-img.png";
import CairoImage from "./cairo-img.png";
import RiyadhImage from "./riyadh-img.png";

export type TripData = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export const tripsData: TripData[] = [
  {
    id: "0",
    title: "اسطنبول",
    description: "5 أيام بتكلفة 1,500 دولار",
    image: IstanbullImage,
  },
  {
    id: "1",
    title: "دبي",
    description: "3 أيام بتكلفة 2,500 دولار",
    image: DubaiImage,
  },
  {
    id: "2",
    title: "القاهرة",
    description: "3 أيام بتكلفة 1,250 دولار",
    image: CairoImage,
  },
  {
    id: "3",
    title: "الرياض",
    description: "2 أيام بتكلفة 1,500 دولار",
    image: RiyadhImage,
  },
];

// === Our Services ===
import ServiceIcon1 from "./services-icon-01.png";
import ServiceIcon2 from "./services-icon-02.png";
import ServiceIcon3 from "./services-icon-03.png";

export type ServiceData = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export const servicesData: ServiceData[] = [
  {
    id: "1",
    title: "دليل سياحي",
    description: "نقدم لك خدمات الإرشاد السياحي لبناء خطط سفر مميزة.",
    image: ServiceIcon1,
  },
  {
    id: "2",
    title: "حجوزات فندقية",
    description: "لا تقلق حول مكان إقامتك فنحن نهتم بكامل الحجوزات الخاصة بك.",
    image: ServiceIcon2,
  },
  {
    id: "3",
    title: "رحلات ميدانية",
    description:
      "لن تكون إجازتك مملة معنا فهنا الكثير من الخطط والرحلات المختلفة.",
    image: ServiceIcon3,
  },
];

// === prices ===
type FeatureType = {
  id: string;
  label: string;
};
export type PriceData = {
  id: string;
  price: string;
  title: string;
  description: string;
  features: FeatureType[];
  hot: boolean;
};

export const pricesData: PriceData[] = [
  {
    id: "1",
    price: "260",
    title: "خطة الاقتصادية",
    description:
      "نقدم لك إمكانية زيارة بلدان العالم بأقل التكاليف الممكنة وبأفضل الخدمات",
    hot: false,
    features: [
      {
        id: "1",
        label: "بطاقات سفر في الدرجة الاقتصادية",
      },
      {
        id: "2",
        label: "حجز بفندق ثلاث نجوم",
      },
      {
        id: "3",
        label: "وجبات إفطار يومية",
      },
    ],
  },
  {
    id: "2",
    price: "520",
    title: "خطة عائلة",
    description: "هذه الخطوة مناسبة جداً إن كنت ترغب في قضاء إجازتك مع العائلة",
    hot: true,
    features: [
      {
        id: "1",
        label: "بطاقات سفر في الدرجة الاقتصادية",
      },
      {
        id: "2",
        label: "حجز بفندق ثلاث نجوم",
      },
      {
        id: "3",
        label: "وجبات إفطار يومية",
      },
    ],
  },
  {
    id: "3",
    price: "850",
    title: "خطة رجال الأعمال",
    description: "كونك شخص ذو ذوق خاص ستكون هذه الخطة هي ما يناسبك تماماً",
    hot: false,
    features: [
      {
        id: "1",
        label: "بطاقات سفر في الدرجة الاقتصادية",
      },
      {
        id: "2",
        label: "حجز بفندق ثلاث نجوم",
      },
      {
        id: "3",
        label: "وجبات إفطار يومية",
      },
    ],
  },
];

// === reviews ===
import UserAvatar from "./user-avatar-02.jpg";
type UserData = {
  name: string;
  avatar: string;
};
export type ReviewData = {
  id: string;
  user: UserData;
  comment: string;
};

export const reviewsData: ReviewData[] = [
  {
    id: "1",
    user: {
      name: "محمد الأحمد",
      avatar: UserAvatar,
    },
    comment:
      "كانت تجربة مميزة مع خدمات رائعة قضيت أفضل إجازة لي من فترة طويلة، أنصح بالتعامل مع شركة رحلاتي بدون تردد.",
  },
  {
    id: "2",
    user: {
      name: "أسامة الأبيض",
      avatar: UserAvatar,
    },
    comment:
      "يمكنني القول إنني قمت بقطاء أفضل رحلة عائلة على الإطلاق، كان الفنادق رائعة وخطة السفر ممتازة جداً ومريحة.",
  },
  {
    id: "3",
    user: {
      name: "ماهر عبد اللطيف",
      avatar: UserAvatar,
    },
    comment:
      "تقدم شركة رحلاتي خدمات مناسبة جداً لرجال الأعمال، هذا ما ساعدني في رحلتي وجعلني اختصر جداً من مشاكل الحجوزات.",
  },
];

// === info ===
import WorkinghourIcon from "./working-hours-icon.png";
import CommunicationIcon from "./communication-icon.png";
import HelpIcon from "./help-icon.png";

export type InfoDataType = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export const infoData: InfoDataType[] = [
  {
    id: "1",
    title: "نقدم لك المساعدة",
    description:
      "إن كان لديك اي مشكلة في البلد الذي تسافر إليه سنقوم بمساعدك في هذا الموضوع.",
    image: HelpIcon,
  },
  {
    id: "2",
    title: "للتواصل",
    description:
      "يمكنك التواصل معنا عبر الفورم أو عبر البريد الإلكتروني: company@mail.com",
    image: CommunicationIcon,
  },
  {
    id: "3",
    title: "أوقات الدوام",
    description:
      "يمكنك التواصل معنا يومياً أثناء أوقات الدوام من الساعة 9 صباحاً حتى 6 مساءاً.",
    image: WorkinghourIcon,
  },
];

// === links ===
export type LinkDataProps = {
  id: string;
  label: string;
};
export type LinksDataProps = {
  id: string;
  title: string;
  links: LinkDataProps[];
};

export const linksData: LinksDataProps[] = [
  {
    id: "1",
    title: "حول",
    links: [
      {
        id: "1",
        label: "الشركة",
      },
      {
        id: "2",
        label: "من نحن؟",
      },
      {
        id: "3",
        label: "فرص العمل",
      },
      {
        id: "4",
        label: "المدونة",
      },
    ],
  },
  {
    id: "2",
    title: "خدماتنا",
    links: [
      {
        id: "1",
        label: "بطاقات الطيران",
      },
      {
        id: "2",
        label: "الرحلات البحرية",
      },
      {
        id: "3",
        label: "الفنادق",
      },
      {
        id: "4",
        label: "الرحلات البرية",
      },
      {
        id: "5",
        label: "تأمين الفيزا",
      },
    ],
  },
  {
    id: "3",
    title: "الحجوزات",
    links: [
      {
        id: "1",
        label: "العروض الجديدة",
      },
      {
        id: "2",
        label: "تأكد من حجزك",
      },
      {
        id: "3",
        label: "الاشتراكات",
      },
      {
        id: "4",
        label: "طرق السفر",
      },
    ],
  },
  {
    id: "4",
    title: "الموقع",
    links: [
      {
        id: "1",
        label: "سياسة الخصوصية",
      },
      {
        id: "2",
        label: "شروط الاستخدام",
      },
      {
        id: "3",
        label: "بلغ عن مشكلة",
      },
      {
        id: "4",
        label: "تواصل معنا",
      },
    ],
  },
];
