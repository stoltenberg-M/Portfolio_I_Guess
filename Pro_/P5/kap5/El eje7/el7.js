function setup() {
    createCanvas(400, 400);
    let wordcloud =["Javascript","Python","C++","C","C#","Julia","Java","Go","R","Basic"]
    //det er ting der bliver gemt i en ord leste 
    for(let i = 0;i<wordcloud.length;i++)
      {
        text(wordcloud[i],random(400),random(400))
      }
    //der bliver bruget en "for" function hvor i bliver definert som 0 og vokser med 1 indtil den er samme længde som ord lesten.
    //når den pranter "text" pranter den helle ord lesten og hvert ord bliver placeret et random sted på canvas. 
  }