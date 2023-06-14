---
postName: "behind-the-scene-2"
title: "Media Centre Behind the Scene: The Articles and The Website"
subtitle: "Media Centre unveils their background of the Articles, Interviews and the Website!"
authors:
  - "polytetral"
  - "porkisgreat"
  - "howtoplayln"
table_of_contents: true
---

## Website (HowToPlayLN)

### Initialization & Frameworks

For website, we decided to go with the framework in javascript language, [React](https://reactjs.org/) with [Yarn](https://yarnpkg.com/) package manager. But we do not directly use javascript, but instead, we used [Typescript](https://www.typescriptlang.org/).

The reasons behind all of these is how familiar and how easy it is to abstractize using these frameworks for us. All of the components in the website were made from scratch.

The way to put **React** in a few sentences is that, we create and wrap the HTML Elements into the programmable functions or classes. It was easier for us to break the design down of what was needed for each design page, and it was easier to create the algorithms to generate the website for us.

**Typescript** also elevates the consistency and readability the code is in the website by introducing Type Hints, which is not available in vanilla Javascript, as well as the **Interfaces** which is the really beautiful way to conceptualize the data and it was really convenient in the IDE (code editor) when we make the new components.

We decided to go with Class Components in React which was not a really easy way to implement them (There are **Functional Components** which is a lot easier to write, but classes are more compatible). Even through the complications in implementing classes in Javascript, it was refactored in the nice way that it looks easier at the end to read.

For the deployment, we used [Github Pages](https://pages.github.com/). Which the workflow was easy to follow *even it was a little pain with React that you needed to do some more special jobs in order to make them work*. But all of that was worth it.

### Articles

For Articles, we used [Markdown](https://www.markdownguide.org/) to write the articles, even though some of our members still used Google Docs, but there were the MS Word to Markdown available. Markdown, to be precise is also the way Discord Messages were written too, for example you can use **\*\*text\*\*** to make the text bold, or *\*text\** to make it italic. However there are also some functionalities available in markdown, but not in discord, for example the Images, or [Hyperlinks](https://www.youtube.com/watch?v=dQw4w9WgXcQ). It was still really convenient for newcomers to write with Markdown with the tools like [Notion](https://www.notion.so/), with the functionality similar to Google Docs or Microsoft Word and it is really easy to get used to.

For the reviews and publishing, we used the [github](https://github.com/) workflow, for example, Pull Requests, Branches and such. Mostly I (HowToPlayLN) was the one who manages in the publishing side due to some difficulties for the beginners. Eventually, it is a really powerful tool for any purposes if you can get used to them. Not to mention that this is our articles "Database" because it is free and easily accessible via HTTP Requests!

### Design Concepts (Polytetral)

HowToPlayLN: Poly was in charge of all design concepts, as well as helping me with CSS for each page (which was, and is my weaknesses in the field of writing the website). Given her base knowledge on the frameworks mentioned and ability to provide the designs, I could really trust her on collaborating on this particular job. I will let her talk about the thought process on design concepts for each page.

Polytetral: Regarding the website, we were initially aiming to replicate the space theme as featured across the tournament on the website, hoping to adapt and emulate the level of atmospheric immersion as established in a multimedia project under the New York Times, named ["Snow Fall: The Avalanche at Tunnel Creek"](https://www.nytimes.com/projects/2012/snow-fall/index.html#/?part=tunnel-creek). I felt that it would have been incredibly fitting, with the amount of engagement and interaction we were aiming to create with the readers of Media Centre.

Aside from the plans for the story articles as expressed above, there were a lot of other ideas we wanted to implement since about half a year ago. The main gist of it was to have a homepage with a colorful dashboard emulating the main menu of a video game that would have its content updated every week, a navigation bar that would store every article released in its own category, and a directory specially made for the Story articles. You can get a gist of everything we wanted to implement on this [FigJam board here](https://www.figma.com/file/QV5ZMnCBEo1lS3uReb5f1F/Media-Centre-Infrastructure?node-id=0%3A1&t=eQYrDujjeJlF9BGq-1).

Though, a lot of the initial ideas we had were peeled down to the bare minimum, with creating article content taking precedence over others, especially with other aspects of production that required more attention to. What you now see of the website is a very rough sketch of what we imagined and designed in the first place, with most detail being put into the structure of the article pages, and some other aspects of the page, such as the dashboard becoming slightly less used over time due to the accessibility of discord webhooks directing readers to every article page.

All in all, the original design concept was definitely a lot more sophisticated and ambitious than what HowToPlayLN and I could manage to implement on our own over the course of the tournament. But surely given enough time to revisit the design, we could one day make that a reality. 

### What can be improved?

We've received a lot of feedback regarding the website, as well as some thoughts that we could improve some of them, for example, the visibility and readability of the text, the responsiveness on every platform, the implementation of more convenient functionalities like **Article Submission System** (If you look at the code, you will know that the articles properties were stored in a single file). Not to mention the automatic deployment and publishing via webhook.

There was also a **statistics dashboard** which we didn't touch after qualifiers, which we used **Streamlit** framework in Python to conduct the work. However, if we really get more time on it, it will be a really interesting feature to put in.

## Stories and Lore (Polytetral)

### Interpretation of Essence

Polytetral: This is the point where I should probably admit that the stories were built around leading up to the grandfinals tiebreaker.

Given where we had left off for 4DM4 (with everyone evacuating from planet Earth after an avalanche), it was very difficult to link that plot up with a concept as vague as the word "Essence". In this aspect, I had myself a very long time to think about what I considered essential in my life, and attempted to build a story revolving around discovering this long-lost "essence" of life while recuperating from the losses exacerbated by the corruption and greed of man, just as how players rediscover love and ambition for the osu!mania and other competitive games through the tiebreaker. A lot of the planning for this story was actually outlined while planning for the storyboard, but for the sake of this article, this section will purely cover the process of making the stories.

### Initial Ideas, Extensions and Publishing

The story actually started with the idea of presurfacing the disease that made your vision monochromatic, as highlighted by the name of the qualifiers BGA track "monochroma.", but it started off as a disease that was maliciously spread by a villain to aid their crimes, which then led to a witch hunt that you could loosely consider an "Among Us spinoff", and the goal was to return colors to everyone before more chaos could ensue on Zion.

Eventually, I had written a perspective of a character dying on the spaceship by a seemingly natural case of kidney failure, and HowToPlayLN gave an alternative perspective that included another character who was transported into the 4DMWC universe from the LNCryption ARG, a side story where multiple mappers for o!mLN3 wrote storylines converging towards the eventual escape of the self from a realm torturing them for reasons *hinted in the song itself, but its extension to be revealed sometime later this year*. As an organiser of the latter tournament, I contemplated deeply about including that into the story because it felt a lot like shilling, but ended up establishing a parallel relationship between the events of the ARG and the disease, which was that victims of both events lost the essence of life and had to sacrifice their colors or emotions to keep living. One of the victims thus sets out to seek a solution that would return the colors of life to everyone affected.

Subsequently, I had these ideas drafted in a pin, to which HowToPlayLN, Auxesiaa, Leon and I worked on writing the full story for. This was also done in a fashion similar to the Markdown format for the other articles, but in the process of writing, we had to constantly check in to ensure that each continuation of the story linked up with the one before and aligns with the idea that was to be added the week after. Along the way, Auxesiaa, Leon and I made sure to perform grammatical checks on the stories to the best of our abilities.

### Afterthoughts

This was a very heavy story to write. There was a lot I wanted to include, but only had about 8 weeks to properly establish. Thus, I don't think the story as viewable on the surface of the website is the complete narration of what happened, but just a very natural interpretation done in the perspective of HowToPlayLN's character asking many questions that attempt to pique the interest of the reader. The plot may seem slightly confusing as a result because more questions are produced than answers, but the *essence* of the storyline is something that stays consistent throughout the whole story, which is to remind ourselves to constantly search for the truth and be guided by the humanity we keep in our hearts.

There was a lot of spontaneity involved when adding joke names such as the *TIDUR model*, and they sometimes distract the reader by breaking the mood as well. There are some side effects to this such as broken immersion, but the sense of humor was important in the essence of the 4DMWC Media Centre, which was to report on funny things.

I also thought that a better visualization of the characters and a breakaway from a single-person monologue might have been useful for the lore videos, but that is probably something to consider for when we have the budget for mascots... maybe?

All in all, I think it was one hell of an attempt to condense a story and it might have overwhelmed some readers. Nonetheless, I have had people feedback that they were enjoying the lore, and I think that's all that matters. Something that can convince you against treating 4DMWC as simply yet another tournament, is what we aim to do here at the Media Centre. There will be some future extensions detached from tournament play as established in the previous section, but in a very different genre that some people may see as radical. Look forward to it!

## Opinions (Polytetral)

### Motivations

As an avid osu!mania player who has been playing for up to half a decade, I've always understood that many emerging talents play the game with the simple idea of reaching the endgame and becoming one of the top players of the game. But the process of becoming a top player or member of the community is not always a linear one -- There are a lot of interesting aspects of the game, from self-improvement methods and physical training to community involvement that often do not meet the eyes of players unless they explicitly search for it. As a result, I thought an Opinions section inspired by the Trivia Wildcards section of 4DM4 Gazette would be an interesting addition to the Media Centre, and decided to rebrand it as such.

### Article Writing and Submission

Rebranded as an Opinions section, it was possible to make some interesting arguments and spark some discussions based on a specific topic in osu!mania not limited to tournaments. Thus, I decided it would be a good idea to open up the floor to others using the Article Submission System at the beginning of 4DM2023 such that they could join in the discussion by filling up an idea or opinion draft on a Google Form provided. However, the response to the Article Submission System was by no surprise, lukewarm -- a tournament server may not necessarily be the best target audience for intellectual discourse or essay writing to be made after all.

Though, the Media Centre staff had some ideas for articles that they wanted to write themselves, so we did this alongside the Article Submission System. Within the opinion channel for the Media Centre server, we created threads to pass around Markdown documents and alternative forms of text files. For certain articles, special guests were invited to provide their own opinions and contribute a piece of their mind to the articles, and this was either done through research, conducting an interview with them, or doing a back and forth exposition. Subsequently, the writing flow and grammatical checks would be conducted before committing to the website and publishing.

### Afterthoughts

Most of these articles were done to a degree of understanding that we could muster within the boundaries of time and knowledge. Feedback, while little, was pretty mixed, and this was something that I expected when starting up this section. One such example would be the "Evolution of Tournaments" article, which was a joint effort to document observations of tournament pools over the years that received some comments concerned with proper representation of involved parties and the choice of tone of the article. Personally, I believe that the mixed response and feedback towards these articles is a healthy sign that the tournament community is still concerned with growth of knowledge. As a writer of the Media Centre team, I've taken this feedback in the back of my mind as a opportunity that we could do better in research and improve our own expression of opinions, to interest readers in learning more about the community and other social constructs behind it.

## Interviews (PorkIsGreat)

### Introduction

I’ve been involved in the Highlights & Interview articles almost immediately when I joined. People have praised me for my knowledge of the players, the tournaments, etc.. But very few (or no one) knows how I conduct my interviews & write my match highlight articles.

To give some context, I joined the Media Centre team around QFs week. Before joining, I had conducted interviews for a tournament I hosted called the Osu!Collegiate League. (Which is currently in it’s Winter 2023 tournament as of me typing this!) I conduct interviews similarly to how I interview some of the best collegiate players in OCL.

### Interviews

So how do I conduct my interviews then? I watch the match of the team I plan on interviewing. While watching, I type down notes on a document of that said team. Especially since this is 4DMWC, I like to do research on previous results for each country, along with assessing each player from previous tournaments. As someone who’s been staffing in the mania scene for over a year now, I staffed for some of the high profiled tournaments the mania scene has to offer. But for 4DMWC, this is a gateway for some players who will be playing in a tournament for the first time ever. So making questions isn’t easy for me when it comes to interviewing players.

When I think of interview questions, I want to ask players something that only certain players can answer themselves. I ask teams of thought-out questions that would make them think. Most of the time, I get some really interesting answers, and sometimes, you get some underwhelming answers but I’m not going to complain. Interviewing teams & players has been fun as I get opportunities to get to know the players. My favorite teams to interview are Canada, Japan, China, & United States.

## Match Highlights (PorkIsGreat)

I am also responsible for writing the match highlight articles as well. The articles I wrote for the matches are Japan vs Sweden & Brazil vs Canada. I did commentary for the matches mentioned so I did write it as if I was commentating myself except I was typing it like I was making a script of how the match had gone already LOL. I want to give the spectators the article as if I was telling a story. The point of commentating is that you want to hype up a match and provide interesting facts about the matchup, interesting takes and analysis, and to hype up at a certain moment. I used what I learned in commentary to apply into my writing. The Brazil vs Canada article is by far, the best article I’ve ever written since joining 4DMWC Media Team, and if I were to ask anyone which article I would recommend reading, it’s this one. So much history is behind it and I spent so much time invested on that match by commentary & typing on that article. And I got a lot of feedback saying it was the best article they’ve ever read so far. So I highly recommend reading that article.
