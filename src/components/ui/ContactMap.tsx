import { useLocale } from "next-intl";

export default function ContactMap() {
  const locale = useLocale();

  // Next-intl locale qiymatlarini Yandex lang formatiga o'giramiz
  const getYandexLang = (loc: string) => {
    switch (loc) {
      case 'en': return 'en_US';
      case 'ru': return 'uz_UZ';
      default: return 'ru_RU';
    }
  };

  const lang = getYandexLang(locale);
  const mapUrl = `https://yandex.uz/map-widget/v1/?ll=37.604245%2C55.896605&mode=search&oid=193877762038&ol=biz&z=17&lang=${lang}`;
  return (
    <iframe
      src={mapUrl}
      className="w-full h-full grayscale-[0.1] contrast-[1.1]"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
    ></iframe>
  );
}
