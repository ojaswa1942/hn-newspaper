import React from 'react';
import { calculateDateTime } from '../../utils/utils';
// import styles from './ArticleCard.module.css';

const ArticleCard = ({ title, id, normalizedScore, by, text, time }) => {
	let hrefPoint = `https://news.ycombinator.com/item?id=${id}`;
	let hrefUser = `https://news.ycombinator.com/user?id=${by}`;
	let profileTitle= `See ${by} profile`;
	let estimateTime = calculateDateTime(new Date(), new Date(time*1000));

	return(
		<div className='resultCard'>
			<div className="resultCard-content-wrapper">
				<div className='resultCard-title-and-infos'>
					<h2>
						<a target="_blank" rel="noopener noreferrer" title="See original on ycombinator" href={hrefPoint}>{title}</a>
					</h2>
					<ul className='item-infos'>
						<li>
							<a href={hrefUser} target="_blank" rel="noopener noreferrer" title={profileTitle} >{by}</a>
						</li>
						<li>
							<span title={new Date(time*1000)} >{estimateTime}</span>
						</li>
						<div dangerouslySetInnerHTML={{__html: text}} >
						</div>
					</ul>
				</div>
				<br />
			</div>
		</div>
	);
}

export default ArticleCard;