import { Icon } from '@iconify/react';

import htmlIcon from '@iconify/icons-logos/html-5';
import cssIcon from '@iconify/icons-logos/css-3';
import sassIcon from '@iconify/icons-logos/sass';
import javascriptIcon from '@iconify/icons-logos/javascript';
import reactIcon from '@iconify/icons-logos/react';
import nexjts from '@iconify/icons-logos/nextjs-icon';
import javaIcon from '@iconify/icons-logos/java';
import tailwindIcon from '@iconify/icons-logos/tailwindcss-icon';
import springIcon from '@iconify/icons-logos/spring-icon';
import awsIcon from '@iconify/icons-logos/aws';
import typescriptIcon from '@iconify/icons-logos/typescript-icon';
import dockerIcon from '@iconify/icons-logos/docker-icon';
import phpIcon from '@iconify/icons-logos/php';
import mysqlIcon from '@iconify/icons-logos/mysql-icon';
import bootstrapIcon from '@iconify/icons-logos/bootstrap';
import geminiIcon from '@iconify/icons-mdi/robot';

export const technologyIcons: { [key: string]: React.ReactNode } = {
  HTML: <Icon icon={htmlIcon} width="38" height="38" />,
  CSS: <Icon icon={cssIcon} width="38" height="38" />,
  SASS: <Icon icon={sassIcon} width="40" height="40" />,
  JavaScript: <Icon icon={javascriptIcon} width="38" height="38" />,
  React: <Icon icon={reactIcon} width="38" height="38" />,
  Java: <Icon icon={javaIcon} width="38" height="38" />,
  Tailwind: <Icon icon={tailwindIcon} width="38" height="38" />,
  Spring: <Icon icon={springIcon} width="38" height="38" />,
  AWS: <Icon icon={awsIcon} width="38" height="38" />,
  TypeScript: <Icon icon={typescriptIcon} width="38" height="38" />,
  Docker: <Icon icon={dockerIcon} width="43" height="43" />,
  PHP: <Icon icon={phpIcon} width="38" height="38" />,
  MYSQL: <Icon icon={mysqlIcon} width="38" height="38" />,
  Bootstrap: <Icon icon={bootstrapIcon} width="38" height="38" />,
  NextJS: <Icon icon={nexjts} width="38" height="38" />,
  Gemini: <Icon icon={geminiIcon} width="38" height="38" color="#00A8E8" />
};