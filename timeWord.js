function timeWord(time) {
  const wordsUnder13 = ['twelve', 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven'];
  const teenWords = ['thirteen', 'fourteen', 'fifteen', 'sixteen', 
  'seventeen', 'eighteen', 'nineteen'];
  const minsWords = ['twenty', 'thirty', 'forty', 'fifty'];
  const hourInt = parseInt(time.slice(0, 2));
  const minsInt = parseInt(time.slice(3));
  const suffix = hourInt < 12 ? 'am' : 'pm';
  let hourString = hourInt > 11 ? wordsUnder13[hourInt - 12] : wordsUnder13[hourInt];
  let minsString = '';

  if ((hourInt === 0 || hourInt === 12) && minsInt === 0) {
    return hourInt === 0 ? 'midnight' : 'noon';
  }

  if (minsInt === 0) {
    minsString = `o'clock`
  }

  if (minsInt > 0 && minsInt < 10) {
    minsString = `oh ${wordsUnder13[minsInt]}`;
  }

  if (minsInt >= 10 && minsInt <= 12) {
    minsString = minsInt === 12 ? wordsUnder13[0] : wordsUnder13[minsInt]
  }

  if (minsInt >= 13 && minsInt <= 19) {
    minsString = teenWords[minsInt - 13];
  }

  if (minsInt > 19) {
    const tensMin = parseInt(time.slice(3, 4));
    const onesMin = parseInt(time.slice(4));
    minsString = onesMin === 0 ? minsWords[tensMin - 2] : `${minsWords[tensMin - 2]} ${wordsUnder13[onesMin]}`
  }

  return `${hourString} ${minsString} ${suffix}`
}

module.exports = timeWord;