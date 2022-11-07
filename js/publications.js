let publicationsListArray = [
  {
    time: "2022.12.1",
    topic: "High Priority",
    selected: true,
    content: ` <article class="columns">
    <div class="column is-3">
      <figure class="image">
        <img src="images/publications/2022_RF_Oximeter.jpg">
      </figure>
    </div>
    <div class="column">
      <div class="content">
        <p>
          <b>Contactless Oxygen Monitoring with Gated Transformer</b><br>
          <a href="http://people.csail.mit.edu/hehaodele/" target="_blank" class="dark">Hao He*</a>, <b>Yuan Yuan*</b>, <a href="https://www.yingcong.me/" target="_blank" class="dark">Ying-Cong Chen*</a>, <a href="https://scholar.google.com/citations?user=UlaXT00AAAAJ&hl=en" target="_blank" class="dark">Peng Cao</a> and <a href="https://people.csail.mit.edu/dina/" target="_blank" class="dark">Dina Katabi</a><br>
          (* indicates equal contribution, order determined via a random coin flip)<br>
          <i>NeurIPS Workshop on Learning from Time Series for Health, Neural Information Processing Systems (<b>NeurIPS</b>), 2022</i><br>
          <a href=" " target="_blank">[arXiv]</a>
        </p>
      </div>
    </div>
  </article>`,
  },
  {
    time: "2022.11.1",
    topic: "Low Priority",
    selected: false,
    content: ` <article class="columns">
    <div class="column is-3">
      <figure class="image">
        <img src="images/publications/2022_PD_nature_medicine.jpg">
      </figure>
    </div>
    <div class="column">
      <div class="content">
        <p>
          <b>Artificial Intelligence-Enabled Detection and Assessment of Parkinson's Disease using Nocturnal Breathing Signals</b><br>
          <a href="https://www.mit.edu/~yuzhe/" target="_blank" class="dark">Yuzhe Yang<i class="email"></i></a>, <b>Yuan Yuan</b><i class="email"></i>, <a href="https://scholar.google.com/citations?hl=en&user=jfWZH3cAAAAJ&view_op=list_works&sortby=pubdate" target="_blank" class="dark">Guo Zhang</a>, <a href="http://www.wanghao.in/" target="_blank" class="dark">Hao Wang</a>, <a href="https://www.yingcong.me/" target="_blank" class="dark">Ying-Cong Chen</a>, <a href="http://yingchengliu.com/" target="_blank" class="dark">Yingcheng Liu</a>, <a href="https://www.urmc.rochester.edu/people/23572607-christopher-g-tarolli" target="_blank" class="dark">Christopher Tarolli</a>, <a href="https://www.mayo.edu/research/labs/bioelectronics-neurophysiology-engineering/faculty-staff" target="_blank" class="dark">Daniel Crepeau</a>, <a href="https://www.linkedin.com/in/jan-bukartyk-51874032/" target="_blank" class="dark">Jan Bukartyk</a>, <a href="https://www.mayoclinic.org/biographies/junna-mithri-m-d/bio-20055306" target="_blank" class="dark">Mithri Junna</a>, <a href="https://www.massgeneral.org/doctors/19418/aleksandar-videnovic" target="_blank" class="dark">Aleksandar Videnovic</a>, <a href="https://www.bu.edu/sargent/profile/terry-ellis-pt-phd-ncs/" target="_blank" class="dark">Terry Ellis</a>, <a href="https://www.mayoclinic.org/biographies/lipford-melissa-c-m-d/bio-20055552" target="_blank" class="dark">Melissa Lipford</a>, <a href="https://www.urmc.rochester.edu/people/26764214-earl-ray-dorsey" target="_blank" class="dark">Ray Dorsey</a>, <a href="https://people.csail.mit.edu/dina/" target="_blank" class="dark">Dina Katabi</a> <br>
(<i class="email"></i> indicates corresponding authors: <a href="mailto:yuzhe@mit.edu">yuzhe@mit.edu</a>; <a href="mailto:miayuan@mit.edu">miayuan@mit.edu</a>)<br>
          <i><b>Nature Medicine</b> (2022)</i> &nbsp; &nbsp; 
          <em class="red"><b>2-year Impact Factor: 87.241</b></em> &nbsp; &nbsp;       
          <em class="red"><b>5-year Impact Factor: 68.310</b></em> <br> 
          <a href="https://www.nature.com/articles/s41591-022-01932-x" target="_blank">[Paper]</a>
          <a href="https://pd-breathing.csail.mit.edu/" target="_blank">[Project Page]</a>
          <a href="papers/poster_2022_pd_breathing.pdf" target="_blank">[Poster]</a>
          <a href="bib/2022_NatureMed_PD_breathing.bib" target="_blank">[BibTeX]</a><br>
          Covered by: <a href="https://news.mit.edu/2022/artificial-intelligence-can-detect-parkinsons-from-breathing-patterns-0822" target="_blank">MIT News</a>,
          <a href="https://www.csail.mit.edu/news/artificial-intelligence-model-can-detect-parkinsons-breathing-patterns" target="_blank">MIT CSAIL News</a>,
          <a href="https://www.forbes.com/sites/jenniferhicks/2022/08/25/see-how-this-ai-analyzes-breathing-patterns-for-early-detection-of-parkinsons/?sh=7ad169971800" target="_blank">Forbes</a>,
          <a href="https://www.fiercebiotech.com/medtech/mit-researchers-track-parkinsons-patients-using-radar-they-sleep" target="_blank">Fierce Biotech</a>,
          <a href="https://www.urmc.rochester.edu/news/story/at-home-sensors-can-spot-parkinsons-disease" target="_blank">University of Rochester</a>,
          <a href="https://www.statnews.com/2022/08/22/parkinsons-disease-artificial-intelligence-breathing/" target="_blank">STAT News</a>, 
          <a href="https://newatlas.com/health-wellbeing/ai-parkinsons-disease-sleep-breathing-patterns-mit/" target="_blank">New Atlas</a>,
          <a href="https://www.bostonglobe.com/2022/08/25/business/mit-device-senses-breathing-patterns-spot-parkinsons-disease/" target="_blank">The Boston Globe</a>,
          <a href="https://developer.nvidia.com/blog/ai-remotely-detects-parkinsons-disease-during-sleep/?ncid=so-face-102294#cid=dev01_so-face_en-us" target="_blank">NVIDIA Technical Blog</a>,
          <a href="https://www.yahoo.com/now/bot-detects-parkinsons-listening-breathe-210028697.html" target="_blank">Yahoo</a>,
          <a href="https://www.fdanews.com/articles/209196-ai-device-detects-parkinsons-using-breathing-patterns?v=preview" target="_blank">FDA News</a>,
          <a href="https://www.wbur.org/radioboston/2022/08/25/mit-parkinsons-research" target="_blank">WBUR</a>,
          <a href="https://www.acsh.org/news/2022/09/10/parkinson%E2%80%99s-disease-gets-diagnostic-help-artificial-intelligence-16547" target="_blank">American Council on Science and Health</a>,
          <a href="https://www.nih.gov/news-events/nih-research-matters/night-breathing-patterns-identify-people-parkinson-s-disease" target="_blank">NIH News</a>,
          <a href="https://healthitanalytics.com/news/artificial-intelligence-model-detects-parkinsons-from-breathing-patterns" target="_blank">Health IT Analytics</a>,
          <a href="https://www.boston.com/news/health/2022/08/23/mit-ai-model-detect-parkinsons-disease-early-breathing-patterns/" target="_blank">Boston.com</a>,
          <a href="https://parkinsonsnewstoday.com/news/device-may-help-diagnose-parkinsons-from-breathing-patterns-parkinsons-diagnosis/" target="_blank">Parkinson's News Today</a>,
          <a href="https://www.washingtonpost.com/technology/2022/09/02/parkinsons-disease-ai-diagnosis/" target="_blank">The Washington Post</a>,
          <a href="https://www.futurity.org/sensor-parkinsons-sleep-2788842/?utm_source=rss&utm_medium=rss&utm_campaign=sensor-parkinsons-sleep-2788842" target="_blank">Futurity</a>,
          <a href="https://www.biospace.com/article/study-finding-and-tracking-parkinson-s-disease-with-artificial-intelligence/" target="_blank">BioSpace</a>,
          <a href="https://economictimes.indiatimes.com/magazines/panache/now-ai-can-detect-parkinsons-disease-while-you-are-sleeping/articleshow/93747223.cms" target="_blank">Times of India</a>,
          <a href="https://www.aerzteblatt.de/nachrichten/136862/Kuenstliche-Intelligenz-erkennt-Morbus-Parkinson-an-der-naechtlichen-Atmung?" target="_blank">aerzteblatt.de</a>,
          <a href="https://www.medscape.com/viewarticle/979684?src=" target="_blank">MedSpace</a>,
          <a href="https://www.azorobotics.com/News.aspx?newsID=13174" target="_blank">AzoRobotics</a>,
          <a href="https://healthcare-in-europe.com/en/news/ai-detect-parkinsons-breathing.html" target="_blank">healthcare-in-europe</a>,
          <a href="https://www.thedailybeast.com/this-ai-bot-detects-parkinsons-disease-by-listening-to-you-breathe-during-your-sleep" target="_blank">The Daily Beast</a>,
          <a href="https://indianexpress.com/article/technology/science/mit-research-artificial-intelligence-detect-parkinsons-disease-8132802/" target="_blank">Indian Express</a>,
          and more media outlets can be found at <a href="https://nature.altmetric.com/details/134832794/news" target="_blank">here</a>.
          
        </p>
      </div>
    </div>
  </article>`,
  },
  {
    time: "2022.10.1",
    topic: "High Priority",
    selected: true,
    content: `<article class="columns">
    <div class="column is-3">
      <figure class="image">
        <img src="images/publications/2022_tokencut_video.gif">
      </figure>
    </div>
    <div class="column">
      <div class="content">
        <p>
          <b>TokenCut: Segmenting Objects in Images and Videos with Self-supervised Transformer and Normalized Cut</b><br>
          <a href="https://yangtaowang95.github.io/" target="_blank" class="dark">Yangtao Wang</a>, 
          <a href="https://xishen0220.github.io/" target="_blank" class="dark">Xi Shen</a>, <b>Yuan Yuan</b>, Yuming Du,
          <a href="https://scholar.google.com/citations?user=ym_t6QYAAAAJ&hl=zh-CN" class="dark">Maomao Li</a>,
          <a href="http://hushell.github.io/" target="_blank" class="dark">Xu Hu</a>, 
          <a href="http://crowley-coutaz.fr/jlc/jlc.html" target="_blank" class="dark">James Crowley</a>, 
          <a href="https://research.vaufreydaz.org/" target="_blank" class="dark">Dominique Vaufreydaz</a><br>
          <i>arxiv:2209.00383, 2022</i><br>
          <a href="https://www.m-psi.fr/Papers/TokenCut2022/" target="_blank">[Project Page]</a>
          <a href="https://arxiv.org/pdf/2209.00383.pdf" target="_blank">[PDF]</a>
          <a href="bib/2022_tokencut_video.bib" target="_blank">[BibTeX]</a>
          <a href="https://github.com/YangtaoWANG95/TokenCut_video" target="_blank" class="next-element-vertical-align-text-top">[Code]</a>
          <a class="github-button" href="https://github.com/YangtaoWANG95/TokenCut_video" data-icon="octicon-star" data-size="medium" data-show-count="true">Star</a> <br>
        </p>
      </div>
    </div>
  </article>`,
  },
];

let topicList = ["High Priority", "Low Priority"];

$(document).ready(function () {
  function renderPublications(tempList) {
    $("#publications-container").html(
      (tempList || publicationsListArray).reduce(function (pre, cur) {
        return pre + cur.content;
      }, "")
    );
  }

  renderPublications();

  $("#research-topics").html(
    "Research Topics: " +
      topicList
        .map((topic, index) => {
          if (index === topicList.length - 1) {
            return `<a href='#${topic.replace(
              /\s/g,
              ""
            )}' class='publications-show-by-topic'>${topic}<a>`;
          } else {
            return `<a href='#${topic.replace(
              /\s/g,
              ""
            )}' class='publications-show-by-topic'>${topic}<a> / `;
          }
        })
        .join("")
  );

  $("#publications-show-by-time").click(function () {
    publicationsListArray.sort((a, b) => new Date(a.time) - new Date(b.time));

    renderPublications();
  });

  $("#publications-selected").click(function () {
    renderPublications(
      publicationsListArray
        .filter((item) => item.selected)
        .sort((a, b) => new Date(a.time) - new Date(b.time))
    );
  });

  $("#publications-show-by-topic, .publications-show-by-topic").click(
    function () {
      // publicationsListArray.sort((a, b) => a.topic.localeCompare(b.topic));
      // renderPublications();

      let wholeHtmlString = "";
      topicList.forEach((topic) => {
        wholeHtmlString += `<h4 class='topic-title' id='${topic.replace(
          /\s/g,
          ""
        )}'>${topic}</h4>`;
        wholeHtmlString += publicationsListArray
          .filter((item) => item.topic === topic)
          .reduce((pre, cur) => {
            return pre + cur.content;
          }, "");
      });
      $("#publications-container").html(wholeHtmlString);
    }
  );
});
