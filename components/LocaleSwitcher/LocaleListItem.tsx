import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LOCALE_CODE } from '../../types/generated/contentful';

type LocaleListItemProps = {
  locale: LOCALE_CODE;
  icon: any;
  alt: string;
  languageName: string;
};

function LocaleListItem(props: LocaleListItemProps) {
  const { locale, icon, alt, languageName } = props;

  return (
    <li>
      <Link href="#" locale={locale} passHref>
        <a className="flex items-center gap-3 py-2 px-6 hover:bg-gray-300">
          <Image src={icon} width={20} height={20} alt={alt} />
          {languageName}
        </a>
      </Link>
    </li>
  );
}

export default LocaleListItem;
