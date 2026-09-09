const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

// for文の場合
console.log('for文');
for (let cnt_x = 0; cnt_x <16; cnt_x++) {
  console.log(cnt_x + holidays[cnt_x]);
}

// while文の場合
let cnt_y = 0;
 console.log('while文')
while (cnt_y <16) {
  console.log(cnt_y + holidays[cnt_y]);
  cnt_y++;

}