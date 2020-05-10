## Preview

The project is deployed [here](https://hn-newspaper.ojaswa.com).

## Setup dev environment

- Clone the git repository using SSH: `git clone git@bitbucket.org:ojaswa1942/hn-newspaper.git` or HTTPS: `git clone https://bitbucket.org/ojaswa1942/hn-newspaper.git`
- Move into the project folder: `cd hn-newspaper`
- Install dependencies: `yarn install` or `npm install`
- Run the development server: `yarn start` or `npm start`

Note: Kindly remove `yarn.lock` if you prefer using NPM.

## Tasks:

[Link 1:](https://en.wikipedia.org/wiki/Daily_Worker#/media/File:300306-dailyworker-cover.jpg) - Sample news paper image

[Link 2:](https://hackernews.api-docs.io/v0/overview/introduction) - Hacker news APIs

NOTE: You need to use ReactJs to complete the assignment, plain html and css only solution is not acceptable

1. Using the hacker news APIs[Link 2], you have to build a newspaper like view[Link 1] to read Hacker news.
2. There will be at least 3 column of articles at any point. The width of each article are not same, so that it has newspaper like view where articles section has varying width.
3. The height of the section depends on the size of the content.
4. This will be a single page view. All the stories on a single page
5. The weight(text size of the title) of the title of any article should be based on the score. Higher the score as compared to other titles, bigger the size of the title.
6. The content of the news is the content of the hacker news article. See point 7 below for example
7. Use API: https://hackernews.api-docs.io/v0/live-data/ask-hn-stories from the [Link 2] above, to get the stories, you need to then fetch the details of the stories using the other APIs in [Link 2]
8. Example: https://news.ycombinator.com/item?id=23105608, for this page. The news title will be `‘How to Improve at Chess’` and the content will be:
```
— Content Starts —
I enjoy playing chess in my downtime and find it especially useful if I am feeling mentally worn down to "reset" myself a bit.
What frustrates me is my inability to progress naturally (although, from reading, this is extremely common).

Why I turn to the community: For those who have progressed, what worked for you?

Was it a book, private lessons, practicing tactics? Anyway, looking to up my ELO rather than get mad at myself for not getting better over time.

Hope everyone is well and thank you.
— Content Ends —
```

9. This basic structure mentioned above is the minimum required, however you are free to wear the UI designer hat and add more aesthetic changes that makes the view created more news paper like.
10. You have to create “Private” git repo on http://bitbucket.org/ and provide access to email we will share before the deadline.  Do not create a public repo here.
11. Your last commit to the repo should be before 11:55 pm on 10th May. If there is any commit after time provided above the submission will not be considered, irrespective of how small is the commit.