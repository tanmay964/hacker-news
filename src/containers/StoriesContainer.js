import React , {useState, useEffect} from 'react';

import {getStoryIds, getStory} from '../services/hnApi'

import Story from '../components/Story'
import {GlobalStyle, StoriesContainerWrapper} from '../styles/StoriesContainerStyles'
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
function StoriesContainer() {
  const { count } = useInfiniteScroll();
  const[storyIds, setStoryIds] = useState([])
  useEffect(() => {
    getStoryIds().then(data => data && setStoryIds(data))
    getStory(24140275).then(data => console.log(data))
  },[])
  return (
    <>
    <GlobalStyle/>
      <StoriesContainerWrapper>
    <h1>Hacker news stories</h1>
     {storyIds.slice(0, count).map(storyId => (
         <Story key = {storyId} storyId ={storyId}/>
     ))}
     </StoriesContainerWrapper>
   </>
    
  );
}

export default StoriesContainer;