/* 
  author: familyboat

  test
*/

import buildCard from "./event.card.js";
import { mount } from "../assets/javascript/event.util.js";

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

mount('#t2b', buildCard(card, 't2b'));
mount('#l2r', buildCard(card, 'l2r'));