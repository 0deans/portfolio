import { useTranslation } from 'react-i18next'
import BannerImgMeta from '../../assets/banner.jpg?w=400;800&format=webp;avif;png&as=picture'
import { CopyableText } from '../common/copyable-text'
import { Image } from '../common/image'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'

export function Header() {
  const { t } = useTranslation()

  return (
    <header className="dark relative w-full pb-2 md:max-w-4xl md:p-4">
      <div className="bg-secondary aspect-[16/5] w-full overflow-hidden shadow-sm md:rounded-md">
        <Image
          meta={BannerImgMeta}
          alt={t('a11y.bannerImage')}
          imageClass="w-full object-cover"
        />
      </div>

      <div className="absolute bottom-6 left-2 flex items-center md:bottom-8 md:left-8">
        <div className="relative">
          <Avatar className="size-20 sm:size-32">
            <AvatarImage src="avatar.jpg" alt="@0dean" />
            <AvatarFallback className="text-4xl">
              {t('header.name')[0]}
            </AvatarFallback>
          </Avatar>
          <div className="pointer-events-none absolute inset-0 z-10">
            <img
              src="avatar-decoration.png"
              alt={t('a11y.avatarDecoration')}
              loading="lazy"
            />
          </div>
        </div>
        <div className="ml-4">
          <h1 className="text-foreground text-xl font-bold">
            {t('header.name')}
          </h1>
          <CopyableText
            text="@0dean"
            delayDuration={1000}
            className="text-muted-foreground -mx-1.5 font-semibold transition-all hover:mx-0"
          />
          <div className="space-x-1">
            <Badge variant="outline">{t('header.pronouns')}</Badge>
            <Badge variant="outline">{t('header.age')}</Badge>
          </div>
        </div>
      </div>
    </header>
  )
}
