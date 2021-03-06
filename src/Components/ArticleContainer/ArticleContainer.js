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
	 		normalizedScore = {normalizedScore(newss.score, max, min)}
	 	/>;
	});
	let size = renderArray.length;

	return (
		<>
		<div className={styles.newsList}>
			{renderArray.slice(0, size/4)}
		</div>
		<div className={styles.newsList}>
			{renderArray.slice(size/4, (2*size)/4)}
		</div>
		<div className={styles.newsList}>
			{renderArray.slice((2*size)/4, (3*size)/4)}
		</div>
		<div className={styles.newsList}>
			{renderArray.slice((3*size)/4, size)}
		</div>
		</>
	);
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
					if(newsPerId.type === "story" && newsPerId.text ){
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

	return(
	  	<div className={styles.container_main}>
			<NewsList newsArray={news} />
		</div>
	);
}

export default ArticleContainer;