import { FC, ReactNode } from 'react';
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom';
import { siteName, titleMerge } from './utils'

interface IMetaProps {
	title: string;
	description: string;
  children: ReactNode;
}

const Meta: FC<IMetaProps> = ({
	title,
	description,
	children,
}) => {
  const { pathname } = useLocation()
	const currentUrl = `${import.meta.env.VITE_APP_URL}${pathname}`

	return (
		<>
      <Helmet>
        <title itemProp='headline'>{titleMerge(title)}</title>
        <meta
          itemProp='description'
          name='description'
          content={description.slice(0, 152) + '...'}
        />
        <link rel='canonical' href={currentUrl} />
        <meta property='og:locale' content='en' />
        <meta property='og:title' content={titleMerge(title)} />
        <meta property='og:url' content={currentUrl} />
        <meta property='og:site_name' content={siteName} />
        <meta
          property='og:description'
          content={description.slice(0, 152) + '...'}
        />
      </Helmet>
			{children}
		</>
	)
}

export default Meta