import React, { useState, useEffect } from 'react';
import { getMaxMin, normalizedScore } from '../../utils/utils';
import Loader from '../_Loader/Loader';
import ArticleCard from '../ArticleCard/ArticleCard';
import styles from './ArticleContainer.module.css';

const NewsList = ({ newsArray }) => {
	let [max, min] = getMaxMin(newsArray);
	let renderArray = newsArray.map((newss, i) => {
		return <ArticleCard
	 		key = {i}
	 		{...newss}
	 		score = {normalizedScore(newss.score, max, min)}
	 	/>;
	});
	return renderArray;
}

const ArticleContainer = () => {

	const [ isLoading, changeLoadingState ] = useState(true);
	const [ isError, changeErrorState ] = useState(false);
	const [ news, updateNews ] = useState([]);

	useEffect(() => {
		fetch(`https://hacker-news.firebaseio.com/v0/askstories.json`)
		.then(res => res.json())
		.then(ids => {
			ids.forEach(id => {
				fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
				.then(res => res.json())
				.then(newsPerId => {
					if(newsPerId.type === "story"){
						updateNews(state => [...state, newsPerId]);
						if(isLoading)
							changeLoadingState(false);	
					}
				})
			})
		})
		.catch(error => changeErrorState(error));
	// eslint-disable-next-line
	}, []);

	if(isLoading){
		return <Loader />;
	}

	if(isError){
		return (
			<div className={styles.errorTime}>
				There seems to be an error. Here are the complete details: {isError}
			</div>
		);
	}
	console.log(news);

	return(
	  	<div className={styles.container_main}>
			<NewsList newsArray={news} />
			{news.length}
		</div>
	);
}

export default ArticleContainer;