/* 
  author: familyboat

  test
*/
import { EventCard } from "./event.card.js";

const e = React.createElement;

const card = {
  "id": 1,
  "topic": "随笔",
  "photos": ["portrait.jpg"],
  "alt": "人物",
  "title": "一件小事",
  "author": "familyboat",
  "paragraphs": [
    "最近晚上睡不好觉，影响可真是大。",
    "第二天早上起来的时候，总感觉身体飘飘的。"],
  "date": "2021-9-1",
  "time": "14:51:34",
  "city": "长沙",
  "mood": "坏",
  "comments": [
    "好心疼你哦！",
    "希望你快点走出来。"]
};

ReactDOM.render(
  e(
    EventCard,
    {
      style: {'max-width': '560px', 'margin': '0 auto'},
      ...card
    },
    null,
  ), 
  document.querySelector('#t2b'));

ReactDOM.render(
  e(
    EventCard,
    {
      isExpand: false,
      style: {'maxWidth': '560px', 'margin': '0 auto'},
      ...card
    },
    null,
  ), 
  document.querySelector('#l2r'));