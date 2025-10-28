import { useI18nToken } from '@/i18n/index.ts';
import type { I18nToken } from '@/model/data.ts';

export default function TToken({ token }: { token: I18nToken }) {
  const text = useI18nToken(token);
  return <>{text}</>;
}
