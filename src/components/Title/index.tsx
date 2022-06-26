import { ReactNode } from 'react';
import cx from 'classnames'

type TitleProps = {
  children: ReactNode;
  className?: string;
};

export default function Title({ children, className }: TitleProps) {
  return <h1 className={cx('', className)}>{children}</h1>;
}
