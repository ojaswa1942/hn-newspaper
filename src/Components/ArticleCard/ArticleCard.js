import React from 'react';
import { calculateDateTime } from '../../utils/utils';
import styles from './ArticleCard.module.css';

const ArticleCard = ({ title, id, normalizedScore, by, text, time }) => {
	let hrefPoint = `https://news.ycombinator.com/item?id=${id}`;
	let hrefUser = `https://news.ycombinator.com/user?id=${by}`;
	let profileTitle= `See ${by} profile`;
	let estimateTime = calculateDateTime(new Date(), new Date(time*1000));
	let fontSize = (normalizedScore)? normalizedScore*100 : `inherit`;

	if(fontSize < 24)
		fontSize = `24px`;
	else fontSize += 'px';

	return(
		<div className={styles.resultCard}>
			<a className={styles.resultHeading} style={{ fontSize }} target="_blank" rel="noopener noreferrer" title="See original on YCombinator" href={hrefPoint}>
				{title}
			</a>
				<span className={styles.resultInfo} >
					<a href={hrefUser} target="_blank" rel="noopener noreferrer" title={profileTitle} >{by}</a>
					<span title={new Date(time*1000)} >{estimateTime}</span>
				</span>
			<div className={styles.resultContent} dangerouslySetInnerHTML={{__html: text}} />
		</div>
	);
}

export default ArticleCard;